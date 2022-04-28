import {AUTHORIZATION_ROUTES, BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useMemo, useReducer, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signIn.scss';
import {useTranslation} from 'hooks/useTranslation';
import {isUsernameValid} from 'utils/usernameUtils';
import {isPasswordValid} from 'utils/passwordUtils';
import {flatten, isEmpty, some, values} from 'lodash';
import AuthorizationService from 'modules/authorization/services/authorizationService';
import Loader from 'ui/loader/loader';
import ButtonLink from 'ui/button-link/buttonLink';
import MessageInpage from 'ui/message-inpage/messageInpage';
import InputCheckbox from 'ui/input-checkbox/inputCheckbox';
import LangToggle from 'ui/lang-toggle/langToggle';
import ThemeToggle from 'ui/theme-toggle/themeToggle';

function SignIn() {
	const defaultFormValue: {[key: string]: string} = {
		username: '',
		password: ''
	};
	const defaultFormValidation: {[key: string]: boolean | null} = {
		username: null,
		password: null
	};
	const [rememberMe, toggleRememberMe] = useReducer((remember: boolean) => !remember, false);
	const [translations, translationsLoading] = useTranslation({path: 'sign-in', filename: 'sign-in'});
	const [formValue, setFormValue] = useState(defaultFormValue);
	const [formValidation, setFormValidation] = useState(defaultFormValidation);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as any);
	const navigate = useNavigate();

	const isSubmitDisabled = useMemo(() => some(values(formValidation), (value) => !value), [formValidation]);

	const onFormFieldUpdated = (value: string, key: string) => {
		setFormValue({...formValue, [key]: value});
		setFormValidation({...formValidation, [key]: true});
	};
	const onUsernameFieldBlured = () => {
		setFormValidation({...formValidation, username: isUsernameValid(formValue.username)});
	};
	const onPasswordFieldBlured = () => {
		setFormValidation({...formValidation, password: isPasswordValid(formValue.password)});
	};
	const onCreateAccountClicked = () => {
		navigate(AUTHORIZATION_ROUTES.SIGN_UP);
	};
	const onForgotPasswordClicked = () => {
		navigate(AUTHORIZATION_ROUTES.FORGOT_PASSWORD);
	};
	const onSubmit = async (e: any) => {
		e.preventDefault();
		setError({});

		try {
			setLoading(true);
			await AuthorizationService.signIn(formValue.username, formValue.password);
			navigate(BASE_ROUTE);
		} catch (resp: any) {
			setError({messages: flatten(values(resp.response.data))});
		} finally {
			setLoading(false);
		}
	};

	return <div className="crm-sign-in">
		{
			loading || translationsLoading
				? <div className="crm-sign-in__laoder-container"><Loader /></div>
				: <>
					<div className="crm-sign-in__top">
						<div className="crm-sign-in__top-section">
							<div className="crm-sign-in__top-section__action">
								<LangToggle />
							</div>
							<div className="crm-sign-in__top-section__action">
								<ThemeToggle />
							</div>
						</div>
						<div className="crm-sign-in__top-section">
							<div className="crm-sign-in__top-section__action">
								<ButtonLink theme="accent">{translations['sign.in.need.help.button']}</ButtonLink>
							</div>
						</div>
					</div>
					<div className="crm-sign-in__middle">
						<div className="crm-sign-in__heading">
							<p>{translations['sign.in.heading']}</p>
						</div>
						<MessageInpage messages={error.messages} condition={!isEmpty(error)} setCondition={setError} />
						<div className="crm-sign-in__form">
							<form onSubmit={onSubmit}>
								<div className="crm-sign-in__form-content">
									<Input
										label={translations['sign.in.form.username']}
										type="text"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'username')}
										onBlur={onUsernameFieldBlured}
										invalid={formValidation.username === false}
										placeholder={translations['sign.in.form.username.placeholder']}
										invalidMessage={translations['sign.in.form.validation.username.invalid.format']}
										value={formValue.username} />
									<Input
										label={translations['sign.in.form.password']}
										type="password"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')}
										onBlur={onPasswordFieldBlured}
										invalid={formValidation.password === false}
										placeholder={translations['sign.in.form.password.placeholder']}
										invalidMessage={translations['sign.in.form.validation.password.invalid.length']}
										value={formValue.password} />
									<div className="crm-sign-in__form-content__row">
										<InputCheckbox label={translations['sign.in.form.remember.me']} id="rememberMeCheckbox" value={rememberMe} onChange={toggleRememberMe} />
										<ButtonLink theme="accent" onClick={onForgotPasswordClicked}>{translations['sign.in.forgot.password.button']}</ButtonLink>
									</div>
								</div>
								<div className="crm-sign-in__form-actions">
									<Button size="large" disabled={isSubmitDisabled ? 'disabled' : undefined}>{translations['sign.in.form.action.submit']}</Button>
								</div>
							</form>
						</div>
					</div>
					<div className="crm-sign-in__bottom">
						<p>{translations['sign.in.create.account.tip']}</p>
						<ButtonLink theme="accent" onClick={onCreateAccountClicked}>{translations['sign.in.create.account.button']}</ButtonLink>
					</div>
				</>
		}
	</div>
}

export default SignIn;