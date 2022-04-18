import {useContext} from 'react';
import {ServicesContext} from '../../contexts/servicesContext';
import {getVisibleDescription} from '../../utils/serviceCardutils';
import './serviceCard.scss';

function ServiceCard({item, translations, categoryId}: any) {
	const {setSelectedService, setServiceModalVisibility, setServiceCategoryId} = useContext(ServicesContext);

	const onCardClicked = (e: any) => {
		e.preventDefault();
		setServiceCategoryId(categoryId);
		setSelectedService(item);
		setServiceModalVisibility(true);
	};

	return <button className="crm-service-card" onClick={onCardClicked}>
		<div className="crm-service-card__body">
			<h4 className="crm-service-card__heading" title={item.name}>{item.name}</h4>
			<p className="crm-service-card__description" title={item.description}>
				<span>{getVisibleDescription(item.description) || translations['service.card.description.missing']}</span>
			</p>
		</div>
		<div className="crm-service-card__footer">
			<p className="crm-service-card__price">{item.price}</p>
		</div>
	</button>
}

export default ServiceCard;