import Button from 'ui/button/button';
import Modal from 'ui/modal/modal';
import './removeCategoryModal.scss';

function RemoveCategoryModal({translations, onApply, onCancel, setModalVisibility}: any) {
	return <Modal heading={translations['services.remove.category.modal.heading']} setVisibility={setModalVisibility}>
		<form className="crm-services__remove-category__modal">
			<div className="crm-services__remove-category__modal-content">
				<p>{translations['services.remove.category.modal.message']}</p>
			</div>
			<div className="crm-services__remove-category__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['services.remove.category.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['services.remove.category.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>;
}

export default RemoveCategoryModal;
