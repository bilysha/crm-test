const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^[0-9]{12}$/;

const isPhoneValid = (phone: string): boolean => {
	const result = phoneRegExp.test(phone);

	console.log('validating email: ', phone);
	console.log('validating email: ', result);

	return result;
}

const isEmailValid = (email: string): boolean => {
	const result = emailRegExp.test(email.toLocaleLowerCase());

	console.log('validating email: ', email);
	console.log('validating email: ', result);

	return result;
}

export const isUsernameValid = (username: string): boolean => {
	return isEmailValid(username) || isPhoneValid(username);
}