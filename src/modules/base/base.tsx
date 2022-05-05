import {useTranslation} from 'hooks/useTranslation';
import {useEffect, useMemo, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import './base.scss';
import MainMenu from './components/main-menu/mainMenu';
import {getPageTitleKey} from '../../components/router/routerUtils';
import UserDropdown from './components/user-dropdown/userDropdows';
import {BaseContext} from './contexts/baseContext';
import SupportRequestSlideout from './components/support-request-slideout/supportRequestSlideout';
import NotificationsSlideout from './components/notifications-slideout/notificationsSlideout';
import Loader from 'ui/loader/loader';
import {useFetching} from 'hooks/useFetching';
import {BaseRestService} from './services/baseService';

function Base() {
	const location = useLocation();
	const [translations, translationsLoading] = useTranslation({path: 'base', filename: 'base'});
	const [supportRequestVisibility, setSupportRequestVisibility] = useState(false);
	const [notificationsVisibility, setNotificationsVisibility] = useState(false);
	const [brands, setBrands] = useState([]);
	const [fetchBrands, brandsLoaing] = useFetching(async () => {
		const brands = await BaseRestService.getAllBrands();

		setBrands(brands);
	});
	const currentPageTitleKey = useMemo(() => getPageTitleKey(location), [location.pathname]);

	useEffect(() => {fetchBrands()}, []);

	return <div className="crm-base">
		<BaseContext.Provider value={{
			setSupportRequestVisibility,
			setNotificationsVisibility,
			brands
		}}>
			{supportRequestVisibility && <SupportRequestSlideout />}
			{notificationsVisibility && <NotificationsSlideout />}
			{
				translationsLoading || brandsLoaing
					? <Loader />
					: <>
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
										<UserDropdown />
									</div>
								</div>
							</div>
							<div className="crm-base__main-content">
								<Outlet />
							</div>
						</div>
					</>
			}
		</BaseContext.Provider>
	</div>
}

export default Base;