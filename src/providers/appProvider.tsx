import {LangContext, LANGS} from 'contexts/langContext';
import {get} from 'lodash';
import {useEffect, useState} from 'react';
import {ThemeContext, THEMES} from '../contexts/themeContext';

const getThemeFromLocalStorage = () => JSON.parse(`${window?.localStorage?.getItem('theme')}`);
const isLightThemeOnDevice = () => get(window.matchMedia('(prefers-color-scheme: light)'), 'matches');

const getLangFromLocalStorage = () => JSON.parse(`${window?.localStorage?.getItem('lang')}`);
const getBrowserLang = () => navigator?.language;

const getTheme = () => {
	const theme = getThemeFromLocalStorage();

	if (Object.values(THEMES).includes(theme)) {
		return theme;
	}

	if (isLightThemeOnDevice()) {
		return THEMES.LIGHT;
	}

	return THEMES.DARK;
};

const getLang = () => {
	const lang = getLangFromLocalStorage();

	if (lang) {
		return lang;
	}

	const browserLang = getBrowserLang();

	if (browserLang.startsWith(LANGS.RUS.code)) {
		return LANGS.RUS;
	}

	return LANGS.ENG;
}

const AppProvider = ({children}: any) => {
	const [theme, setTheme] = useState(getTheme);
	const [lang, setLang] = useState(getLang);
	const [themeLoaded, setThemeLoaded] = useState(false);
	const [langLoaded, setLangLoaded] = useState(false);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', JSON.stringify(theme));
		setThemeLoaded(true);
		console.log('theme changed', theme);
	}, [theme]);

	useEffect(() => {
		localStorage.setItem('lang', JSON.stringify(lang));
		setLangLoaded(true);
		console.log('lang changed', lang);
	}, [lang]);

	return <ThemeContext.Provider value={{theme, setTheme}}>
		<LangContext.Provider value={{lang, setLang}}>
			{themeLoaded && langLoaded ? children : ''}
		</LangContext.Provider>
	</ThemeContext.Provider>
};

export default AppProvider;