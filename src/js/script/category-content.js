import formatDate from './dateformat';
import isNull from './null-checking';

const getPostBasedCategory = async (baseUrl, key) => {
	const response = await fetch(`${baseUrl}q=${key}&sortBy=publishedAt&pageSize=40&language=en`, {
		headers: {
			'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
		},
	});
	const responseJson = await response.json();
	const news = responseJson.articles;

	const categoryContentContainer = document.querySelector('.category-content');
	news.filter((data) => isNull(data)).forEach((data) => {
		categoryContentContainer.innerHTML += `
	     <div class="card w-96 bg-white shadow-xl">
	      <figure>
	        <img src="${data.urlToImage}" alt="${key}" class="w-full h-48 object-cover"/>
	      </figure>
	      <div class="card-body flex flex-col justify-between">
	        <a href="${data.url}" class="card-title hover:underline">
	          ${data.title}
	        </a>
	        <div class="card-actions justify-end mt-5">
	          <div class="badge badge-inline">${data.source.name}</div>
	          <div class="badge badge-outline">${formatDate(data.publishedAt)}</div>
	        </div>
	      </div>
	    </div>
	`;
	});
};

export default getPostBasedCategory;
