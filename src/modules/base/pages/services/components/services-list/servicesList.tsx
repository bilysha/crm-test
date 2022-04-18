import {useTranslation} from 'hooks/useTranslation';
import ServiceListItem from '../services-list-item/servicesListItem';
import './servicesList.scss';

function ServicesList({list}: any) {
	const [translations] = useTranslation({path: 'services', filename: 'services-list'});

	return <div className="crm-services-list__container">
		{
			list && list.length
				? <ul className="crm-services-list">
					{list.map((listItem: any) => (
						<li key={listItem.category.id}>
							<ServiceListItem translations={translations} item={listItem} />
						</li>
					))}
				</ul>
				: <p className="crm-services-list__empty">{translations['services.list.empty']}</p>
		}
	</div>
}

export default ServicesList;