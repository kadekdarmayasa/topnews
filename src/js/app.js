import 'flowbite'
import '../css/main.css'
import './components/featured-for-members'
import './components/latest-post'
import './components/popular-post'

import getAllArticles from './all-articles'
import getFeaturedPost from './features-content'
import getLatestPost from './latest-post-content'
import getPopularPost from './popular-post-content'
import getPostBasedCategory from './category-content'
import Modal from './utils/search-modal-initiator'
import ContentInitiator from './utils/content-initiator'
import NavbarInitiator from './utils/navbar-initiator'
import { saveToLocalStorage } from './utils/local-storage'

const searchButton = document.querySelector('.search')
const articlesBody = document.querySelector('.all-articles .body')
const articlesHeader = document.querySelector('.all-articles .header')
const articlesContainer = document.querySelector('.all-articles')

const content = new ContentInitiator({
  jumbotron: document.getElementById('jumbotron'),
  featuredForMember: document.querySelector('featured-for-members'),
  latestPost: document.querySelector('latest-posts'),
  popularPost: document.querySelector('popular-posts'),
  categoryContent: document.querySelector('.category-content'),
})

const navbar = new NavbarInitiator({
  navMenuLinks: document.querySelectorAll('nav ul li a'),
  navMenuItems: document.querySelectorAll('nav ul li'),
  footerNavLinks: document.querySelectorAll('.footer-nav-link'),
  content,
  articlesContainer,
})

const searchModal = new Modal({
  element: document.querySelector('.search-modal'),
  keyword: document.getElementById('search-keyword'),
  button: document.querySelector('.search'),
  form: document.getElementById('search-form'),
  navbar,
  mainContent: content,
  articleElement: {
    header: articlesHeader,
    body: articlesBody,
    container: articlesContainer,
  },
})

window.addEventListener(
  'keydown',
  (event) => event.ctrlKey && event.key == 'K' && searchButton.click(),
)

if (
  localStorage.getItem('NAV-LINK-ID') == null &&
  localStorage.getItem('LAST-SEARCH') == null
) {
  saveToLocalStorage('NAV-LINK-ID', 'home')
}

if (
  localStorage.getItem('NAV-LINK-ID') != 'home' &&
  localStorage.getItem('NAV-LINK-ID') != null
) {
  content.showCategory()
  content.hideHome()
  articlesContainer.classList.add('hidden')
  getPostBasedCategory(localStorage.getItem('NAV-LINK-ID'))
}

if (
  localStorage.getItem('NAV-LINK-ID') == 'home' ||
  localStorage.getItem('NAV-LINK-ID') == 'none'
) {
  articlesContainer.classList.add('hidden')
  content.hideCategory()
  content.showHome()
  getFeaturedPost()
  getLatestPost()
  getPopularPost()
}

if (
  localStorage.getItem('NAV-LINK-ID') == null &&
  localStorage.getItem('LAST-SEARCH') != null
) {
  searchModal.hide()
  content.hideCategory()
  content.hideHome()
  articlesContainer.classList.remove('hidden')
  articlesHeader.firstElementChild.innerHTML =
    localStorage.getItem('LAST-SEARCH')
  getAllArticles(localStorage.getItem('LAST-SEARCH'))
}
