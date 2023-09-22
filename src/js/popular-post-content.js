import DataSource from './data/news-data-source'
import formatDate from './dateformat'
import { isNull } from './utils/null-checking'

const getPopularPost = async () => {
  try {
    const tradingNews = await DataSource.gettAllNews({
      keyword: 'trading',
      sortBy: 'popularity',
    })
    const tradingNewsData = tradingNews['articles'].filter(
      (data) => !!isNull(data),
    )

    const popularPostContenContainer = document.getElementById(
      'popular-post-container',
    )
    for (let i = 0, number = 1; i < 5; i++) {
      popularPostContenContainer.innerHTML += `
				<article class="h-[100px] w-full flex items-center">
					<h2 class="text-6xl text-[#989898] ${
            i > 0 ? 'mr-8' : 'mr-12'
          }">0${number++}</h2>
					<div class="flex flex-col overflow-hidden w-full">
						<a href=""
							class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2" target="_blank" rel="noopener nofollow">
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
			`
    }
  } catch (err) {
    console.log(err.message)
  }
}
export default getPopularPost
