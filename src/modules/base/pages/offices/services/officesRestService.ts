import {findIndex} from 'lodash';
import {IOffice} from '../models/offices.interfaces';

export default class OfficesRestService {
	private static DELETE_OFFICE_COUNT: number = 1;

	public static getAll(): Promise<IOffice[]> {
		return Promise.resolve(this.getFromStorage());
	}

	public static add(offices: IOffice[]): Promise<IOffice[]> {
		const newOffices = this.getFromStorage().concat(offices)

		this.setToStorage(newOffices);

		return Promise.resolve(newOffices);
	}

	public static delete(id: number): Promise<any> {
		const offices = this.getFromStorage();
		const officeIndex = findIndex(offices, {id});

		offices.splice(officeIndex, this.DELETE_OFFICE_COUNT);
		this.setToStorage(offices);

		return Promise.resolve({statusCode: 200});
	}

	public static edit(offices: IOffice[]): Promise<IOffice> {
		const existingOffices = this.getFromStorage();
		const officeIndex = findIndex(existingOffices, {id: offices[0].id});

		existingOffices.splice(officeIndex, this.DELETE_OFFICE_COUNT, offices[0]);
		this.setToStorage(existingOffices);

		return Promise.resolve(offices[0]);
	}

	private static getFromStorage(): IOffice[] {
		return JSON.parse(`${window?.localStorage?.getItem('offices')}`) || [];
	}

	private static setToStorage(offices: IOffice[]): void {
		window?.localStorage?.setItem('offices', JSON.stringify(offices));
	}
}