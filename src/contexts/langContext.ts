import {createContext} from 'react';

import {ILangContext, ILangs} from 'models/lang.interfaces';

export const LANGS: ILangs = {
	ENG: {
		displayValue: 'Eng',
		code: 'en'
	},
	RUS: {
		displayValue: 'Рус',
		code: 'ru',
	}
};

export const LangContext = createContext({} as ILangContext);
