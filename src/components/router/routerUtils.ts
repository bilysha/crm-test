import {find, get} from 'lodash';

import {Location} from 'react-router-dom';

import {APP_PAGES} from './appPages';

export const getPageTitleKey = (location: Location): string => get(find(APP_PAGES, {path: location.pathname}), 'titleKey', '');