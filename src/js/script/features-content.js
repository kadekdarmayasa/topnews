import formatDate from './dateformat';

const featureContent = async (baseUrl) => {
	const getNews = async (key, pageSize) => {
		const response = await fetch(`${baseUrl}q=${key}&sortBy=publishedAt&pageSize=${pageSize}&language=en`, {
			headers: {
				'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
			},
		});
		const responseJson = await response.json();
		return responseJson.articles;
	};

	window.onload = async function () {
		const feature1 = document.querySelector('.feature-1');
		const feature1Content = await getNews('health', 1);
		if (feature1Content[0].source.id == null) {
		}
		feature1.innerHTML = `
		   <img src="${feature1Content[0]['urlToImage']}" alt="health-image" class="w-full h-40 object-none  image-source ">
		        <div class="px-1">
		          <a href="${feature1Content[0]['url']}" target="_blank" class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">
		            ${feature1Content[0]['title']}
		          </a>
		          <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">
		            ${feature1Content[0]['description']}
		          </p>
		          <div class="flex justify-between items-center mt-5 text-sm">
		            <div>
		              <h4 class="author font-semibold">${feature1Content[0]['author']}</h4>
		              <div class="flex items-center mt-1">
		                <p class="date">${formatDate(feature1Content[0]['publishedAt'])}</p>
		                <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>
		                <p class="source">${feature1Content[0]['source']['name']}</p>
		              </div>
		            </div>
		            <button class="w-7 h-7">
		              <img src="./img/save.svg" alt="save" class="w-full h-full">
		            </button>
		          </div>
		        </div>
		`;

		const feature2 = document.querySelector('.feature-2');
		const feature2Contents = await getNews('technology', 2);
		Array.from(feature2Contents).forEach((feature2Content) => {
			feature2.innerHTML += `
		   <article class="feature-2 h-[100px] md:h-[150px] flex">
		          <img src="${feature2Content['urlToImage']}" alt="tech-images"
		              class="mr-3 w-[120px] h-full md:w-[150px] object-cover">
		          <div class="flex flex-col overflow-hidden">
		            <a href="${feature2Content['url']}"
		              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">
		             ${feature2Content['title']}
		            </a>

		            <p class="hidden md:block description font-normal text-sm truncate my-3 mb-5">
		             ${feature2Content['description']}
		            </p>

		            <div class="flex justify-between mt-4 md:mt-0">
		              <div>
		                <h4 class="author font-semibold text-sm">${feature2Content['source']['name']}</h4>
		                <p class="date">${formatDate(feature2Content['publishedAt'])}</p>
		              </div>
		            </div>

		          </div>
		        </article>
		`;
		});

		const feature3 = document.querySelector('.feature-3');
		const feature3Contents = await getNews('art', 3);
		Array.from(feature3Contents).forEach((feature3Content) => {
			feature3.innerHTML += `
		     <article class="feature-3 h-[100px] flex">
		          <img src="${feature3Content['urlToImage']}" alt="art-image" class="w-[120px] h-full object-cover mr-2">
		          <div class="flex flex-col">
		            <a href="${feature3Content['url']}"
		              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">
		              ${feature3Content['title']}
		            </a>
		            <div class="flex justify-between mt-4">
		              <div>
		                <h4 class="author font-semibold text-sm">${feature3Content['source']['name']}</h4>
		                <p class="date">${formatDate(feature3Content['publishedAt'])}</p>
		              </div>
		            </div>
		          </div>
		        </article>
		  `;
		});
	};
};

export default featureContent;
