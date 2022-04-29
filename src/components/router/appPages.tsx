import {MdDashboard} from '@react-icons/all-files/md/MdDashboard';
import {BsListCheck} from '@react-icons/all-files/bs/BsListCheck';
import {MdPeople} from '@react-icons/all-files/md/MdPeople';
import {MdViewList} from '@react-icons/all-files/md/MdViewList';
import {BiUser} from '@react-icons/all-files/bi/BiUser';
import {FiSettings} from '@react-icons/all-files/fi/FiSettings';
import {BsCalendar} from '@react-icons/all-files/bs/BsCalendar';
import {BiBuildings} from '@react-icons/all-files/bi/BiBuildings';
import {BiHelpCircle} from '@react-icons/all-files/bi/BiHelpCircle'
import {APP_ROUTES} from './routerConstants';

export const APP_PAGES = [
	{
		titleKey: 'page.heading.dashboard',
		menuKey: 'main.menu.option.dashboard',
		path: APP_ROUTES.DASHBOARD,
		icon: <MdDashboard />
	},
	{
		titleKey: 'page.heading.offices',
		menuKey: 'main.menu.option.offices',
		path: APP_ROUTES.OFFICES,
		icon: <BiBuildings />
	},
	{
		titleKey: 'page.heading.orders',
		menuKey: 'main.menu.option.orders',
		path: APP_ROUTES.ORDERS,
		icon: <BsListCheck />
	},
	{
		titleKey: 'page.heading.calendar',
		menuKey: 'main.menu.option.calendar',
		path: APP_ROUTES.CALENDAR,
		icon: <BsCalendar />
	},
	{
		titleKey: 'page.heading.clients',
		menuKey: 'main.menu.option.clients',
		path: APP_ROUTES.CLIENTS,
		icon: <MdPeople />
	},
	{
		titleKey: 'page.heading.services',
		menuKey: 'main.menu.option.services',
		path: APP_ROUTES.SERVICES,
		icon: <MdViewList />
	},
	{
		titleKey: 'page.heading.account',
		menuKey: 'main.menu.option.account',
		path: APP_ROUTES.ACCOUNT,
		icon: <BiUser />
	},
	{
		titleKey: 'page.heading.settings',
		menuKey: 'main.menu.option.settings',
		path: APP_ROUTES.SETTINGS,
		icon: <FiSettings />
	},
	{
		titleKey: 'page.heading.help',
		menuKey: 'main.menu.option.help',
		path: APP_ROUTES.HELP,
		icon: <BiHelpCircle />
	}
];
