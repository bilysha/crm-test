import Authorization from 'modules/authorization/authorization';
import SignIn from 'modules/authorization/pages/sign-in/signIn';
import Base from 'modules/base/base';
import Account from 'modules/base/pages/account/account';
import Calendar from 'modules/base/pages/calendar/calendar';
import Clients from 'modules/base/pages/clients/clients';
import Dashboard from 'modules/base/pages/dashboard/dashboard';
import Offices from 'modules/base/pages/offices/offices';
import Orders from 'modules/base/pages/orders/orders';
import Services from 'modules/base/pages/services/services';
import Settings from 'modules/base/pages/settings/settings';
import {
	Navigate,
	Route,
	Routes
} from 'react-router-dom';
import {
	ACCOUNT_ROUTE,
	APP_ROUTES,
	AUTHORIZATION_ROUTE,
	AUTHORIZATION_ROUTES,
	BASE_ROUTE,
	CALENDAR_ROUTE,
	CLIENTS_ROUTE,
	DASHBOARD_ROUTE,
	OFFICES_ROUTE,
	ORDERS_ROUTE,
	SERVICES_ROUTE,
	SETTINGS_ROUTE,
	SIGN_IN_ROUTE
} from './routerConstants';

function AppRouter() {
	return <Routes>
		<Route path={AUTHORIZATION_ROUTE} element={<Authorization />} >
			<Route path={SIGN_IN_ROUTE} element={<SignIn />} />
			<Route path="" element={<Navigate to={AUTHORIZATION_ROUTES.SIGN_IN} />} />
		</Route>
		<Route path={BASE_ROUTE} element={<Base />} >
			<Route path={DASHBOARD_ROUTE} element={<Dashboard />} />
			<Route path={OFFICES_ROUTE} element={<Offices />} />
			<Route path={ORDERS_ROUTE} element={<Orders />} />
			<Route path={CLIENTS_ROUTE} element={<Clients />} />
			<Route path={CALENDAR_ROUTE} element={<Calendar />} />
			<Route path={SERVICES_ROUTE} element={<Services />} />
			<Route path={ACCOUNT_ROUTE} element={<Account />} />
			<Route path={SETTINGS_ROUTE} element={<Settings />} />
			<Route path="" element={<Navigate to={APP_ROUTES.DASHBOARD} />} />
		</Route>
		<Route path="/" element={<Navigate to={AUTHORIZATION_ROUTE} />} />
	</Routes>
}

export default AppRouter;