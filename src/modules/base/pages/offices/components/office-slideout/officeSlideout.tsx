import {clone, isEmpty, set} from 'lodash';
import {useContext, useEffect, useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Slideout from 'ui/slideout/slideout';
import 'ui/slideout/slideout.scss';
import Textarea from 'ui/textarea/textarea';
import {OfficesContext} from '../../contexts/officesContext';
import './officeSlideout.scss';

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

function OfficeSlideout({setVisibility, translations, onCancel, onApply}: any) {
	const {selectedOffice} = useContext(OfficesContext);
	const isEdit = !isEmpty(selectedOffice);
	const [formValue, setFormValue] = useState({} as any);

	const onFormFieldChange = (key: string, value: string): void => {
		const originalValue = clone(formValue);

		set(originalValue, key, value);
		setFormValue({...originalValue});
	};
	const onCancelClicked = (e: Event) => {
		onCancel(e);
	};
	const onApplyClicked = (e: Event) => {
		onApply(e, formValue);
	};


	useEffect(() => {
		setFormValue(isEdit ? selectedOffice : {...DEFAULT_FORM_VALUE});

		return () => {
			console.log('destroy');
			setFormValue({...DEFAULT_FORM_VALUE})
		}
	}, []);

	return <Slideout setVisibility={setVisibility} heading={translations[`office.slideout.heading.${isEdit ? 'edit' : 'add'}`]}>
		<div className="crm-slideout-content">
			<div className="crm-slideout-content__main">
				{
					!isEmpty(formValue) && <form className="crm-office-form">
						<div className="crm-office-form__item">
							<Input value={formValue.name} onChange={(e: any) => onFormFieldChange('name', e.target.value)} label={translations['office.slideout.label.name']} />
							<Input value={formValue['address.street']} onChange={(e: any) => onFormFieldChange('address.street', e.target.value)} label={translations['office.slideout.label.street']} />
							<div className="crm-office-form__item__row-combined">
								<Input value={formValue['address.house']} onChange={(e: any) => onFormFieldChange('address.house', e.target.value)} label={translations['office.slideout.label.house']} />
								<Input value={formValue['address.building']} onChange={(e: any) => onFormFieldChange('address.building', e.target.value)} label={translations['office.slideout.label.building']} />
								<Input value={formValue['address.room']} onChange={(e: any) => onFormFieldChange('address.room', e.target.value)} label={translations['office.slideout.label.room']} />
							</div>
							<Textarea value={formValue.comment} onChange={(e: any) => onFormFieldChange('comment', e.target.value)} label={translations['office.slideout.label.comment']} />
						</div>
					</form>
				}
			</div>
			<div className="crm-slideout-content__footer">
				<Button theme="secondary" onClick={onCancelClicked}>{translations['office.slideout.action.cancel']}</Button>
				<Button onClick={onApplyClicked}>{translations[`office.slideout.action.${isEdit ? 'edit' : 'add'}`]}</Button>
			</div>
		</div>
	</Slideout>
}

export default OfficeSlideout;