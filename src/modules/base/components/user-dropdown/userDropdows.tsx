import {BiUser} from '@react-icons/all-files/bi/BiUser';
import {APP_ROUTES, AUTHORIZATION_ROUTES} from 'components/router/routerConstants';
import {useTranslation} from 'hooks/useTranslation';
import {BaseContext} from 'modules/base/contexts/baseContext';
import {useContext, useMemo, useReducer} from 'react';
import {useNavigate} from 'react-router-dom';
import './userDropdown.scss';

function UserDropdown() {
	const [expanded, toggleExpanded] = useReducer((expanded: boolean) => !expanded, false);
	const [translations] = useTranslation({path: 'base', filename: 'user-dropdown'});
	const {setNotificationsVisibility, setSupportRequestVisibility, brands} = useContext(BaseContext);
	const navigate = useNavigate();

	const onItemClicked = (): void => {
		toggleExpanded();
	};

	const onSignOutClicked = (): void => {
		navigate(AUTHORIZATION_ROUTES.SIGN_IN);
		onItemClicked();
	};

	const onNotificationsClicked = (): void => {
		setNotificationsVisibility(true);
		onItemClicked();
	};

	const onPageItemClicked = (route: string): void => {
		navigate(route);
		onItemClicked();
	};

	const onSupportRequestClicked = (): void => {
		setSupportRequestVisibility(true);
		onItemClicked();
	};

	return <div className="crm-user-dropdown__container">
		<button className="crm-user-dropdown__button" onClick={toggleExpanded}><BiUser /></button>
		<div className={`crm-user-dropdown__wrapper ${expanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpanded}>
		</div>
		<div className={`crm-user-dropdown ${expanded ? 'expanded' : 'collapsed'}`}>
			<ul className="crm-user-dropdown__list">
				<li className="crm-user-dropdown__list-item" onClick={onNotificationsClicked}>{translations['user.dropdown.option.notifications']}</li>
				<div className="crm-user-dropdown__list-item-divider"></div>
				<li className="crm-user-dropdown__list-item" onClick={() => onPageItemClicked(APP_ROUTES.ACCOUNT)}>{translations['user.dropdown.option.account']}</li>
				<li className="crm-user-dropdown__list-item" onClick={() => onPageItemClicked(APP_ROUTES.SETTINGS)}>{translations['user.dropdown.option.settings']}</li>
				<div className="crm-user-dropdown__list-item-divider"></div>
				<li className="crm-user-dropdown__list-item" onClick={onSupportRequestClicked}>{translations['user.dropdown.option.support']}</li>
				<div className="crm-user-dropdown__list-item-divider"></div>
				<li className="crm-user-dropdown__list-item sign-out" onClick={onSignOutClicked}>{translations['user.dropdown.option.sign.out']}</li>
			</ul>
		</div>
	</div>
}

export default UserDropdown;
