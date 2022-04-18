import {useTranslation} from 'hooks/useTranslation';
import {useMemo} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import LangToggle from 'ui/lang-toggle/langToggle';
import ThemeToggle from 'ui/theme-toggle/themeToggle';
import './base.scss';
import MainMenu from './components/main-menu/mainMenu';
import {getPageTitleKey} from '../../components/router/routerUtils';

function Base() {
	const location = useLocation();
	const [translations, translationsLoading] = useTranslation({path: 'base', filename: 'base'});

	const currentPageTitleKey = useMemo(() => getPageTitleKey(location), [location.pathname]);

	return <div className="crm-base">
		<div className="crm-base__menu">
			<MainMenu />
		</div>
		<div className="crm-base__main">
			<div className="crm-base__main-heading">
				<h1>
					{translations[currentPageTitleKey]}
				</h1>
				<div className="crm-base__main-heading-actions">
					<div className="crm-base__main-heading-actions__action">
						<LangToggle />
					</div>
					<div className="crm-base__main-heading-actions__action">
						<ThemeToggle />
					</div>
				</div>
			</div>
			<div className="crm-base__main-content">
				<Outlet />
			</div>
		</div>
	</div>
}

export default Base;