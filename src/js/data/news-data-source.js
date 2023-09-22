import axios from 'axios'

class NewsDataSource {
  static async gettAllNews({ keyword, sortBy = 'publishedAt', pageSize = 10 }) {
    try {
      const response = await axios({
        url: `${process.env.NEWS_API_URL}`,
        method: 'get',
        params: { q: keyword, sortBy, pageSize, language: 'en' },
        headers: { 'X-Api-Key': 'fbb232f6a29f48d8a4c6ad1eebc31eb7' },
      })
      return response.data
    } catch (error) {
      return error.message
    }
  }
}

export default NewsDataSource
