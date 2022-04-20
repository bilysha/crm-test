export interface IOffice {
	readonly id: number;
	name?: string;
	address: IOfficeAddress;
	comment?: string;
	assignedEmployees?: number;
	servicesCount?: number;
}

export interface IOfficeAddress {
	street: string;
	house: string;
	building?: string;
	room: string;
}