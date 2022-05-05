import Button from 'ui/button/button';
import './dashboardAddBrand.scss';

function DashboardAddBrand() {
	return <div className="crm-dashboard-add-brand">
		<h3>You don't have any brand for now. Please create your first Brand to get full expierence from the app!</h3>
		<Button>Add Brand</Button>
	</div>
}

export default DashboardAddBrand;
