import {size} from 'lodash';

const MIN_NAME_LENGTH = 2;

export const isNameValid = (name: string): boolean => {
	return size(name) >= MIN_NAME_LENGTH;
};
