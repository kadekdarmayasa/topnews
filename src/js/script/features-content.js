import DataSource from '../data/data-source';
import formatDate from './dateformat';
import isNull from './null-checking';

const getFeaturedPost = () => {
	window.onload = async () => {
		try {
			const feature1Container = document.querySelector('.feature-1');
			const healthNews = await DataSource.getNews('health');
			const healthNewsData = healthNews['articles'].find((data) => isNull(data));
			feature1Container.innerHTML = `
		   <img src="${healthNewsData['urlToImage']}" alt="health-image" class="w-full h-40 object-none  image-source ">
		        <div class="px-1">
		          <a href="${healthNewsData['url']}" target="_blank" class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">
		            ${healthNewsData['title']}
		          </a>
		          <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">
		            ${healthNewsData['description']}
		          </p>
		          <div class="flex justify-between items-center mt-5 text-sm">
		            <div>
		              <h4 class="author font-semibold">${healthNewsData['author']}</h4>
		              <div class="flex items-center mt-1">
		                <p class="date">${formatDate(healthNewsData['publishedAt'])}</p>
		                <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>
		                <p class="source">${healthNewsData['source']['name']}</p>
		              </div>
		            </div>
		            <button class="w-7 h-7">
		              <img src="./img/save.svg" alt="save" class="w-full h-full">
		            </button>
		          </div>
		        </div>
		`;

			const feature2 = document.querySelector('.feature-2');
			const techNews = await DataSource.getNews('technology');
			const techNewsData = techNews['articles'].filter((data) => isNull(data));
			for (let i = 0; i < 2; i++) {
				feature2.innerHTML += `
		   <article class="feature-2 h-[100px] md:h-[150px] flex">
		          <img src="${techNewsData[i]['urlToImage']}" alt="tech-images"
		              class="mr-3 w-[120px] h-full md:w-[150px] object-cover">
		          <div class="flex flex-col overflow-hidden">
		            <a href="${techNewsData[i]['url']}"
		              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">
		             ${techNewsData[i]['title']}
		            </a>

		            <p class="hidden md:block description font-normal text-sm truncate my-3 mb-5">
		             ${techNewsData[i]['description']}
		            </p>

		            <div class="flex justify-between mt-4 md:mt-0">
		              <div>
		                <h4 class="author font-semibold text-sm">${techNewsData[i]['source']['name']}</h4>
		                <p class="date">${formatDate(techNewsData[i]['publishedAt'])}</p>
		              </div>
		            </div>

		          </div>
		        </article>`;
			}

			const feature3 = document.querySelector('.feature-3');
			const artNews = await DataSource.getNews('art');
			const artNewsData = artNews['articles'].filter((data) => isNull(data));
			for (let i = 0; i < 3; i++) {
				feature3.innerHTML += `
		     <article class="feature-3 h-[100px] flex">
		          <img src="${artNewsData[i]['urlToImage']}" alt="art-image" class="w-[120px] h-full object-cover mr-2">
		          <div class="flex flex-col">
		            <a href="${artNewsData[i]['url']}"
		              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">
		              ${artNewsData[i]['title']}
		            </a>
		            <div class="flex justify-between mt-4">
		              <div>
		                <h4 class="author font-semibold text-sm">${artNewsData[i]['source']['name']}</h4>
		                <p class="date">${formatDate(artNewsData[i]['publishedAt'])}</p>
		              </div>
		            </div>
		          </div>
		        </article>
		  `;
			}
		} catch (e) {}
	};
};

export default getFeaturedPost;
