import './mainMenu.scss';
import {MAIN_MENU} from './mainMenuConstants';
import MainMenuItem from '../main-menu-item/mainMenuItem';
import {BiSupport} from '@react-icons/all-files/bi/BiSupport';
import {useTranslation} from 'hooks/useTranslation';
import {APP_PAGES} from 'components/router/appPages';
import {last} from 'lodash';
import {useContext} from 'react';
import {BaseContext} from 'modules/base/contexts/baseContext';

function MainMenu() {
	const [translations] = useTranslation({path: 'base', filename: 'main-menu'})
	const {setSupportRequestVisibility} = useContext(BaseContext);

	const onSupportRequestClicked = (): void => {
		setSupportRequestVisibility(true);
	};

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
			</nav>
			<div className="crm-main-menu__footer">
				<button className="crm-main-menu__footer-button" onClick={onSupportRequestClicked}><BiSupport /></button>
				<MainMenuItem item={last(APP_PAGES)} />
			</div>
		</div>

	</div>
}

export default MainMenu;