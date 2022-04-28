import {LangContext, LANGS} from 'contexts/langContext';
import {fromPairs, isEmpty, isEqual, negate, overEvery, partialRight, startsWith} from 'lodash';
import {useContext, useEffect, useState} from 'react';

const parseDataFromFile = (data: any) => {
	const isNotEmpty = negate(isEmpty);
	const isNotAComment = negate(partialRight(startsWith, '#'));
	const propertyRows = data
		.split('\n')
		.map((row: any) => row.trim())
		.filter((row: any) => overEvery(isNotAComment, isNotEmpty)(row as never))
		.map((line: any) => {
			const split = line.split('=');
			const name = split[0].trim();
			const value = split[1].trim();

			return [name, value];
		});

	return fromPairs(propertyRows);
}

const fetchData = async (setLoading: any, setTranslations: any, lang: any, options: any) => {
	setLoading(true);

	try {
		await new Promise((resolve) => setTimeout(() => resolve({}), 1000));
		const properties = await fetch(`${process.env.PUBLIC_URL}/translations/${options.path}/${options.filename}_${isEqual(lang, LANGS.RUS) ? 'ru' : 'en'}.properties`)
			.then(resp => resp.text())
			.then(data => parseDataFromFile(data));

		setTranslations(properties);
	} catch {

	} finally {
		console.log('loading');
		setLoading(false);
	};
}

export const useTranslation = (options: any) => {
	const [translations, setTranslations] = useState({} as any);
	const [loading, setLoading] = useState(false);
	const {lang} = useContext(LangContext) as any;

	useEffect(() => {fetchData(setLoading, setTranslations, lang, options);}, [lang])

	return [translations, loading];
}