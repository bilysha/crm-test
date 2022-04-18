import {find, get} from 'lodash';
import {APP_PAGES} from './appPages';

export const getPageTitleKey = (location: any): string => {
	return get(find(APP_PAGES, {path: location.pathname}), 'titleKey', '');
}