import {FiPlusSquare} from '@react-icons/all-files/fi/FiPlusSquare';
import {ThemeContext} from 'contexts/themeContext';
import {useContext} from 'react';
import {ClientsContext} from '../../contexts/clientsContext';
import ClientListItem from '../client-list-item/clientListItem';
import './clientsList.scss';

function ClientsList({list, translations}: any) {
	const {theme}: any = useContext(ThemeContext);
	const {setClientModalVisibility, setClientEditing} = useContext(ClientsContext);

	const onNewClientClicked = () => {
		setClientEditing(false);
		setClientModalVisibility(true);
	};

	return <ul className="crm-clients-list">
		<li className="crm-clients-list-item">
			<button className="crm-clients-list-item__new" onClick={onNewClientClicked}>
				<FiPlusSquare style={{marginRight: '0.5rem'}} />
				{translations['clients.list.new']}
			</button>
		</li>
		{list.map((client: any) => <li key={client.id} className="crm-clients-list-item">
			<ClientListItem client={client} theme={theme} />
		</li>)}
	</ul>
}

export default ClientsList;
