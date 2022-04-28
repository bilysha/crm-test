import {AUTHORIZATION_ROUTES, BASE_ROUTE} from 'components/router/routerConstants';
import Button from 'ui/button/button';
import Input from 'ui/input/input';
import {useMemo, useState} from 'react';
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
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({} as any);
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

	const onCreateAccountClicked = () => {
		navigate(AUTHORIZATION_ROUTES.SIGN_UP);
	};

	const isSubmitDisabled = useMemo(() => some(values(formValidation), (value) => !value), [formValidation]);

	const onSubmit: any = async (e: Event) => {
		e.preventDefault();

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
					<div>
						<div className="crm-sign-in__heading">
							<h2>{translations['sign.in.heading']}</h2>
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
										invalidMessage={translations['sign.in.form.validation.username.invalid.format']}
										value={formValue.username} />
									<Input
										containerStyle={{marginBottom: '0'}}
										label={translations['sign.in.form.password']}
										type="password"
										onChange={(e: any) => onFormFieldUpdated(e.target.value, 'password')}
										onBlur={onPasswordFieldBlured}
										invalid={formValidation.password === false}
										invalidMessage={translations['sign.in.form.validation.password.invalid.length']}
										value={formValue.password} />
									<ButtonLink size="small">Forgot password?</ButtonLink>
								</div>
								<div className="crm-sign-in__form-actions">
									<Button disabled={isSubmitDisabled ? 'disabled' : undefined}>{translations['sign.in.form.action.submit']}</Button>
								</div>
							</form>
						</div>
					</div>
					<div className="crm-sign-in__create-acc">
						<ButtonLink theme="accent" onClick={onCreateAccountClicked}>Create an account</ButtonLink>
					</div>
				</>
		}
	</div>
}

export default SignIn;