import getAllArticles from './all-articles';
import getFeaturedPost from './features-content';
import getLatestPost from './latest-post-content';
import getPopularPost from './popular-post-content';
import getPostBasedCategory from './category-content';
getFeaturedPost();
getLatestPost();
getPopularPost();

const main = () => {
	const navLiElements = document.querySelectorAll('nav ul li');
	const navAElements = document.querySelectorAll('nav ul li a');
	const footerNavLinks = document.querySelectorAll('.footer-nav-link');
	const searchModalKeyword = document.getElementById('search-keyword');
	const searchButton = document.querySelector('.search');
	const searchForm = document.getElementById('search-form');
	const articlesBody = document.querySelector('.all-articles .body');
	const articlesHeader = document.querySelector('.all-articles .header');
	const articlesContainer = document.querySelector('.all-articles');
	const featuredForMembers = document.querySelector('featured-for-members');
	const latestPost = document.querySelector('latest-posts');
	const popularPosts = document.querySelector('popular-posts');
	const categoryContentContainer = document.querySelector('.category-content');
	const header = document.querySelector('header');
	const modal = document.getElementById('defaultModal');

	const hideModal = () => {
		modal.classList.add('hidden');
		modal.setAttribute('aria-hidden', true);
		modal.removeAttribute('aria-modal');
		modal.removeAttribute('role');
	};

	const showModal = () => {
		searchModalKeyword.value = '';
		modal.classList.remove('hidden');
		modal.classList.add('flex');
		modal.removeAttribute('aria-hidden');
		modal.setAttribute('aria-modal', true);
		modal.setAttribute('role', 'dialog');
	};

	const hideHomeContent = () => {
		header.lastElementChild.classList.add('hidden');
		featuredForMembers.classList.add('hidden');
		latestPost.classList.add('hidden');
		popularPosts.classList.add('hidden');
	};

	const showHomeContent = () => {
		header.lastElementChild.classList.remove('hidden');
		featuredForMembers.classList.remove('hidden');
		latestPost.classList.remove('hidden');
		popularPosts.classList.remove('hidden');
	};

	const hideCategoryContent = () => {
		categoryContentContainer.innerHTML = '';
		categoryContentContainer.classList.add('hidden');
		categoryContentContainer.classList.remove('flex');
		categoryContentContainer.classList.remove('mt-20');
	};

	const showCategoryContent = () => {
		getPostBasedCategory(localStorage.getItem('NAV-LINK-ID'));
		categoryContentContainer.innerHTML = '';
		categoryContentContainer.classList.remove('hidden');
		categoryContentContainer.classList.add('flex');
		categoryContentContainer.classList.add('mt-20');
	};

	const toggleUnderlineMenu = (targetElement) => {
		navAElements.forEach((navAElement) => {
			if (navAElement.classList.contains('underline')) {
				navAElement.classList.remove('underline');
			}
		});

		targetElement.firstElementChild.classList.add('underline');
	};

	// This is used to trigger the search button element (CTRL + SHIFT + K)
	window.addEventListener('keydown', (event) => event.ctrlKey && event.key == 'K' && searchButton.click());

	// To save any change to local storage
	const saveToLocalStorage = (key = '', value = ' ') => localStorage.setItem(key, value);

	if (localStorage.getItem('NAV-LINK-ID') == null && localStorage.getItem('LAST-SEARCH') == null) saveToLocalStorage('NAV-LINK-ID', 'home');

	// Content Behavior when the page is refreshed
	if (localStorage.getItem('NAV-LINK-ID') != 'home' && localStorage.getItem('NAV-LINK-ID') != null) {
		showCategoryContent();
		hideHomeContent();
		articlesContainer.classList.add('hidden');
	} else if (localStorage.getItem('NAV-LINK-ID') == 'home' || localStorage.getItem('NAV-LINK-ID') == none) {
		hideCategoryContent();
		showHomeContent();
		articlesContainer.classList.add('hidden');
	} else if (localStorage.getItem('NAV-LINK-ID') == null && localStorage.getItem('LAST-SEARCH') != null) {
		hideModal();
		hideCategoryContent();
		hideHomeContent();
		articlesContainer.classList.remove('hidden');
		articlesHeader.firstElementChild.innerHTML = localStorage.getItem('LAST-SEARCH');
		getAllArticles(localStorage.getItem('LAST-SEARCH'));
	}

	navLiElements.forEach((navLiElement) => {
		// Nav Menu Underline Active Behavior
		if (localStorage.getItem('NAV-LINK-ID') == navLiElement.id) {
			toggleUnderlineMenu(navLiElement);
		} else if (localStorage.getItem('NAV-LINK-ID') == null) {
			navAElements.forEach((navAElement) => {
				navAElement.classList.remove('underline');
			});
		}

		// Footer Navigation Links Behavior
		Array.from(footerNavLinks).forEach((footerNavLink) => {
			footerNavLink.addEventListener('click', () => {
				if (footerNavLink.dataset.id == navLiElement.id) {
					saveToLocalStorage('NAV-LINK-ID', footerNavLink.dataset.id);
					navLiElement.click();
					document.body.click();
				}
			});
		});

		// Behavior of the content when nav menu is clicked
		navLiElement.addEventListener('click', () => {
			toggleUnderlineMenu(navLiElement);
			if (navLiElement.id != 'home' && localStorage.getItem('NAV-LINK-ID') != 'none') {
				hideHomeContent();
				showCategoryContent();
				saveToLocalStorage('NAV-LINK-ID', navLiElement.id);
				articlesContainer.classList.add('hidden');
			} else if (navLiElement.id == 'home') {
				showHomeContent();
				hideCategoryContent();
				saveToLocalStorage('NAV-LINK-ID', navLiElement.id);
				articlesContainer.classList.add('hidden');
			}
		});
	});

	searchForm.onsubmit = (event) => {
		navAElements.forEach((navAElement) => navAElement.classList.remove('underline'));
		hideModal();
		hideCategoryContent();
		hideHomeContent();
		articlesContainer.classList.remove('hidden');
		articlesHeader.firstElementChild.innerHTML = searchModalKeyword.value;
		articlesBody.innerHTML = '';
		getAllArticles(searchModalKeyword.value);
		localStorage.removeItem('NAV-LINK-ID');
		saveToLocalStorage('LAST-SEARCH', searchModalKeyword.value);
		event.preventDefault();
	};

	searchButton.addEventListener('click', (event) => {
		showModal();
		event.preventDefault();
	});
};

export default main;
