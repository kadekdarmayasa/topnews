import formatDate from './dateformat';

const popularPostContent = async (baseUrl, pageSize) => {
	const response = await fetch(`${baseUrl}q=education&sortBy=popularity&pageSize=${pageSize}&language=en`, {
		headers: {
			'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81',
		},
	});
	const responseJson = await response.json();
	const articles = responseJson['articles'];
	const popularPostContenContainer = document.getElementById('popular-post-container');

	// Array.from(articles).forEach((article, index) => {
	// 	if (index > 0) {
	// 		popularPostContenContainer.innerHTML += `
	//     <article class="h-[100px] w-full flex items-center">
	//           <h2 class="text-6xl text-[#989898] mr-8">0${++index}</h2>
	//           <div class="flex flex-col overflow-hidden w-full">
	//             <a href=""
	//               class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">
	//               ${article['title']}
	//             </a>
	//             <div class="flex justify-between mt-4">
	//               <div>
	//                 <h4 class="author font-semibold text-sm">${article['author']}</h4>
	//                 <p class="date">${formatDate(article['publishedAt'])}</p>
	//               </div>
	//             </div>
	//           </div>
	//         </article>
	//   `;
	// 	} else {
	// 		popularPostContenContainer.innerHTML += `
	//     <article class="h-[100px] w-full flex items-center">
	//           <h2 class="text-6xl text-[#989898] mr-12">0${++index}</h2>
	//           <div class="flex flex-col overflow-hidden w-full">
	//             <a href=""
	//               class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">
	//               ${article['title']}
	//             </a>
	//             <div class="flex justify-between mt-4">
	//               <div>
	//                 <h4 class="author font-semibold text-sm">${article['author']}</h4>
	//                 <p class="date">${formatDate(article['publishedAt'])}</p>
	//               </div>
	//             </div>
	//           </div>
	//         </article>
	//   `;
	// 	}
	// });
};
export default popularPostContent;
