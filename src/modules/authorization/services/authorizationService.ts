import axios from 'axios';

export default class AuthorizationService {
	protected static DOMAIN: string = 'https://api-crm-beauty.herokuapp.com';
	protected static SIGN_UP_REST: string = 'api/crm/registration/';
	protected static SIGN_IN_REST: string = 'api/custom_auth/auth/basic/';

	public static signUp(username: string, password: string): Promise<any> {
		return axios.post(
			`${this.DOMAIN}/${this.SIGN_UP_REST}`,
			{
				email: username,
				password
			}
		)
			.catch((e) => {throw Error(e);});
	}

	public static signIn(username: string, password: string): Promise<any> {
		return axios.post(
			`${this.DOMAIN}/${this.SIGN_IN_REST}`,
			{
				email: username,
				password
			}
		)
			.catch((e) => {throw Error(e);});
	}
}