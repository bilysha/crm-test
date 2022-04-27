import {size} from 'lodash';

const MIN_PASSWORD_LENGTH = 8;

export const isPasswordValid = (password: string): boolean => {
	return size(password) >= MIN_PASSWORD_LENGTH;
};

export const isPasswordsMatchValid = (password1: string, password2: string): boolean | null => {
	console.log('result: ', isPasswordValid(password1) && isPasswordValid(password2) ? password1 === password2 : null);
	
	return isPasswordValid(password1) && isPasswordValid(password2) ? password1 === password2 : null;
}
