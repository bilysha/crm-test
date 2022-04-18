import {LangContext, LANGS} from 'contexts/langContext';
import ButtonIcon from 'ui/button-icon/buttonIcon';

function LangToggle() {
	const toggleLang = (lang: any, setLang: any) => {
		setLang(lang.displayValue === LANGS.ENG.displayValue ? LANGS.RUS : LANGS.ENG)
	};

	return <LangContext.Consumer>
		{({lang, setLang}: any) =>
			<ButtonIcon style={{fontSize: '1.25rem'}} onClick={() => toggleLang(lang, setLang)}>
				{lang.displayValue}
			</ButtonIcon>}
	</LangContext.Consumer>
}

export default LangToggle;