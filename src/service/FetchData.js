export default class FetchData {

	startUrl = 'https://api.spacexdata.com/v4/';

	getResource = async url => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Произошла ошибка ${res.status}`)
		}

		return await res.json();
	};

	getRocket = async () =>
		await this.getResource(this.startUrl + 'rockets');

	getLaunches = async () => {
		const launches = await this.getResource(this.startUrl + 'launches/past');
		return launches.sort((a, b) => b.date_unix - a.date_unix);
	};

	getCompany = async () =>
		await this.getResource(this.startUrl + 'company');
}