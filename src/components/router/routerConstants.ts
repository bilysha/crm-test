/* Base routes */
export const BASE_ROUTE = '/base';

export const DASHBOARD_ROUTE = 'dashboard';
export const OFFICES_ROUTE = 'offices';
export const ORDERS_ROUTE = 'orders';
export const CALENDAR_ROUTE = 'calendar';
export const CLIENTS_ROUTE = 'clients';
export const SERVICES_ROUTE = 'services';
export const ACCOUNT_ROUTE = 'account';
export const SETTINGS_ROUTE = 'settings';

export const APP_ROUTES = {
	DASHBOARD: `${BASE_ROUTE}/${DASHBOARD_ROUTE}`,
	OFFICES: `${BASE_ROUTE}/${OFFICES_ROUTE}`,
	ORDERS: `${BASE_ROUTE}/${ORDERS_ROUTE}`,
	CALENDAR: `${BASE_ROUTE}/${CALENDAR_ROUTE}`,
	CLIENTS: `${BASE_ROUTE}/${CLIENTS_ROUTE}`,
	SERVICES: `${BASE_ROUTE}/${SERVICES_ROUTE}`,
	ACCOUNT: `${BASE_ROUTE}/${ACCOUNT_ROUTE}`,
	SETTINGS: `${BASE_ROUTE}/${SETTINGS_ROUTE}`
};

/* Authorization routes */
export const AUTHORIZATION_ROUTE = '/authorization';

export const SIGN_IN_ROUTE = 'sign-in';
export const SIGN_UP_ROUTE = 'sign-up';
export const FORGOT_PASSWORD_ROUTE = 'forgot-password';

export const AUTHORIZATION_ROUTES = {
	SIGN_IN: `${AUTHORIZATION_ROUTE}/${SIGN_IN_ROUTE}`,
	SIGN_UP: `${AUTHORIZATION_ROUTE}/${SIGN_UP_ROUTE}`,
	FORGOT_PASSWORD: `${AUTHORIZATION_ROUTE}/${FORGOT_PASSWORD_ROUTE}`
};
