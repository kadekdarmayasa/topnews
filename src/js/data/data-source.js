class DataSource {
	static getNews(key, sortBy = 'publishedAt') {
		return new Promise((resolve, reject) => {
			const baseUrl = 'https://newsapi.org/v2/everything?';
			fetch(`${baseUrl}q=${key}&sortBy=${sortBy}&pageSize=100&language=en`, {
				headers: {
					'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
				},
			}).then((response) => {
				if (response.status == 200) {
					resolve(response.json());
				} else {
					reject(response);
				}
			});
		});
	}
}

export default DataSource;
