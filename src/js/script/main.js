import getPostBasedCategory from './category-content';
import getFeaturedPost from './features-content';
import getLatestPost from './latest-post-content';
import getPopularPost from './popular-post-content';
getFeaturedPost();
getLatestPost();
getPopularPost();

const main = () => {
	const navLiElements = document.querySelectorAll('nav ul li');
	const navAElements = document.querySelectorAll('nav ul li a');
	const header = document.querySelector('header');
	const featuredForMembers = document.querySelector('featured-for-members');
	const latestPost = document.querySelector('latest-posts');
	const popularPosts = document.querySelector('popular-posts');
	const categoryContentContainer = document.querySelector('.category-content');
	const footerNavLinks = document.querySelectorAll('.footer-nav-link');
	const searchModalButton = document.getElementById('search-button');
	const searchModalKeyword = document.getElementById('search-keyword');
	const modal = document.getElementById('defaultModal');
	const searchButton = document.querySelector('.search');
	const searchForm = document.getElementById('search-form');

	window.addEventListener('keydown', function (event) {
		if (event.ctrlKey && event.key == 'K') searchButton.click();
	});

	const saveToLocalStorage = (key = '', value = ' ') => {
		localStorage.setItem(key, value);
	};

	if (localStorage.getItem('NAV-LINK-ID') != 'home' && localStorage.getItem('NAV-LINK-ID') != null) {
		showCategoryContent();
		hideHomeContent();
	} else if (localStorage.getItem('NAV-LINK-ID') == 'home') {
		hideCategoryContent();
		showHomeContent();
	}

	navLiElements.forEach(function (navLiElement) {
		// Nav Menu Underline Active Behavior
		if (localStorage.getItem('NAV-LINK-ID') == navLiElement.id) {
			toggleUnderlineMenu(navLiElement);
		}

		Array.from(footerNavLinks).forEach((footerNavLink) => {
			footerNavLink.addEventListener('click', function () {
				if (this.dataset.id == navLiElement.id) {
					saveToLocalStorage('NAV-LINK-ID', this.dataset.id);
					navLiElement.click();
					document.body.click();
				}
			});
		});

		navLiElement.addEventListener('click', function () {
			toggleUnderlineMenu(this);
			if (this.id != 'home') {
				hideHomeContent();
				showCategoryContent();
				saveToLocalStorage('NAV-LINK-ID', this.id);
			} else if (this.id == 'home') {
				showHomeContent();
				hideCategoryContent();
				saveToLocalStorage('NAV-LINK-ID', this.id);
			}
		});
	});

	searchForm.addEventListener('submit', function (event) {
		navAElements.forEach(function (navAElement) {
			navAElement.classList.remove('underline');
		});
		hideModal();
		hideCategoryContent();
		hideHomeContent();
		event.preventDefault();
	});

	searchButton.addEventListener('click', function (event) {
		showModal();
		event.preventDefault();
	});

	function hideModal() {
		modal.classList.add('hidden');
		modal.setAttribute('aria-hidden', true);
		modal.removeAttribute('aria-modal');
		modal.removeAttribute('role');
	}

	function showModal() {
		searchModalKeyword.value = '';
		modal.classList.remove('hidden');
		modal.classList.add('flex');
		modal.removeAttribute('aria-hidden');
		modal.setAttribute('aria-modal', true);
		modal.setAttribute('role', 'dialog');
	}

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
		getPostBasedCategory(localStorage.getItem('NAV-LINK-ID'));
		categoryContentContainer.innerHTML = '';
		categoryContentContainer.classList.remove('hidden');
		categoryContentContainer.classList.add('flex');
		categoryContentContainer.classList.add('mt-20');
	}

	function toggleUnderlineMenu(targetElement) {
		navAElements.forEach(function (navAElement) {
			if (navAElement.classList.contains('underline')) {
				navAElement.classList.remove('underline');
			}
		});

		targetElement.firstElementChild.classList.add('underline');
	}
};

export default main;
