import {ThemeContext, THEMES} from 'contexts/themeContext';
import {FaMoon} from '@react-icons/all-files/fa/FaMoon';
import {FaSun} from '@react-icons/all-files/fa/FaSun';
import ButtonIcon from 'ui/button-icon/buttonIcon';

function ThemeToggle() {
	return <ThemeContext.Consumer>
		{({theme, setTheme}: any) => (
			<ButtonIcon
				title={theme === THEMES.DARK ? 'Switch to light' : 'Switch to dark'}
				onClick={() => setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)}>
				{theme === THEMES.DARK ? <FaMoon /> : <FaSun />}
			</ButtonIcon>
		)}
	</ThemeContext.Consumer>
}

export default ThemeToggle;
