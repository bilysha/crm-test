import {AUTHORIZATION_ROUTES, BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signUp.scss';
import {useTranslation} from 'hooks/useTranslation';
import {isUsernameValid} from 'utils/usernameUtils';
import {isPasswordsMatchValid, isPasswordValid} from 'utils/passwordUtils';
import {flatten, isEmpty, some, values} from 'lodash';
import AuthorizationService from 'modules/authorization/services/authorizationService';
import Loader from 'ui/loader/loader';
import ButtonLink from 'ui/button-link/buttonLink';
import {isNameValid} from 'utils/namesUtils';
import MessageInpage from 'ui/message-inpage/messageInpage';
import LangToggle from 'ui/lang-toggle/langToggle';
import ThemeToggle from 'ui/theme-toggle/themeToggle';

function SignUp() {
	const defaultFormValue: {[key: string]: string} = {
		firstName: '',
		lastName: '',
		username: '',
		password: '',
		confirmPassword: ''
	};
	const defaultFormValidation: {[key: string]: boolean | null} = {
		firstName: null,
		lastName: null,
		username: null,
		password: null,
		confirmPassword: null,
		passwordsMatch: null
	};
	const [translations, translationsLoading] = useTranslation({path: 'sign-up', filename: 'sign-up'});
	const [formValidation, setFormValidation] = useState(defaultFormValidation);
	const [formValue, setFormValue] = useState(defaultFormValue);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as any);
	const navigate = useNavigate();

	const onFormFieldUpdated = (value: string, key: string): void => {
		setFormValue({...formValue, [key]: value});
		setFormValidation({...formValidation, [key]: true, passwordsMatch: true});
	};
	const onUsernameFieldBlured = (): void => {
		setFormValidation({...formValidation, username: isUsernameValid(formValue.username)});
	};
	const onNameFieldBlured = (key: string): void => {
		setFormValidation({...formValidation, [key]: isNameValid(formValue[key])});
	};
	const onPasswordFieldBlured = (key: string): void => {
		setFormValidation({
			...formValidation,
			[key]: isPasswordValid(formValue[key]),
			passwordsMatch: isPasswordsMatchValid(formValue.password, formValue.confirmPassword)
		});
	};
	const isSubmitDisabled: boolean = useMemo(() => some(values(formValidation), (value) => !value), [formValidation]);

	const onNavigateToSignInClicked = (): void => {
		navigate(AUTHORIZATION_ROUTES.SIGN_IN);
	};

	const onSubmit = async (e: any): Promise<void> => {
		e.preventDefault();
		setError({});

		try {
			setLoading(true);
			await AuthorizationService.signUp(formValue);
			navigate(BASE_ROUTE);
		} catch (resp: any) {
			setError({messages: flatten(values(resp.response.data))});
		} finally {
			setLoading(false);
		}
	};

	return <div className="crm-sign-up">
		{
			loading || translationsLoading
				? <div className="crm-sign-up__loader-container"><Loader /></div>
				: <>
					<div className="crm-sign-up__top">
					<div className="crm-sign-up__top-section">
							<div className="crm-sign-up__top-section__action">
								<LangToggle />
							</div>
							<div className="crm-sign-up__top-section__action">
								<ThemeToggle />
							</div>
						</div>
						<div className="crm-sign-up__top-section">
							<div className="crm-sign-up__top-section__action">
								<ButtonLink theme="accent">{translations['sign.up.need.help.button']}</ButtonLink>
							</div>
						</div>
					</div>
					<div className="crm-sign-up__middle">
						<div className="crm-sign-up__heading">
							<p>{translations['sign.up.heading']}</p>
						</div>
						<MessageInpage messages={error.messages} condition={!isEmpty(error)} setCondition={setError} />
						<div className="crm-sign-up__form">
							<form onSubmit={onSubmit}>
								<div className="crm-sign-up__form-content">
									<div className="crm-sign-up__form-content__row">
										<div className="crm-sign-up__form-content__row-item">
											<Input
												label={translations['sign.up.form.firstName']}
												placeholder={translations['sign.up.form.firstName.placeholder']}
												type="text"
												onChange={(e: any) => onFormFieldUpdated(e.target.value, 'firstName')}
												onBlur={() => onNameFieldBlured('firstName')}
												invalid={formValidation.firstName === false}
												invalidMessage={translations['sign.up.form.validation.firstName.invalid.length']}
												value={formValue.firstName} />
										</div>
										<div className="crm-sign-up__form-content__row-item">
											<Input
												label={translations['sign.up.form.lastName']}
												placeholder={translations['sign.up.form.lastName.placeholder']}
												type="text"
												onChange={(e: any) => onFormFieldUpdated(e.target.value, 'lastName')}
												onBlur={() => onNameFieldBlured('lastName')}
												invalid={formValidation.lastName === false}
												invalidMessage={translations['sign.up.form.validation.lastName.invalid.length']}
												value={formValue.lastName} />
										</div>
									</div>
									<Input
										label={translations['sign.up.form.username']}
										placeholder={translations['sign.up.form.username.placeholder']}
										type="text"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'username')}
										onBlur={onUsernameFieldBlured}
										invalid={formValidation.username === false}
										invalidMessage={translations['sign.up.form.validation.username.invalid.format']}
										value={formValue.username} />
									<Input
										label={translations['sign.up.form.password']}
										placeholder={translations['sign.up.form.password.placeholder']}
										type="password"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')}
										onBlur={() => onPasswordFieldBlured('password')}
										invalid={[formValidation.password, formValidation.passwordsMatch].includes(false)}
										invalidMessage={translations[`sign.up.form.validation.password.invalid.${formValidation.password === false ? 'length' : 'match'}`]}
										value={formValue.password} />
									<Input
										label={translations['sign.up.form.password.confirm']}
										placeholder={translations['sign.up.form.password.confirm.placeholder']}
										type="password"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'confirmPassword')}
										onBlur={() => onPasswordFieldBlured('confirmPassword')}
										invalid={[formValidation.confirmPassword, formValidation.passwordsMatch].includes(false)}
										invalidMessage={translations[`sign.up.form.validation.password.invalid.${formValidation.confirmPassword === false ? 'length' : 'match'}`]}
										value={formValue.confirmPassword} />
								</div>
								<div className="crm-sign-up__form-actions">
									<Button size="large" disabled={isSubmitDisabled ? 'disabled' : undefined}>{translations['sign.up.form.action.submit']}</Button>
								</div>
							</form>
						</div>
					</div>
					<div className="crm-sign-in__bottom">
						<p>{translations['sign.up.have.account.tip']}</p>
						<ButtonLink theme="accent" onClick={onNavigateToSignInClicked}>{translations['sign.up.have.account.button']}</ButtonLink>
					</div>
				</>
		}
	</div>
}

export default SignUp;
