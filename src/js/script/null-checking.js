export default function isNull(data) {
	return data['content'] && data['description'] && data['source']['id'] && data['source']['name'] && data['title'] && data['urlToImage'];
}
