import featureContent from './script/features-content';

const main = () => {
	const baseUrl = 'https://newsapi.org/v2/everything?';
	featureContent(baseUrl);
	//  url, title, description, publishedAt, author, urlToImage
};

export default main;
