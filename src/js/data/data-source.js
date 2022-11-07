class DataSource {
	static getNews(key, sortBy = 'publishedAt', pageSize = 100) {
		return new Promise((resolve, reject) => {
			const baseUrl = 'https://newsapi.org/v2/everything?';
			fetch(`${baseUrl}q=${key}&sortBy=${sortBy}&pageSize=${pageSize}&language=en`, {
				headers: {
					'X-Api-Key': 'fbb232f6a29f48d8a4c6ad1eebc31eb7',
				},
			}).then((response) => {
				response.status == 200 ? resolve(response.json()) : reject(response);
			});
		});
	}
}

export default DataSource;
