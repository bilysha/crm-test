import {isEmpty} from 'lodash';
import {useContext, useMemo, useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Modal from 'ui/modal/modal';
import Textarea from 'ui/textarea/textarea';
import {ServicesContext} from '../../contexts/servicesContext';
import './serviceModal.scss';

const DEFAULT_FORM_VALUE = {
	name: '',
	description: '',
	price: ''
};

function ServiceModal({translations, setModalVisibility, onCancel, onApply}: any) {
	const {selectedService} = useContext(ServicesContext);
	const [formValue, setFormValue] = useState(isEmpty({...selectedService}) ? DEFAULT_FORM_VALUE : selectedService);

	const onFormFieldChange = (key: string, value: string | number) => {
		setFormValue({...formValue, [key]: value});
	};

	const isEdit = useMemo(() => !isEmpty(selectedService), [selectedService]);

	return <Modal heading={translations[isEdit ? 'services.service.modal.heading.edit' : 'services.service.modal.heading.add']} setVisibility={setModalVisibility}>
		<form className="crm-services__service__modal">
			<div className="crm-services__service__modal-content">
				<Input value={formValue.name} onChange={(e: any) => onFormFieldChange('name', e.target.value)} label={translations['services.service.modal.name']} type="text" />
				<Textarea value={formValue.description} onChange={(e: any) => onFormFieldChange('description', e.target.value)} label={translations['services.service.modal.description']} />
				<Input value={formValue.price} onChange={(e: any) => onFormFieldChange('price', e.target.value)} label={translations['services.service.modal.price']} type="text" />
			</div>
			<div className="crm-services__service__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['services.service.modal.action.cancel']}</Button>
				{isEdit && <Button style={{marginRight: "1rem"}} theme="warn" onClick={onCancel}>{translations['services.service.modal.action.delete']}</Button>}
				<Button onClick={onApply}>{translations[isEdit ? 'services.service.modal.action.edit' : 'services.service.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>;
}

export default ServiceModal;