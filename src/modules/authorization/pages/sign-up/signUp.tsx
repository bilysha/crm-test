import {BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useMemo, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signUp.scss';
import {useTranslation} from 'hooks/useTranslation';
import {isUsernameValid} from 'utils/usernameUtils';
import {isPasswordsMatchValid, isPasswordValid} from 'utils/passwordUtils';
import {some, values} from 'lodash';
import AuthorizationService from 'modules/authorization/services/authorizationService';
import Loader from 'ui/loader/loader';

function SignUp() {
	const defaultFormValue: {[key: string]: string} = {
		username: 'ilya@gmail.com',
		password: '123123123',
		confirmPassword: '123123123'
	};
	const defaultFormValidation: {[key: string]: boolean | null} = {
		username: null,
		password: null,
		confirmPassword: null,
		passwordsMatch: null
	};
	const [formValue, setFormValue] = useState(defaultFormValue);
	const [formValidation, setFormValidation] = useState(defaultFormValidation);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const [translations, translationsLoading] = useTranslation({path: 'sign-up', filename: 'sign-up'});

	const onFormFieldUpdated = (value: string, key: string): void => {
		setFormValue({...formValue, [key]: value});
	};
	const onUsernameFieldBlured = (): void => {
		setFormValidation({...formValidation, username: isUsernameValid(formValue.username)});
	};
	const onPasswordFieldBlured = (key: string): void => {
		setFormValidation({
			...formValidation,
			[key]: isPasswordValid(formValue[key]),
			passwordsMatch: isPasswordsMatchValid(formValue.password, formValue.confirmPassword)
		});
	};
	const isSubmitDisabled = useMemo(() => some(values(formValidation), (value) => !value), [formValidation]);

	const onSubmit: any = async (e: Event) => {
		e.preventDefault();

		try {
			setLoading(true);
			await AuthorizationService.signUp(formValue.username, formValue.password);
			// navigate(BASE_ROUTE);
		} catch (e: any) {
			console.log('error while sign up: ', e.message);
		} finally {
			setLoading(false);
		}
	};

	return <div className="crm-sign-up">
		{
			loading
				? <div className="crm-sign-up__loader-container"><Loader /></div>
				: <>
					<div className="crm-sign-up__heading">
						<h2>{translations['sign.up.heading']}</h2>
					</div>
					<div className="crm-sign-up__form">
						<form onSubmit={onSubmit}>
							<div className="crm-sign-up__form-content">
								<Input
									label={translations['sign.up.form.username']}
									type="text"
									onChange={(e: any) => onFormFieldUpdated(e.target.value, 'username')}
									onBlur={onUsernameFieldBlured}
									invalid={formValidation.username === false}
									invalidMessage={translations['sign.up.form.validation.username.invalid.format']}
									value={formValue.username} />
								<Input
									label={translations['sign.up.form.password']}
									type="password"
									onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')}
									onBlur={() => onPasswordFieldBlured('password')}
									invalid={[formValidation.password, formValidation.passwordsMatch].includes(false)}
									invalidMessage={translations[`sign.up.form.validation.password.invalid.${formValidation.password === false ? 'length' : 'match'}`]}
									value={formValue.password} />
								<Input
									label={translations['sign.up.form.password.confirm']}
									type="password"
									onChange={(e: any) => onFormFieldUpdated(e.target.value, 'confirmPassword')}
									onBlur={() => onPasswordFieldBlured('confirmPassword')}
									invalid={[formValidation.confirmPassword, formValidation.passwordsMatch].includes(false)}
									invalidMessage={translations[`sign.up.form.validation.password.invalid.${formValidation.confirmPassword === false ? 'length' : 'match'}`]}
									value={formValue.confirmPassword} />
							</div>
							<div className="crm-sign-up__form-actions">
								<Button disabled={isSubmitDisabled ? 'disabled' : undefined}>{translations['sign.up.form.action.submit']}</Button>
							</div>
						</form>
					</div>
				</>
		}
	</div>
}

export default SignUp;
