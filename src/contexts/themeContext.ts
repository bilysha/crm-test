import {createContext} from 'react';

export const THEMES = {
	DARK: 'Dark',
	LIGHT: 'Light'
};

export const ThemeContext = createContext({} as any);
