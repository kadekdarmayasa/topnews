import DataSource from '../data/data-source';
import formatDate from './dateformat';
import { isNull } from './null-checking';

const getLatestPost = async () => {
	try {
		const investingNews = await DataSource.getNews('investing');
		const investingNewsData = investingNews['articles'].filter((data) => isNull(data));

		const latestPostContentContainer = document.getElementById('latest-post-container');
		for (let i = 0; i < 4; i++) {
			latestPostContentContainer.innerHTML += `
	        <article class="feature-1 w-full mb-16 md:mb-0 max-h-[300px]">
	          <img src="${investingNewsData[i]['urlToImage']}" alt="education" class="w-full h-40 object-none image-source">
	          <div class="px-1">
	            <a href="${investingNewsData[i]['url']}" target="_blank"
	              class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">
	              ${investingNewsData[i]['title']}
	            </a>
	            <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">
	              ${investingNewsData[i]['description']}
	            </p>
	            <div class="flex justify-between items-center mt-5 text-sm">
	              <div class="overflow-hidden">
	                <h4 class="author font-semibold w-[80%] text-ellipsis">${investingNewsData[i]['author']}</h4>
	                <div class="flex items-center mt-1">
	                  <p class="date">${formatDate(investingNewsData[i]['publishedAt'])}</p>
	                  <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>
	                  <p class="source">${investingNewsData[i]['source']['name']}</p>
	                </div>
	              </div>
	              <button class="w-7 h-7">
	                <img src="./img/save.svg" alt="save" class="w-full h-full">
	              </button>
	            </div>
	          </div>
	        </article>
	  `;
		}
	} catch (err) {
		if (err.status) {
			console.log('Too many request has made');
		}
	}
};

export default getLatestPost;
