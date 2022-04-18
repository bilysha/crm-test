import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/en-in';

export const formatPhomeNumber = (phone: string): string => {
	return `+${phone.slice(0, 3)} (${phone.slice(3, 5)}) ${phone.slice(5, 8)}-${phone.slice(8, 10)}-${phone.slice(10, 12)}`;
};

export const formatDate = (date: string): string => {
	return moment(date).locale('ru').format('L');
};
