import formatDate from './dateformat';

const categoryContent = async (baseUrl, key) => {
	const getNewsBasedOnCategory = async (pageSize) => {
		const response = await fetch(`${baseUrl}q=${key}&sortBy=publishedAt&pageSize=${pageSize}&language=en`, {
			headers: {
				'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
			},
		});
		const responseJson = await response.json();
		return responseJson.articles;
	};

	const categoryContentContainer = document.querySelector('.category-content');
	const news = await getNewsBasedOnCategory(10);

	news.forEach((data) => {
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

export default categoryContent;
