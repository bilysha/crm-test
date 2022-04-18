import {BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './signIn.scss';
import {useTranslation} from 'hooks/useTranslation';

function SignIn() {
	const defaultFormValue = {
		username: '',
		password: ''
	};
	const [formValue, setFormValue] = useState(defaultFormValue);
	const navigate = useNavigate();

	const [translations, translationsLoading] = useTranslation({path: 'sign-in', filename: 'sign-in'});

	const onFormFieldUpdated = (value: string, key: string) => {
		setFormValue({...formValue, [key]: value});
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
					<Input label={translations['sign.in.form.username']} type="text" value={formValue.username} onChange={(e: any) => onFormFieldUpdated(e.target.value, 'username')} />
					<Input label={translations['sign.in.form.password']} type="password" value={formValue.password} onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')} />
				</div>
				<div className="crm-sign-in__form-actions">
					<Button>{translations['sign.in.form.action.submit']}</Button>
				</div>
			</form>
		</div>
	</div>
}

export default SignIn;