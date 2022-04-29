import {useTranslation} from 'hooks/useTranslation';
import {BaseContext} from 'modules/base/contexts/baseContext';
import {useContext, useEffect, useState} from 'react';
import ButtonLink from 'ui/button-link/buttonLink';
import Button from 'ui/button/button';
import Loader from 'ui/loader/loader';
import Slideout from 'ui/slideout/slideout';
import './notificationsSlideout.scss';

function NotificationsSlideout() {
	const [translations, translationsLoading] = useTranslation({path: 'base', filename: 'notifications-slideout'});
	const {setNotificationsVisibility} = useContext(BaseContext);
	const [notifications, setNotifications] = useState([]);

	useEffect(() => setNotifications([]), []);

	const onApply = (): void => {
		setNotificationsVisibility(false);
	};

	return <Slideout heading={translations['notifications.slideout.heading']} setVisibility={setNotificationsVisibility}>
		<div className="crm-slideout-content">
			{
				translationsLoading
					? <Loader />
					: <>
						<div className="crm-slideout-content__main">
							<div className="crm-notifications-slideout">
								<div className="crm-notifications-slideout__action">
									<ButtonLink theme="accent">{translations['notifications.slideout.action.read.all']}</ButtonLink>
								</div>
								<div className="crm-notifications-slideout__content">
									{
										notifications && notifications.length
											? <p>Here it is!</p>
											: <p className="crm-notifications-slideout__content-empty">You do not have notification for now!</p>
									}
								</div>
							</div>
						</div>
						<div className="crm-slideout-content__footer">
							<Button onClick={onApply}>{translations['notifications.slideout.action.done']}</Button>
						</div>
					</>
			}
		</div>
	</Slideout>
}

export default NotificationsSlideout;
