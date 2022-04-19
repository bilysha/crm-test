import {useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Modal from 'ui/modal/modal';
import './personalInfoModal.scss';

function PersonalInfoModal({translations, setModalVisibility, personalInfo, onCancel, onApply}: any) {
	const [formValue, setFormValue] = useState(personalInfo);

	const onFormFieldChange = (field: string, value: string) => {
		setFormValue({...formValue, [field]: value});
	};

	return <Modal heading={translations['account.personal.info.modal.heading']} setVisibility={setModalVisibility}>
		<form className="crm-account__personal-info__modal">
			<div className="crm-account__personal-info__modal-content">
				<div className="crm-account__personal-info__modal-content__row">
					<div className="crm-account__personal-info__modal-content__row-item">
						<Input
							value={formValue.firstName}
							onChange={(e: any) => onFormFieldChange('firstName', e.target.value)}
							label={translations['account.personal.info.modal.firstName']}
							type="text" />
					</div>
					<div className="crm-account__personal-info__modal-content__row-item">
						<Input
							value={formValue.lastName}
							onChange={(e: any) => onFormFieldChange('lastName', e.target.value)}
							label={translations['account.personal.info.modal.lastName']}
							type="text" />
					</div>
				</div>
				<Input
					value={formValue.email}
					onChange={(e: any) => onFormFieldChange('email', e.target.value)}
					label={translations['account.personal.info.modal.email']}
					type="email" />
				<Input
					value={formValue.phone}
					onChange={(e: any) => onFormFieldChange('phone', e.target.value)}
					label={translations['account.personal.info.modal.phone']}
					type="text" />
				<div className="crm-account__personal-info__modal-content__row">
					<Input
						value={formValue.dateOfBirth}
						onChange={(e: any) => onFormFieldChange('dateOfBirth', e.target.value)}
						label={translations['account.personal.info.modal.dateOfBirth']}
						size="normal"
						lang="ru"
						type="date" />
				</div>
			</div>
			<div className="crm-account__personal-info__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['account.personal.info.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['account.personal.info.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>
}

export default PersonalInfoModal;