import {useState} from 'react';
import ServiceCardList from '../service-card-list/serviceCardList';
import ServiceCategory from '../service-category/serviceCategory';
import './servicesListItem.scss';

function ServicesListItem({item, translations}: any) {
	const [expanded, setExpanded] = useState(true);

	return <div className={`crm-services-list-item ${expanded ? 'expanded' : ''}`}>
		<ServiceCategory translations={translations} expanded={expanded} setExpanded={setExpanded} category={item.category} />
		<ServiceCardList translations={translations} list={item.items} categoryId={item.category.id}/>
	</div>
}

export default ServicesListItem;