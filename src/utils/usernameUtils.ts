const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegExp = /^[0-9]{12}$/;

const isPhoneValid = (phone: string): boolean => phoneRegExp.test(phone);

const isEmailValid = (email: string): boolean => emailRegExp.test(email.toLocaleLowerCase());

export const isUsernameValid = (username: string): boolean => isEmailValid(username) || isPhoneValid(username);