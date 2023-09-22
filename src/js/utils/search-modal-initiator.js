import { saveToLocalStorage } from './local-storage'
import getAllArticles from '../all-articles'

class SearchModalInitiator {
  constructor({
    element,
    keyword,
    button,
    form,
    mainContent,
    navbar,
    articleElement: { header, container, body },
  }) {
    this.modal = element

    form.addEventListener('submit', (event) => {
      this.hide()
      navbar.removeNavMenuLinksUnderline()
      mainContent.hideCategory()
      mainContent.hideHome()
      container.classList.remove('hidden')
      header.firstElementChild.innerHTML = keyword.value
      body.innerHTML = ''
      getAllArticles(keyword.value)
      localStorage.removeItem('NAV-LINK-ID')
      saveToLocalStorage('LAST-SEARCH', keyword.value)
      event.preventDefault()
    })

    button.addEventListener('click', (event) => {
      this.show()
      keyword.value = ''
      event.preventDefault()
    })
  }

  hide() {
    this.modal.classList.add('hidden')
    this.modal.setAttribute('aria-hidden', true)
    this.modal.removeAttribute('aria-modal')
    this.modal.removeAttribute('role')
  }

  show() {
    this.modal.classList.remove('hidden')
    this.modal.classList.add('flex')
    this.modal.removeAttribute('aria-hidden')
    this.modal.setAttribute('aria-modal', true)
    this.modal.setAttribute('role', 'dialog')
  }
}

export default SearchModalInitiator
