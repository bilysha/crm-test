import './mainMenu.scss';
import {MAIN_MENU} from './mainMenuConstants';
import MainMenuItem from '../main-menu-item/mainMenuItem';
import {FiChevronsRight} from '@react-icons/all-files/fi/FiChevronsRight';
import {useTranslation} from 'hooks/useTranslation';
import {APP_PAGES} from 'components/router/appPages';
import {useContext, useMemo, useReducer} from 'react';
import BrandsDropdown from '../brands-dropdown/brandsDropdows';
import {BaseContext} from 'modules/base/contexts/baseContext';

function MainMenu() {
	const [translations] = useTranslation({path: 'base', filename: 'main-menu'});
	const [menuExpanded, toggleMenuExpanded] = useReducer((expanded: boolean) => !expanded, false);
	const {brands} = useContext(BaseContext);

	const brandsAvailable = useMemo(() => brands && brands.length, [brands]);


	return <div className={`crm-main-menu ${menuExpanded ? 'expanded' : ''}`}>
		<div className="crm-main-menu__brands-dropdown">
			<BrandsDropdown />
		</div>
		<div className="crm-main-menu__content">
			<nav className="crm-main-menu__nav">
				<ul className="crm-main-menu__nav-list">
					{
						MAIN_MENU.map((menuItem: any) => <li key={menuItem.path} className="crm-main-menu__nav-list-item">
							<MainMenuItem
								disabled={!brandsAvailable && menuItem.path !== APP_PAGES.DASHBOARD.path}
								item={menuItem}
								title={translations[menuItem.menuKey]} />
						</li>)
					}
				</ul>
			</nav>
			<div className="crm-main-menu__footer">
				<MainMenuItem item={APP_PAGES.HELP} title={translations[APP_PAGES.HELP.menuKey]} />
				<button className="crm-main-menu__footer-button toggle-expanded-button" onClick={toggleMenuExpanded}><FiChevronsRight /></button>
			</div>
		</div>

	</div>
}

export default MainMenu;