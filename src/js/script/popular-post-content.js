import DataSource from '../data/data-source';
import formatDate from './dateformat';
import isNull from './null-checking';

const getPopularPost = async () => {
	try {
		const tradingNews = await DataSource.getNews('trading', 'popularity');
		const tradingNewsData = tradingNews['articles'].filter((data) => isNull(data));

		const popularPostContenContainer = document.getElementById('popular-post-container');
		let number = 1;
		for (let i = 0; i < 5; i++) {
			if (i > 0) {
				popularPostContenContainer.innerHTML += `
	    <article class="h-[100px] w-full flex items-center">
	          <h2 class="text-6xl text-[#989898] mr-8">0${number++}</h2>
	          <div class="flex flex-col overflow-hidden w-full">
	            <a href=""
	              class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">
	              ${tradingNewsData[i]['title']}
	            </a>
	            <div class="flex justify-between mt-4">
	              <div>
	                <h4 class="author font-semibold text-sm">${tradingNewsData[i]['author']}</h4>
	                <p class="date">${formatDate(tradingNewsData[i]['publishedAt'])}</p>
	              </div>
	            </div>
	          </div>
	        </article>
	  `;
			} else {
				popularPostContenContainer.innerHTML += `
	    <article class="h-[100px] w-full flex items-center">
	          <h2 class="text-6xl text-[#989898] mr-12">0${number++}</h2>
	          <div class="flex flex-col overflow-hidden w-full">
	            <a href=""
	              class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">
	              ${tradingNewsData[i]['title']}
	            </a>
	            <div class="flex justify-between mt-4">
	              <div>
	                <h4 class="author font-semibold text-sm">${tradingNewsData[i]['author']}</h4>
	                <p class="date">${formatDate(tradingNewsData[i]['publishedAt'])}</p>
	              </div>
	            </div>
	          </div>
	        </article>
	  `;
			}
		}
	} catch (err) {
		if (err.status == 429) {
			console.log('Too many request has made');
		}
	}
};
export default getPopularPost;
