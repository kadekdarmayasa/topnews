import formatDate from './dateformat';

const latestPostContent = async (baseUrl, pageSize) => {
	const response = await fetch(`${baseUrl}q=science&sortBy=publishedAt&pageSize=${pageSize}&language=en&page=2`, {
		headers: {
			'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
		},
	});
	const responseJson = await response.json();
	console.log(responseJson);
	const articles = responseJson['articles'];

	const latestPostContentContainer = document.getElementById('latest-post-container');
	Array.from(articles).forEach(function (article) {
		latestPostContentContainer.innerHTML += `
          <article class="feature-1 w-full mb-16 md:mb-0 max-h-[300px]">
            <img src="${article['urlToImage']}" alt="education" class="w-full h-40 object-none image-source">
            <div class="px-1">
              <a href="${article['url']}" target="_blank"
                class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">
                ${article['title']}
              </a>
              <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">
                ${article['description']}
              </p>
              <div class="flex justify-between items-center mt-5 text-sm">
                <div class="overflow-hidden">
                  <h4 class="author font-semibold w-[80%] text-ellipsis">${article['author']}</h4>
                  <div class="flex items-center mt-1">
                    <p class="date">${formatDate(article['publishedAt'])}</p>
                    <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>
                    <p class="source">${article['source']['name']}</p>
                  </div>
                </div>
                <button class="w-7 h-7">
                  <img src="./img/save.svg" alt="save" class="w-full h-full">
                </button>
              </div>
            </div>
          </article>
    `;
	});
};

export default latestPostContent;
