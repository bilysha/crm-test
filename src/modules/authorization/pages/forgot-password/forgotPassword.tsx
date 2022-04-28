import {useTranslation} from 'hooks/useTranslation';
import ButtonLink from 'ui/button-link/buttonLink';
import Loader from 'ui/loader/loader';
import {TiArrowLeft} from '@react-icons/all-files/ti/TiArrowLeft';
import './forgotPassword.scss';
import {useNavigate} from 'react-router-dom';
import {AUTHORIZATION_ROUTES} from 'components/router/routerConstants';
import {useState} from 'react';
import Input from 'ui/input/input';
import {isUsernameValid} from 'utils/usernameUtils';
import Button from 'ui/button/button';
import LangToggle from 'ui/lang-toggle/langToggle';
import ThemeToggle from 'ui/theme-toggle/themeToggle';

function ForgotPassword() {
	const [translations, translationsLoading] = useTranslation({path: 'forgot-password', filename: 'forgot-password'});
	const [username, setUsername] = useState('');
	const [usernameValid, setUsernameValid] = useState(null as any);
	const navigate = useNavigate();

	const onBackClicked = (): void => {
		navigate(AUTHORIZATION_ROUTES.SIGN_IN);
	};

	const onUsernameChanged = (value: string): void => {
		setUsername(value);
		setUsernameValid(true);
	};
	const onUsernameFieldBlured = (): void => {
		setUsernameValid(isUsernameValid(username));
	};

	return <div className="crm-forgot-password">
		{
			translationsLoading
				? <div className="crm-forgot-password__loader-container"><Loader /></div>
				: <>
					<div className="crm-forgot-password__top">
						<div className="crm-forgot-password__top-section">
							<div className="crm-forgot-password__top-section__action">
								<LangToggle />
							</div>
							<div className="crm-forgot-password__top-section__action">
								<ThemeToggle />
							</div>
						</div>
						<div className="crm-forgot-password__top-section">
							<div className="crm-forgot-password__top-section__action">
								<ButtonLink theme="accent" onClick={onBackClicked}><TiArrowLeft />{translations['forgot.password.back.button']}</ButtonLink>
							</div>
						</div>
					</div>
					<div className="crm-forgot-password__middle">
						<div className="crm-forgot-password__heading">
							<p>{translations['forgot.password.heading']}</p>
						</div>
						<form className="crm-forgot-password__form">
							<div className="crm-forgot-password__form-content">
								<p className="crm-forgot-password__tip">{translations['forgot.password.tip']}</p>
								<Input
									label={translations['forgot.password.form.username']}
									type="text"
									onChange={(e: any) => onUsernameChanged(e.target.value)}
									onBlur={onUsernameFieldBlured}
									invalid={usernameValid === false}
									placeholder={translations['forgot.password.form.username.placeholder']}
									invalidMessage={translations['forgot.password.form.validation.username.invalid.format']}
									value={username} />

							</div>
							<div className="crm-forgot-password__form-actions">
								<Button size="large" disabled={!usernameValid}>{translations['forgot.password.form.action.submit']}</Button>
							</div>
						</form>
					</div>
					<div className="crm-forgot-password__bottom"></div>
				</>
		}
	</div>
}

export default ForgotPassword;
