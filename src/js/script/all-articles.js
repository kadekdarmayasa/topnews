import DataSource from '../data/data-source';
import formatDate from './dateformat';
import isNull from './null-checking';

const getAllArticles = async (key) => {
	try {
		const news = await DataSource.getNews(key, 'publishedAt', 100);
		const newsData = news['articles'].filter((data) => isNull(data));
		const articlesBody = document.querySelector('.all-articles .body');

		for (const data of newsData) {
			articlesBody.innerHTML += `
				<div class="card w-96 bg-white shadow-xl">
					<figure>
						<img src="${data.urlToImage}" alt="${key}" class="w-full h-48 object-cover"/>
					</figure>
					<div class="card-body flex flex-col justify-between">
						<a href="${data.url}" class="card-title hover:underline">
							${data.title}
						</a>
						<p class="font-medium text-slate-600 mt-4">${data.description}</p>
						<div class="card-actions justify-end mt-5">
							<div class="badge badge-inline p-3">${data.source.name}</div>
							<div class="badge badge-outline p-3">${formatDate(data.publishedAt)}</div>
						</div>
					</div>
				</div>
					`;
		}
	} catch (err) {
		if (err.status) {
			console.log('Too many request has made');
		}
	}
};

export default getAllArticles;
