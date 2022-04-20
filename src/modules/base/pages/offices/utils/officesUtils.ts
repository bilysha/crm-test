import {IOfficeAddress} from '../models/offices.interfaces';

export const getOfficeAddressString = (address: IOfficeAddress): string => {
	return `${address.street} ${address.house}${address.building ? ' / ' + address.building : ''} - ${address.room}`;
};
