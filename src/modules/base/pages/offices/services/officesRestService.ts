import {findIndex} from 'lodash';
import {IOffice} from '../models/offices.interfaces';

export default class OfficesRestService {
	private static DELETE_OFFICE_COUNT: number = 1;

	public static getAll(): Promise<IOffice[]> {
		return Promise.resolve(this.getFromStorage());
	}

	public static add(office: IOffice): Promise<IOffice> {
		const offices = this.getFromStorage();
		const newOfficeObj: IOffice = {...office, id: Date.now()};

		offices.push(newOfficeObj);
		this.setToStorage(offices);

		return Promise.resolve(newOfficeObj);
	}

	public static delete(id: number): Promise<any> {
		const offices = this.getFromStorage();
		const officeIndex = findIndex(offices, {id});

		offices.splice(officeIndex, this.DELETE_OFFICE_COUNT);
		this.setToStorage(offices);

		return Promise.resolve({statusCode: 200});
	}

	public static edit(office: IOffice): Promise<IOffice> {
		const offices = this.getFromStorage();
		const officeIndex = findIndex(offices, {id: office.id});

		offices.splice(officeIndex, this.DELETE_OFFICE_COUNT, office);
		this.setToStorage(offices);

		return Promise.resolve(office);
	}

	private static getFromStorage(): IOffice[] {
		return JSON.parse(`${window?.localStorage?.getItem('offices')}`) || [];
	}

	private static setToStorage(offices: IOffice[]): void {
		window?.localStorage?.setItem('offices', JSON.stringify(offices));
	}
}