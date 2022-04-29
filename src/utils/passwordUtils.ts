import {size} from 'lodash';

const MIN_PASSWORD_LENGTH = 8;

export const isPasswordValid = (password: string): boolean => size(password) >= MIN_PASSWORD_LENGTH;

export const isPasswordsMatchValid = (password1: string, password2: string): boolean | null => isPasswordValid(password1) && isPasswordValid(password2) ? password1 === password2 : null;
