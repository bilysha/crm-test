import {size} from 'lodash';

const MIN_PASSWORD_LENGTH = 8;

export const isPasswordValid = (password: string): boolean => {
	return size(password) >= MIN_PASSWORD_LENGTH;
};

export const isPasswordsMath = (password1: string, password2: string): boolean | null => {
	return size(password1) > 0 && size(password2) > 0 ? password1 === password2 : null;
}
