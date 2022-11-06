import DataSource from '../data/data-source';
import formatDate from './dateformat';
import isNull from './null-checking';

const getPostBasedCategory = async (key) => {
	try {
		const news = await DataSource.getNews(key);
		const newsData = news['articles'].filter((data) => isNull(data));
		const categoryContentContainer = document.querySelector('.category-content');

		if (newsData.length > 10) {
			for (let i = 0; i < 10; i++) {
				categoryContentContainer.innerHTML += `
					<div class="card w-96 bg-white shadow-xl">
						<figure>
							<img src="${newsData[i].urlToImage}" alt="${key}" class="w-full h-48 object-cover"/>
						</figure>
						<div class="card-body flex flex-col justify-between">
							<a href="${newsData[i].url}" class="card-title hover:underline">
								${newsData[i].title}
							</a>
							<p class="font-medium text-slate-600 mt-4">${newsData[i].description}</p>
							<div class="card-actions justify-end mt-5">
								<div class="badge badge-inline p-3">${newsData[i].source.name}</div>
								<div class="badge badge-outline p-3">${formatDate(newsData[i].publishedAt)}</div>
							</div>
						</div>
					</div>
				`;
			}
		} else {
			for (const data of newsData) {
				categoryContentContainer.innerHTML += `
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
		}
	} catch (err) {
		if (err.status) {
			console.log('Too many request has made');
		}
	}
};

export default getPostBasedCategory;
