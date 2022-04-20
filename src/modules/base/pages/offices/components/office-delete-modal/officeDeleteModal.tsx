import Button from 'ui/button/button';
import Modal from 'ui/modal/modal';
import './officeDeleteModal.scss';

function OfficeDeleteModal({translations, onApply, onCancel, setModalVisibility}: any) {
	return <Modal heading={translations['office.delete.modal.heading']} setVisibility={setModalVisibility}>
		<form className="crm-services__remove-category__modal">
			<div className="crm-services__remove-category__modal-content">
				<p>{translations['office.delete.modal.message']}</p>
			</div>
			<div className="crm-services__remove-category__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['office.delete.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['office.delete.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>;
}

export default OfficeDeleteModal;
