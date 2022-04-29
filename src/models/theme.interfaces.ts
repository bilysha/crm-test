import {Dispatch, SetStateAction} from 'react';

export interface IThemes {
	[key: string]: string;
}

export interface IThemeContext {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}
