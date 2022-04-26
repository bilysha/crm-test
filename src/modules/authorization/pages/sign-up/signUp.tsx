import {BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signUp.scss';
import {useTranslation} from 'hooks/useTranslation';
import {isUsernameValid} from 'utils/usernameUtils';
import {isPasswordsMath, isPasswordValid} from 'utils/passwordUtils';

function SignUp() {
	const defaultFormValue: {[key: string]: string} = {
		username: '',
		password: '',
		confirmPassword: ''
	};
	const defaultFormValidation: {[key: string]: boolean | null} = {
		username: null,
		password: null,
		confirmPassword: null,
		passwordsMatch: null
	};
	const [formValue, setFormValue] = useState(defaultFormValue);
	const [formValidation, setFormValidation] = useState(defaultFormValidation);
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
			passwordsMath: isPasswordsMath(formValue.password, formValue.confirmPassword)
		});
	};

	const onSubmit: any = (e: Event) => {
		e.preventDefault();
		navigate(BASE_ROUTE);
	};

	return <div className="crm-sign-up">
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
						invalid={formValidation.password === false || formValidation.passwordsMatch === false}
						invalidMessage={translations['sign.up.form.validation.password.invalid.length']}
						value={formValue.password} />
					<Input
						label={translations['sign.up.form.password.confirm']}
						type="password"
						onChange={(e: any) => onFormFieldUpdated(e.target.value, 'confirmPassword')}
						onBlur={() => onPasswordFieldBlured('confirmPassword')}
						invalid={formValidation.confirmPassword === false || formValidation.passwordsMatch === false}
						invalidMessage={translations['sign.up.form.validation.password.invalid.length']}
						value={formValue.confirmPassword} />
				</div>
				<div className="crm-sign-up__form-actions">
					<Button>{translations['sign.up.form.action.submit']}</Button>
				</div>
			</form>
		</div>
	</div>
}

export default SignUp;
