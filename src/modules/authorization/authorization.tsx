import {Outlet} from 'react-router-dom';
import './authorization.scss';

function Authorization() {
	return <div className="crm-authorization">
		<div className="crm-authorization__container">
			<div className="crm-authorization__container-content">
				<div className="crm-authorization__container-content__inner content-center">
					<p className="crm-authorization__message crm-authorization__message-large">Join Our Community</p>
					<p className="crm-authorization__message">Beauty CRM - here should be a reklamny slogan in order to motivate people to use this application.</p>
				</div>
			</div>
			<div className="crm-authorization__container-content">
				<div className="crm-authorization__container-content__inner">
					<Outlet />
				</div>
			</div>
		</div>
	</div>
}

export default Authorization;
