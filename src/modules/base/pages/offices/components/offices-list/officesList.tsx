import {IOffice} from '../../models/offices.interfaces';
import OfficesListItem from '../offices-list-item/officesListItem';
import './officesList.scss';

function OfficesList({list, translations}: any) {
	return <div className="crm-offices-list">
		{
			list && list.length
				? list.map((office: IOffice) => <li key={office.id}><OfficesListItem translations={translations} item={office} /></li>)
				: <p className="crm-offices-list__empty">{translations['offices.list.empty']}</p>
		}
	</div>
}

export default OfficesList;