import { saveToLocalStorage } from './local-storage'

class NavbarInitiator {
  constructor({
    navMenuLinks,
    navMenuItems,
    footerNavLinks,
    content,
    articlesContainer,
  }) {
    this.navMenuLinks = navMenuLinks
    this.footerNavLinks = footerNavLinks
    this.mainContent = content
    this.articlesContainer = articlesContainer
    this.navMenuItems = navMenuItems
    this.renderNavMenuItems(navMenuItems)
  }

  toggleItemUnderline(targetElement) {
    this.navMenuLinks.forEach((navAElement) => {
      if (navAElement.classList.contains('underline')) {
        navAElement.classList.remove('underline')
      }
    })
    targetElement.firstElementChild.classList.add('underline')
  }

  removeNavMenuLinksUnderline() {
    this.navMenuLinks.forEach((navAElement) => {
      if (navAElement.classList.contains('underline')) {
        navAElement.classList.remove('underline')
      }
    })
  }

  renderNavMenuItems(navMenuItems) {
    const self = this

    navMenuItems.forEach((navMenuItem) => {
      if (localStorage.getItem('NAV-LINK-ID') == navMenuItem.id) {
        self.toggleItemUnderline(navMenuItem)
      }

      if (localStorage.getItem('NAV-LINK-ID') == null) {
        self.navMenuLinks.forEach((navMenuLink) =>
          navMenuLink.classList.remove('underline'),
        )
      }

      navMenuItem.addEventListener('click', function () {
        self.toggleItemUnderline(navMenuItem)

        if (
          navMenuItem.id != 'home' &&
          localStorage.getItem('NAV-LINK-ID') != 'none'
        ) {
          self.mainContent.hideHome()
          self.mainContent.showCategory()
          self.articlesContainer.classList.add('hidden')
          saveToLocalStorage('NAV-LINK-ID', navMenuItem.id)
        }

        if (navMenuItem.id == 'home') {
          self.mainContent.showHome()
          self.mainContent.hideCategory()
          self.articlesContainer.classList.add('hidden')
          saveToLocalStorage('NAV-LINK-ID', navMenuItem.id)
        }
      })

      Array.from(self.footerNavLinks).forEach((footerNavLink) => {
        footerNavLink.addEventListener('click', () => {
          if (footerNavLink.dataset.id == navMenuItem.id) {
            saveToLocalStorage('NAV-LINK-ID', footerNavLink.dataset.id)
            navMenuItem.click()
            document.body.click()
          }
        })
      })
    })
  }
}

export default NavbarInitiator
