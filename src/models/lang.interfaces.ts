export interface ILangs {
	[key: string]: ILang
};

export interface ILangContext {
	lang: ILang;
	setLang: ((lang: ILang) => any);
};

export interface ILang {
	displayValue: string;
	code: string;
};
