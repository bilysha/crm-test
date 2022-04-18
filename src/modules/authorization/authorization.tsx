import {Outlet} from 'react-router-dom';
import './authorization.scss';
import LangToggle from '../../ui/lang-toggle/langToggle';
import ThemeToggle from '../../ui/theme-toggle/themeToggle';

function Authorization() {
	return <div className="crm-authorization">
		<div className="crm-authorization__container">
			<div className="crm-authorization__container-content">
				<Outlet />
			</div>
			<div className="crm-authorization__container-actions">
				<div className="crm-authorization__container-actions__action">
					<LangToggle />
				</div>
				<div className="crm-authorization__container-actions__action">
					<ThemeToggle />
				</div>
			</div>
		</div>
	</div>
}

export default Authorization;