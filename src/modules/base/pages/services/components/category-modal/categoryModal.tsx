import {isEmpty} from 'lodash';
import {useContext, useMemo, useState} from 'react';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import Modal from 'ui/modal/modal';
import Textarea from 'ui/textarea/textarea';
import {ServicesContext} from '../../contexts/servicesContext';
import './categoryModal.scss';

const DEFAULT_FORM_VALUE = {
	name: '',
	description: ''
};

function CategoryModal({translations, setModalVisibility, onCancel, onApply}: any) {
	const {selectedCategory} = useContext(ServicesContext);
	const [formValue, setFormValue] = useState(isEmpty({...selectedCategory}) ? DEFAULT_FORM_VALUE : selectedCategory);

	const onFormFieldChange = (key: string, value: string | number) => {
		setFormValue({...formValue, [key]: value});
	};

	const isEdit = useMemo(() => !isEmpty(selectedCategory), [selectedCategory]);

	return <Modal heading={translations[isEdit ? 'services.category.modal.heading.edit' : 'services.category.modal.heading.add']} setVisibility={setModalVisibility}>
		<form className="crm-services__category__modal">
			<div className="crm-services__category__modal-content">
				<Input value={formValue.name} onChange={(e: any) => onFormFieldChange('name', e.target.value)} label={translations['services.category.modal.name']} type="text" />
				<Textarea value={formValue.description} onChange={(e: any) => onFormFieldChange('description', e.target.value)} label={translations['services.category.modal.description']} />
			</div>
			<div className="crm-services__category__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['services.category.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations[isEdit ? 'services.category.modal.action.edit' : 'services.category.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>
}

export default CategoryModal;