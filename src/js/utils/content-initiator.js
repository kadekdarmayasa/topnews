class ContentInitiator {
  constructor({
    jumbotron,
    featuredForMember,
    latestPost,
    popularPost,
    categoryContent,
  }) {
    this.jumbotron = jumbotron
    this.featuredForMember = featuredForMember
    this.latestPost = latestPost
    this.popularPost = popularPost
    this.categoryContent = categoryContent
  }

  hideHome() {
    this.jumbotron.classList.add('hidden')
    this.featuredForMember.classList.add('hidden')
    this.latestPost.classList.add('hidden')
    this.popularPost.classList.add('hidden')
  }

  showHome() {
    this.jumbotron.classList.remove('hidden')
    this.featuredForMember.classList.remove('hidden')
    this.latestPost.classList.remove('hidden')
    this.popularPost.classList.remove('hidden')
  }

  hideCategory() {
    this.categoryContent.innerHTML = ''
    this.categoryContent.classList.add('hidden')
    this.categoryContent.classList.remove('flex')
    this.categoryContent.classList.remove('mt-20')
  }

  showCategory() {
    this.categoryContent.innerHTML = ''
    this.categoryContent.classList.remove('hidden')
    this.categoryContent.classList.add('flex')
    this.categoryContent.classList.add('mt-20')
  }
}

export default ContentInitiator
