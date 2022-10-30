import featureContent from './script/features-content';
import latestPostContent from './script/latest-post-content';
import popularPostContent from './script/popular-post-content';
import categoryContent from './script/category-content';

const main = () => {
	const baseUrl = 'https://newsapi.org/v2/everything?';
	featureContent(baseUrl);
	latestPostContent(baseUrl, '4');
	popularPostContent(baseUrl, '5');

	// Get Needed Elements
	const navLiElements = document.querySelectorAll('nav ul li');
	const navAElements = document.querySelectorAll('nav ul li a');
	const header = document.querySelector('header');
	const featuredForMembers = document.querySelector('featured-for-members');
	const latestPost = document.querySelector('latest-posts');
	const popularPosts = document.querySelector('popular-posts');
	const categoryContentContainer = document.querySelector('.category-content');

	// Check if the page is refreshed
	if (localStorage.getItem('navLinkID') != 'home') {
		categoryContent(baseUrl, localStorage.getItem('navLinkID'));
	} else {
		categoryContentContainer.classList.add('hidden');
		categoryContentContainer.classList.remove('flex');
		categoryContentContainer.classList.remove('mt-20');
	}

	navLiElements.forEach(function (navLiElement) {
		if (localStorage.getItem('navLinkID') != 'home') {
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

		// Nav Menu Underline Active Behavior
		if (localStorage.getItem('navLinkID') == navLiElement.id) {
			navAElements.forEach(function (navAElement) {
				if (navAElement.classList.contains('underline')) {
					navAElement.classList.remove('underline');
				}
			});

			navLiElement.firstElementChild.classList.add('underline');
		}

		navLiElement.addEventListener('click', function () {
			navAElements.forEach(function (navAElement) {
				if (navAElement.classList.contains('underline')) {
					navAElement.classList.remove('underline');
				}
			});

			this.firstElementChild.classList.add('underline');

			if (this.id != 'home') {
				header.lastElementChild.classList.add('hidden');
				featuredForMembers.classList.add('hidden');
				latestPost.classList.add('hidden');
				popularPosts.classList.add('hidden');
				localStorage.setItem('navLinkID', this.id);
				localStorage.setItem('hidden-home-content', true);
				categoryContentContainer.innerHTML = '';
				categoryContent(baseUrl, localStorage.getItem('navLinkID'));
				categoryContentContainer.classList.remove('hidden');
				categoryContentContainer.classList.add('flex');
				categoryContentContainer.classList.add('mt-20');
			} else {
				header.lastElementChild.classList.remove('hidden');
				featuredForMembers.classList.remove('hidden');
				latestPost.classList.remove('hidden');
				popularPosts.classList.remove('hidden');
				localStorage.setItem('navLinkID', this.id);
				localStorage.setItem('hidden-home-content', false);
				categoryContentContainer.innerHTML = '';
				categoryContentContainer.classList.add('hidden');
				categoryContentContainer.classList.remove('flex');
				categoryContentContainer.classList.remove('mt-20');
			}
		});
	});
};

export default main;
