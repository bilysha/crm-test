import {FaTrash} from '@react-icons/all-files/fa/FaTrash';
import {MdEdit} from '@react-icons/all-files/md/MdEdit';
import {ThemeContext} from 'contexts/themeContext';
import {useContext} from 'react';
import ButtonIcon from 'ui/button-icon/buttonIcon';
import {ClientsContext} from '../../contexts/clientsContext';
import {formatDate, formatPhomeNumber} from '../../utils/clientsUtils';
import OrdersHistoryList from '../orders-history-list/ordersHistoryList';
import './clientDetail.scss';

function ClientDetail({translations}: any) {
	const {selectedClient, setDeteleClientModalVisibility, setClientEditing, setClientModalVisibility} = useContext(ClientsContext);
	const {theme} = useContext(ThemeContext);

	const onEditClicked = () => {
		setClientEditing(true);
		setClientModalVisibility(true);
	};
	const onDeleteClicked = () => {
		setDeteleClientModalVisibility(true);
	};

	return <div className="crm-client-detail">
		<div className="crm-client-detail__heading">
			<div className="crm-client-detail__heading-info">
				<img src={`/icons/clients/${selectedClient.gender}_${theme}.png`} alt="gender icon" className="crm-client-detail__heading__photo" />
				<div className="crm-client-detail__heading__name">
					<h2 className="crm-client-detail__name__first-name">{selectedClient.firstName}</h2>
					<h2 className="crm-client-detail__name__last-name">{selectedClient.lastName}</h2>
				</div>
			</div>
			<div className="crm-client-detail__heading-actions">
				<ButtonIcon title={translations['service.category.edit']} style={{marginRight: '1rem'}} onClick={onEditClicked}><MdEdit /></ButtonIcon>
				<ButtonIcon title={translations['service.category.remove']} onClick={onDeleteClicked}><FaTrash /></ButtonIcon>
			</div>
		</div>
		<div className="crm-client-detail__main">
			<div className="crm-client-detail__main-info">
				<div className="crm-client-detail__main__row">
					<p className="crm-client-detail__main__row-label">{translations['client.detail.label.gender']}</p>
					<h4 className="crm-client-detail__main__row-value">{translations[`client.detail.label.gender.${selectedClient.gender}`]}</h4>
				</div>
				<div className="crm-client-detail__main__row">
					<p className="crm-client-detail__main__row-label">{translations['client.detail.label.dateOfBirth']}</p>
					<h4 className="crm-client-detail__main__row-value">{selectedClient.dateOfBirth ? formatDate(selectedClient.dateOfBirth) : translations['client.detail.value.missing']}</h4>
				</div>
				<div className="crm-client-detail__main__row">
					<p className="crm-client-detail__main__row-label">{translations['client.detail.label.email']}</p>
					<h4 className="crm-client-detail__main__row-value">{selectedClient.email || translations['client.detail.value.missing']}</h4>
				</div>
				<div className="crm-client-detail__main__row">
					<p className="crm-client-detail__main__row-label">{translations['client.detail.label.phone']}</p>
					<h4 className="crm-client-detail__main__row-value">{selectedClient.phone ? formatPhomeNumber(selectedClient.phone) : translations['client.detail.value.missing']}</h4>
				</div>
				<div className="crm-client-detail__main__row special">
					<p className="crm-client-detail__main__row-label">{translations['client.detail.label.created']}</p>
					<h4 className="crm-client-detail__main__row-value">{formatDate(selectedClient.created)}</h4>
				</div>
			</div>
			<div className="crm-client-detail__main-history">
				<p>{translations['client.detail.orders.history']}</p>
				<OrdersHistoryList />
			</div>
		</div>
	</div>
}

export default ClientDetail;