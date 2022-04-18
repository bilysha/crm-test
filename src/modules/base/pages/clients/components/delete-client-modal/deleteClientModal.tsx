import Button from 'ui/button/button';
import Modal from 'ui/modal/modal';
import './deleteClientModal.scss';

function DeleteClientModal({translations, onApply, onCancel, setModalVisibility}: any) {
	return <Modal heading={translations['clients.delete.client.modal.heading']} setVisibility={setModalVisibility}>
		<form className="crm-clients__delete-client__modal">
			<div className="crm-clients__delete-client__modal-content">
				<p>{translations['clients.delete.client.modal.message']}</p>
			</div>
			<div className="crm-clients__delete-client__modal-actions">
				<Button style={{marginRight: "1rem"}} theme="secondary" onClick={onCancel}>{translations['clients.delete.client.modal.action.cancel']}</Button>
				<Button onClick={onApply}>{translations['clients.delete.client.modal.action.apply']}</Button>
			</div>
		</form>
	</Modal>;
}

export default DeleteClientModal;
