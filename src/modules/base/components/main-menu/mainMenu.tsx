import './mainMenu.scss';
import {MAIN_MENU, USER_OPTIONS} from './mainMenuConstants';
import MainMenuItem from '../main-menu-item/mainMenuItem';
import {FiLogOut} from '@react-icons/all-files/fi/FiLogOut'
import {useNavigate} from 'react-router-dom';
import {AUTHORIZATION_ROUTE} from '../../../../components/router/routerConstants';
import {useTranslation} from 'hooks/useTranslation';

function MainMenu() {
	const navigate = useNavigate();
	const [translations, translationsLoading] = useTranslation({path: 'main-menu', filename: 'main-menu'})

	const onSignOut = () => navigate(AUTHORIZATION_ROUTE);

	return <div className="crm-main-menu">
		<div className="crm-main-menu__logo-container">
			<div className="crm-main-menu__logo">
				<span>C.R.M.</span>
			</div>
		</div>
		<div className="crm-main-menu__content">
			<nav className="crm-main-menu__nav">
				<ul className="crm-main-menu__nav-list">
					{
						MAIN_MENU.map((menuItem: any) => <li key={menuItem.path} className="crm-main-menu__nav-list-item"><MainMenuItem item={menuItem} title={translations[menuItem.menuKey]} /></li>)
					}
				</ul>
				<ul className="crm-main-menu__nav-list user-options">
					{
						USER_OPTIONS.map((menuItem: any) => <li key={menuItem.path} className="crm-main-menu__nav-list-item"><MainMenuItem item={menuItem} title={translations[menuItem.menuKey]} /></li>)
					}
				</ul>
			</nav>
			<div className="crm-main-menu__logout">
				<button className="crm-main-menu__logout-button" title={translations['main.menu.option.sign.out']} onClick={onSignOut}><FiLogOut /></button>
			</div>
		</div>

	</div>
}

export default MainMenu;