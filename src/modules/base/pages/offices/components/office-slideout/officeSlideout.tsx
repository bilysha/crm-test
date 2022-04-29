import {FaPlusCircle} from '@react-icons/all-files/fa/FaPlusCircle';
import {IoMdTrash} from '@react-icons/all-files/io/IoMdTrash';
import {cloneDeep, isEmpty, set} from 'lodash';
import {useContext, useEffect, useMemo, useState} from 'react';
import ButtonIcon from 'ui/button-icon/buttonIcon';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Slideout from 'ui/slideout/slideout';
import 'ui/slideout/slideout.scss';
import Textarea from 'ui/textarea/textarea';
import {OfficesContext} from '../../contexts/officesContext';
import './officeSlideout.scss';

function OfficeSlideout({setVisibility, translations, onCancel, onApply}: any) {
	const {selectedOffice} = useContext(OfficesContext);
	const isEdit = !isEmpty(selectedOffice);
	const [formValues, setFormValues] = useState([] as any);
	const DEFAULT_FORM_VALUE = {
		name: '',
		address: {
			street: '',
			house: '',
			building: '',
			room: ''
		},
		comment: ''
	};
	const onFormFieldChange = (formIndex: number, key: string, value: string): void => {
		const originalValues = cloneDeep(formValues);

		set(originalValues[formIndex], key, value);
		setFormValues([...originalValues]);
	};
	const onCancelClicked = (e: Event) => {
		onCancel(e);
	};
	const onApplyClicked = (e: Event) => {
		onApply(e, formValues);
	};
	const addOfficeItem = (): void => {
		const originalValues = cloneDeep(formValues);

		originalValues.push({...DEFAULT_FORM_VALUE, id: Date.now()});
		setFormValues([...originalValues]);
	};
	const deleteFormItem = (index: number): void => {
		const originalValues = cloneDeep(formValues);

		originalValues.splice(index, 1);
		setFormValues([...originalValues]);
	}

	const isDeleteFormItemEnabled = useMemo(() => !isEdit && formValues && formValues.length > 1, [formValues]);

	useEffect(() => {
		setFormValues([isEdit ? selectedOffice : {...DEFAULT_FORM_VALUE, id: Date.now()}]);

		return () => {
			setFormValues({...DEFAULT_FORM_VALUE})
		}
	}, []);

	return <Slideout setVisibility={setVisibility} heading={translations[`office.slideout.heading.${isEdit ? 'edit' : 'add'}`]}>
		<div className="crm-slideout-content">
			<div className="crm-slideout-content__main">
				{
					!isEmpty(formValues) && <form className="crm-office-form">
						{
							formValues.map(
								(formValue: any, index: number) => <div key={formValue.id} className={`crm-office-form__item crm-office-form__item-${index}`}>
									{
										isDeleteFormItemEnabled && <div className="crm-office-form__item-delete-action">
											<ButtonIcon accent="warn" onClick={() => deleteFormItem(index)}><IoMdTrash /></ButtonIcon>
										</div>
									}
									<Input
										value={formValue.name}
										uiStyle="secondary"
										onChange={(e: any) => onFormFieldChange(index, 'name', e.target.value)}
										label={translations['office.slideout.label.name']} />
									<Input
										value={formValue.address.street}
										uiStyle="secondary"
										onChange={(e: any) => onFormFieldChange(index, 'address.street', e.target.value)}
										label={translations['office.slideout.label.street']} />
									<div className="crm-office-form__item__row-combined">
										<Input
											value={formValue.address.house}
											uiStyle="secondary"
											onChange={(e: any) => onFormFieldChange(index, 'address.house', e.target.value)}
											label={translations['office.slideout.label.house']} />
										<Input
											value={formValue.address.building}
											uiStyle="secondary"
											onChange={(e: any) => onFormFieldChange(index, 'address.building', e.target.value)}
											label={translations['office.slideout.label.building']} />
										<Input
											value={formValue.address.room}
											uiStyle="secondary"
											onChange={(e: any) => onFormFieldChange(index, 'address.room', e.target.value)}
											label={translations['office.slideout.label.room']} />
									</div>
									<Textarea
										value={formValue.comment}
										uiStyle="secondary"
										onChange={(e: any) => onFormFieldChange(index, 'comment', e.target.value)}
										label={translations['office.slideout.label.comment']} />
								</div>
							)
						}
					</form>
				}
				{!isEdit && <Button onClick={addOfficeItem}>
					<FaPlusCircle style={{marginRight: '1rem'}} /> {translations['office.slideout.action.more.offices']}
				</Button>}
			</div>
			<div className="crm-slideout-content__footer">
				<Button theme="secondary" onClick={onCancelClicked}>{translations['office.slideout.action.cancel']}</Button>
				<Button onClick={onApplyClicked}>{translations[`office.slideout.action.${isEdit ? 'edit' : 'add'}`]}</Button>
			</div>
		</div>
	</Slideout>
}

export default OfficeSlideout;