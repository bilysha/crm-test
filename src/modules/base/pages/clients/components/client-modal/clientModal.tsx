import {useContext, useState} from 'react';
import Button from 'ui/button/button';
import InputRadio from 'ui/input-radio/inputRadio';
import Input from 'ui/input/input';
import Modal from 'ui/modal/modal';
import {ClientsContext} from '../../contexts/clientsContext';
import './clientModal.scss';

const DEFAULT_FORM_VALUE = {
	firstName: '',
	lastName: '',
	gender: '',
	dateOfBirth: '',
	email: '',
	phone: ''
};

function ClientModal({translations, setModalVisibility, onCancel, onApply}: any) {
	const {clientEditing, selectedClient} = useContext(ClientsContext);
	const [formValue, setFormValue] = useState(clientEditing ? selectedClient : DEFAULT_FORM_VALUE);

	const onFormFieldChange = (key: string, value: string | number) => {
		setFormValue({...formValue, [key]: value});
	};

	return <Modal heading={translations[clientEditing ? 'client.modal.heading.edit' : 'client.modal.heading.add']} setVisibility={setModalVisibility}>
		<form className="crm-clients__client__modal">
			<div className="crm-clients__client__modal-content">
				<div className="crm-clients__client__modal-content__row">
					<div className="crm-clients__client__modal-content__row-item">
						<Input
							value={formValue.firstName}
							onChange={(e: any) => onFormFieldChange('firstName', e.target.value)}
							label={translations['client.modal.firstName']}
							type="text" />
					</div>
					<div className="crm-clients__client__modal-content__row-item">
						<Input
							value={formValue.lastName}
							onChange={(e: any) => onFormFieldChange('lastName', e.target.value)}
							label={translations['client.modal.lastName']}
							type="text" />
					</div>
				</div>
				<Input
					value={formValue.email}
					onChange={(e: any) => onFormFieldChange('email', e.target.value)}
					label={translations['client.modal.email']}
					type="email" />
				<Input
					value={formValue.phone}
					onChange={(e: any) => onFormFieldChange('phone', e.target.value)}
					label={translations['client.modal.phone']}
					type="text" />
				<div className="crm-clients__client__modal-content__row">
					<div className="crm-clients__client__modal-content__row-item">
						<Input
							value={formValue.dateOfBirth}
							onChange={(e: any) => onFormFieldChange('dateOfBirth', e.target.value)}
							label={translations['client.modal.dateOfBirth']}
							lang="ru"
							type="date" />
					</div>
					<div className="crm-clients__client__modal-content__row-item">
						<InputRadio
							label={translations['client.modal.gender']}
							value={formValue.gender}
							onChange={(e: any) => onFormFieldChange('gender', e.target.value)}
							options={
								[
									{id: 1, value: 'male', label: translations['client.modal.gender.male']},
									{id: 2, value: 'female', label: translations['client.modal.gender.female']}
								]
							} />
					</div>
				</div>
			</div>
			<div className="crm-clients__client__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['client.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations[clientEditing ? 'client.modal.action.edit' : 'client.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>
}

export default ClientModal;