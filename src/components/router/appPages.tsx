import {MdDashboard} from '@react-icons/all-files/md/MdDashboard';
import {BsListCheck} from '@react-icons/all-files/bs/BsListCheck';
import {FiList} from '@react-icons/all-files/fi/FiList';
import {FiSettings} from '@react-icons/all-files/fi/FiSettings';
import {FiCalendar} from '@react-icons/all-files/fi/FiCalendar';
import {FiHelpCircle} from '@react-icons/all-files/fi/FiHelpCircle';
import {FiUsers} from '@react-icons/all-files/fi/FiUsers';
import {FiUser} from '@react-icons/all-files/fi/FiUser';
import {BiBuildings} from '@react-icons/all-files/bi/BiBuildings';

import {APP_ROUTES} from './routerConstants';

export const APP_PAGES = {
	DASHBOARD: {
		titleKey: 'page.heading.dashboard',
		menuKey: 'main.menu.option.dashboard',
		path: APP_ROUTES.DASHBOARD,
		icon: <MdDashboard />
	},
	OFFICES: {
		titleKey: 'page.heading.offices',
		menuKey: 'main.menu.option.offices',
		path: APP_ROUTES.OFFICES,
		icon: <BiBuildings />
	},
	ORDERS: {
		titleKey: 'page.heading.orders',
		menuKey: 'main.menu.option.orders',
		path: APP_ROUTES.ORDERS,
		icon: <BsListCheck />
	},
	CALENDAR: {
		titleKey: 'page.heading.calendar',
		menuKey: 'main.menu.option.calendar',
		path: APP_ROUTES.CALENDAR,
		icon: <FiCalendar />
	},
	CLIENTS: {
		titleKey: 'page.heading.clients',
		menuKey: 'main.menu.option.clients',
		path: APP_ROUTES.CLIENTS,
		icon: <FiUsers />
	},
	SERVICES: {
		titleKey: 'page.heading.services',
		menuKey: 'main.menu.option.services',
		path: APP_ROUTES.SERVICES,
		icon: <FiList />
	},
	ACCOUNT: {
		titleKey: 'page.heading.account',
		menuKey: 'main.menu.option.account',
		path: APP_ROUTES.ACCOUNT,
		icon: <FiUser />
	},
	SETTINGS: {
		titleKey: 'page.heading.settings',
		menuKey: 'main.menu.option.settings',
		path: APP_ROUTES.SETTINGS,
		icon: <FiSettings />
	},
	HELP: {
		titleKey: 'page.heading.help',
		menuKey: 'main.menu.option.help',
		path: APP_ROUTES.HELP,
		icon: <FiHelpCircle />
	}
};
