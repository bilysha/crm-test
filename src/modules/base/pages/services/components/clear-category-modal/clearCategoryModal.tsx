import Button from 'ui/button/button';
import Modal from 'ui/modal/modal';
import './clearCategoryModal.scss';

function ClearCategoryModal({translations, onApply, onCancel, setModalVisibility}: any) {
	return <Modal heading={translations['services.clear.category.modal.heading']} setVisibility={setModalVisibility}>
		<form className="crm-services__clear-category__modal">
			<div className="crm-services__clear-category__modal-content">
				<p>{translations['services.clear.category.modal.message']}</p>
			</div>
			<div className="crm-services__clear-category__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['services.clear.category.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['services.clear.category.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>;
}

export default ClearCategoryModal;
