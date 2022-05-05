import {ThemeContext, THEMES} from 'contexts/themeContext';
import {FiMoon} from '@react-icons/all-files/fi/FiMoon';
import {FiSun} from '@react-icons/all-files/fi/FiSun';
import ButtonIcon from 'ui/button-icon/buttonIcon';

function ThemeToggle() {
	return <ThemeContext.Consumer>
		{({theme, setTheme}: any) => (
			<ButtonIcon
				title={theme === THEMES.DARK ? 'Switch to light' : 'Switch to dark'}
				onClick={() => setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK)}>
				{theme === THEMES.DARK ? <FiMoon /> : <FiSun />}
			</ButtonIcon>
		)}
	</ThemeContext.Consumer>
}

export default ThemeToggle;
