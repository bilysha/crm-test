import {useTranslation} from 'hooks/useTranslation';
import './settings.scss';

function Settings() {
	const [translations] = useTranslation({path: 'settings', filename: 'settings'});

	return <div className="crm-settings">
		<div className="crm-settings__row">
			<h2 className="crm-settings__row-heading">{translations['settings.section.preferences']}</h2>
			<div className="crm-settings__row-item">
				<h3 className="crm-settings__row-label">{translations['settings.section.preferences.theme']}</h3>
				<div className="crm-settings__row-value">control to select theme</div>
			</div>
			<div className="crm-settings__row-item">
				<h3 className="crm-settings__row-label">{translations['settings.section.preferences.lang']}</h3>
				<div className="crm-settings__row-value">control to select language</div>
			</div>
			<div className="crm-settings__row-item">
				<h3 className="crm-settings__row-label">{translations['settings.section.preferences.date']}</h3>
				<div className="crm-settings__row-value">control to select date format</div>
			</div>
		</div>
		<div className="crm-settings__row">
			<h2 className="crm-settings__row-heading">{translations['settings.section.notification']}</h2>
			<div className="crm-settings__row-item">
				<h3 className="crm-settings__row-label">{translations['settings.section.notification.system']}</h3>
				<div className="crm-settings__row-value">control to enable/disable system notifications</div>
			</div>
			<div className="crm-settings__row-item">
				<h3 className="crm-settings__row-label">{translations['settings.section.notification.app']}</h3>
				<div className="crm-settings__row-value">control to enable/disable in-app notisications</div>
			</div>
		</div>
	</div>
}

export default Settings;