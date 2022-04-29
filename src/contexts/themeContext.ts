import {createContext} from 'react';

import {IThemes, IThemeContext} from 'models/theme.interfaces';

export const THEMES: IThemes = {
	DARK: 'Dark',
	LIGHT: 'Light'
};

export const ThemeContext = createContext({} as IThemeContext);
