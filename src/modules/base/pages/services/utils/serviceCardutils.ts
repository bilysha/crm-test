const MAX_VISIBLE_DESCRIPTION_SYMBOLS = 84;

export const getVisibleDescription = (text: string): string => {
	return text.length > MAX_VISIBLE_DESCRIPTION_SYMBOLS ? text.slice(0, MAX_VISIBLE_DESCRIPTION_SYMBOLS) + ' ...' : text;
}