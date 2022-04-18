import {createContext} from 'react';

export const LANGS = {
	ENG: {
		displayValue: 'Eng',
		code: 'en'
	},
	RUS: {
		displayValue: 'Рус',
		code: 'ru',
	}
};

export const LangContext = createContext({} as any);
