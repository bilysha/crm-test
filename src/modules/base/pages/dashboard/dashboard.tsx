import {useTranslation} from 'hooks/useTranslation';
import {BaseContext} from 'modules/base/contexts/baseContext';
import {useContext} from 'react';
import Loader from 'ui/loader/loader';
import DashboardWidgetList from './components/widget-list/dashboardWidgetList';
import DashboardAddBrand from './components/add-brand/dashboardAddBrand';
import './dashboard.scss';

function Dashboard() {
	const [translations, translationsLoading] = useTranslation({path: 'dashboard', filename: 'dashboard'});
	const {brands} = useContext(BaseContext);

	return <div className="crm-dashboard">
		{
			translationsLoading
				? <Loader />
				: <>
					<div className="crm-dashboard__heading">
						<h2>Hi, Mate</h2>
					</div>
					<div className="crm-dashboard__content">
						{
							brands && brands.length
								? <DashboardWidgetList />
								: <DashboardAddBrand />
						}
					</div>
				</>
		}
	</div>
}

export default Dashboard;