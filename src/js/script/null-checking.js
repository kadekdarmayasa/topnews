export default function isNull(data) {
	return data['author'] && data['content'] && data['description'] && data['source']['id'] && data['source']['name'] && data['title'] && data['urlToImage'];
}
