export default class ServicesService {
	public static getServices() {
		return JSON.parse(localStorage.getItem('services') || '[]');
	}

	
}