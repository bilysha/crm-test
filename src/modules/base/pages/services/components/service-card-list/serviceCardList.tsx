import ServiceCard from '../service-card/serviceCard';
import './serviceCardList.scss';
import {FiPlusSquare} from '@react-icons/all-files/fi/FiPlusSquare';
import {useContext} from 'react';
import {ServicesContext} from '../../contexts/servicesContext';

function ServiceCardList({list, translations, categoryId}: any) {
	const {setServiceModalVisibility, setSelectedService, setServiceCategoryId} = useContext(ServicesContext);

	const onAddServiceClicked = () => {
		setSelectedService(null);
		setServiceCategoryId(categoryId);
		setServiceModalVisibility(true);
	}

	return <ul className="crm-service-card-list">
		<li className="crm-service-card-list-item">
			<button className="crm-service-card-list-item__new" onClick={onAddServiceClicked}>
				<FiPlusSquare style={{marginBottom: '1rem', fontSize: '1.5rem'}} />
				<span>{translations['service.card.add.new']}</span>
			</button>
		</li>
		{list.map((item: any) => (
			<li key={item.id} className="crm-service-card-list-item">
				<ServiceCard translations={translations} item={item} categoryId={categoryId} />
			</li>
		))}
	</ul>
}

export default ServiceCardList;