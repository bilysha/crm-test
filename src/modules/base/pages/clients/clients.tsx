import {useTranslation} from 'hooks/useTranslation';
import {useEffect, useState} from 'react';
import Loader from 'ui/loader/loader';
import './clients.scss';
import ClientDetail from './components/client-detail/clientDetail';
import ClientModal from './components/client-modal/clientModal';
import ClientsList from './components/clients-list/clientsList';
import DeleteClientModal from './components/delete-client-modal/deleteClientModal';
import {ClientsContext} from './contexts/clientsContext';

const MOCK_CLIENTS = [
	{
		id: 1,
		firstName: 'Илья',
		lastName: 'Белоусов',
		gender: 'male',
		dateOfBirth: '1996-03-12',
		email: 'ilyaibelousov@gmail.com',
		phone: '375259224653',
		created: '2022-04-10'
	},
	{
		id: 2,
		firstName: 'Юля',
		lastName: 'Белоусова',
		gender: 'female',
		dateOfBirth: '1996-09-12',
		email: 'juliaibelousova@icloud.com',
		phone: '375295049678',
		created: '2022-04-14'
	},
	{
		id: 3,
		firstName: 'Бади',
		lastName: '',
		gender: 'male',
		dateOfBirth: '2020-12-24',
		email: '',
		phone: '',
		created: '2022-04-16'
	}
];


function Clients() {
	const [clients, setClients] = useState(MOCK_CLIENTS);
	const [selectedClient, setSelectedClient] = useState({} as any);
	const [deleteClientModalVisibility, setDeteleClientModalVisibility] = useState(false);
	const [clientModalVisibility, setClientModalVisibility] = useState(false);
	const [clientEditing, setClientEditing] = useState(false);
	const [translations, translationsLoading] = useTranslation({path: 'clients', filename: 'clients'});

	useEffect(() => {
		setSelectedClient(clients[0]);
	}, []);

	/* Delete Client Modal */
	const onDeleteClientCancelled = (e: Event) => {
		e.preventDefault();
		setDeteleClientModalVisibility(false);
	};
	const onDeleteClientApplied = (e: Event) => {
		e.preventDefault();
		setDeteleClientModalVisibility(false);
	};

	/* Client Modal */
	const onClientCancelled = (e: Event) => {
		e.preventDefault();
		setClientModalVisibility(false);
	};
	const onClientApplied = (e: Event) => {
		e.preventDefault();
		setClientModalVisibility(false);
	};

	return <div className="crm-clients">
		<ClientsContext.Provider value={{
			selectedClient,
			setSelectedClient,
			setDeteleClientModalVisibility,
			setClientModalVisibility,
			clientEditing,
			setClientEditing
		}}>
			{
				translationsLoading
					? <Loader />
					: <>
						{
							deleteClientModalVisibility && <DeleteClientModal
								setModalVisibility={setDeteleClientModalVisibility}
								onCancel={onDeleteClientCancelled}
								onApply={onDeleteClientApplied}
								translations={translations} />
						}
						{
							clientModalVisibility && <ClientModal
								setModalVisibility={setClientModalVisibility}
								onCancel={onClientCancelled}
								onApply={onClientApplied}
								translations={translations} />
						}
						<ClientsList list={clients} translations={translations} />
						<ClientDetail translations={translations} />
					</>
			}
		</ClientsContext.Provider>
	</div>
}

export default Clients;