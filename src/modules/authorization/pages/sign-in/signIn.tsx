import {BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signIn.scss';
import {useTranslation} from 'hooks/useTranslation';
import {isUsernameValid} from 'utils/usernameUtils';
import {isPasswordValid} from 'utils/passwordUtils';

function SignIn() {
	const defaultFormValue: {[key: string]: string} = {
		username: '',
		password: ''
	};
	const defaultFormValidation: {[key: string]: boolean | null} = {
		username: null,
		password: null
	};
	const [formValue, setFormValue] = useState(defaultFormValue);
	const [formValidation, setFormValidation] = useState(defaultFormValidation);
	const navigate = useNavigate();

	const [translations, translationsLoading] = useTranslation({path: 'sign-in', filename: 'sign-in'});

	const onFormFieldUpdated = (value: string, key: string) => {
		setFormValue({...formValue, [key]: value});
	};
	const onUsernameFieldBlured = () => {
		setFormValidation({...formValidation, username: isUsernameValid(formValue.username)});
	};
	const onPasswordFieldBlured = () => {
		setFormValidation({...formValidation, password: isPasswordValid(formValue.password)});
	};

	const onSubmit: any = (e: Event) => {
		e.preventDefault();
		navigate(BASE_ROUTE);
	};

	return <div className="crm-sign-in">
		<div className="crm-sign-in__heading">
			<h2>{translations['sign.in.heading']}</h2>
		</div>
		<div className="crm-sign-in__form">
			<form onSubmit={onSubmit}>
				<div className="crm-sign-in__form-content">
					<Input
						label={translations['sign.in.form.username']}
						type="text"
						onChange={(e: any) => onFormFieldUpdated(e.target.value, 'username')}
						onBlur={onUsernameFieldBlured}
						invalid={formValidation.username === false}
						invalidMessage={translations['sign.in.form.validation.username.invalid.format']}
						value={formValue.username} />
					<Input
						label={translations['sign.in.form.password']}
						type="password"
						onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')}
						onBlur={onPasswordFieldBlured}
						invalid={formValidation.password === false}
						invalidMessage={translations['sign.in.form.validation.password.invalid.length']}
						value={formValue.password} />
				</div>
				<div className="crm-sign-in__form-actions">
					<Button>{translations['sign.in.form.action.submit']}</Button>
				</div>
			</form>
		</div>
	</div>
}

export default SignIn;