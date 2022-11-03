import getFeaturedPost from './script/features-content';
import getLatestPost from './script/latest-post-content';
import getPopularPost from './script/popular-post-content';
import getPostBasedCategory from './script/category-content';
const baseUrl = 'https://newsapi.org/v2/everything?';
getFeaturedPost(baseUrl);
getLatestPost(baseUrl);
getPopularPost(baseUrl);

const main = () => {
	const navLiElements = document.querySelectorAll('nav ul li');
	const navAElements = document.querySelectorAll('nav ul li a');
	const header = document.querySelector('header');
	const featuredForMembers = document.querySelector('featured-for-members');
	const latestPost = document.querySelector('latest-posts');
	const popularPosts = document.querySelector('popular-posts');
	const categoryContentContainer = document.querySelector('.category-content');
	const footerNavLinks = document.querySelectorAll('.footer-nav-link');

	// Check if the page is refreshed
	localStorage.getItem('navLinkID') != 'home' ? showCategoryContent() : hideCategoryContent();

	navLiElements.forEach(function (navLiElement) {
		localStorage.getItem('navLinkID') != 'home' ? hideHomeContent() : showHomeContent();

		// Nav Menu Underline Active Behavior
		if (localStorage.getItem('navLinkID') == navLiElement.id) {
			navAElements.forEach(function (navAElement) {
				if (navAElement.classList.contains('underline')) {
					navAElement.classList.remove('underline');
				}
			});

			navLiElement.firstElementChild.classList.add('underline');
		}

		Array.from(footerNavLinks).forEach((footerNavLink) => {
			footerNavLink.addEventListener('click', function () {
				navLiElement.click();
				localStorage.setItem('navLinkID', this.id);
			});
		});

		navLiElement.addEventListener('click', function () {
			navAElements.forEach(function (navAElement) {
				if (navAElement.classList.contains('underline')) {
					navAElement.classList.remove('underline');
				}
			});

			this.firstElementChild.classList.add('underline');

			if (this.id != 'home') {
				hideHomeContent(this.id);
				showCategoryContent();
				localStorage.setItem('navLinkID', this.id);
				localStorage.setItem('hidden-home-content', true);
			} else {
				showHomeContent(this.id);
				hideCategoryContent();
				localStorage.setItem('navLinkID', this.id);
				localStorage.setItem('hidden-home-content', false);
			}
		});
	});

	function hideHomeContent() {
		header.lastElementChild.classList.add('hidden');
		featuredForMembers.classList.add('hidden');
		latestPost.classList.add('hidden');
		popularPosts.classList.add('hidden');
	}

	function showHomeContent() {
		header.lastElementChild.classList.remove('hidden');
		featuredForMembers.classList.remove('hidden');
		latestPost.classList.remove('hidden');
		popularPosts.classList.remove('hidden');
	}

	function hideCategoryContent() {
		categoryContentContainer.innerHTML = '';
		categoryContentContainer.classList.add('hidden');
		categoryContentContainer.classList.remove('flex');
		categoryContentContainer.classList.remove('mt-20');
	}

	function showCategoryContent() {
		getPostBasedCategory(baseUrl, localStorage.getItem('navLinkID'));
		categoryContentContainer.innerHTML = '';
		categoryContentContainer.classList.remove('hidden');
		categoryContentContainer.classList.add('flex');
		categoryContentContainer.classList.add('mt-20');
	}
};

export default main;
