import featureContent from './script/features-content';
import latestPostContent from './script/latest-post-content';
import popularPostContent from './script/popular-post-content';

const baseUrl = 'https://newsapi.org/v2/everything?';
featureContent(baseUrl);
latestPostContent(baseUrl, '4');
popularPostContent(baseUrl, '5');

const main = () => {
	const navLiElements = document.querySelectorAll('nav ul li');
	const navAElements = document.querySelectorAll('nav ul li a');
	const header = document.querySelector('header');
	const featuredForMembers = document.querySelector('featured-for-members');
	const latestPost = document.querySelector('latest-posts');
	const popularPosts = document.querySelector('popular-posts');

	if (localStorage.getItem('hidden-home-content')) {
		header.lastElementChild.classList.add('hidden');
		featuredForMembers.classList.add('hidden');
		latestPost.classList.add('hidden');
		popularPosts.classList.add('hidden');
	} else {
		header.lastElementChild.classList.remove('hidden');
		featuredForMembers.classList.remove('hidden');
		latestPost.classList.remove('hidden');
		popularPosts.classList.remove('hidden');
	}

	navLiElements.forEach(function (navLiElement) {
		navLiElement.addEventListener('click', function () {
			navAElements.forEach(function (navAElement) {
				if (navAElement.classList.contains('underline')) {
					navAElement.classList.remove('underline');
				}
			});

			if (this.classList.contains(localStorage.getItem('navLinkActive'))) {
				this.firstElementChild.classList.add('underline');
			} else {
				this.firstElementChild.classList.add('underline');
			}

			if (this.id != 'home') {
				header.lastElementChild.classList.add('hidden');
				featuredForMembers.classList.add('hidden');
				latestPost.classList.add('hidden');
				popularPosts.classList.add('hidden');
				localStorage.setItem('navLinkActive', this.id);
				localStorage.setItem('hidden-home-content', true);
			} else {
				header.lastElementChild.classList.remove('hidden');
				featuredForMembers.classList.remove('hidden');
				latestPost.classList.remove('hidden');
				popularPosts.classList.remove('hidden');
				localStorage.setItem('hidden-home-content', false);
			}
		});
	});
};

export default main;
