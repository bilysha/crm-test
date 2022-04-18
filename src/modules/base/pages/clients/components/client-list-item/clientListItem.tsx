import {useContext, useMemo} from 'react';
import {ClientsContext} from '../../contexts/clientsContext';
import './clientListItem.scss';

function ClientListItem({client, theme}: any) {
	const {selectedClient, setSelectedClient} = useContext(ClientsContext);
	const isSelected = useMemo(() => client.id === selectedClient.id, [client, selectedClient]);

	return <button className={`crm-clients-list-item__button ${isSelected && 'selected'}`} onClick={() => setSelectedClient(client)}>
		<img src={`/icons/clients/${client.gender}_${theme}.png`} alt="gender icon" className="crm-clients-list-item__photo" />
		<div className="crm-clients-list-item__name">{client.firstName} {client.lastName}</div>
	</button>;
}

export default ClientListItem;