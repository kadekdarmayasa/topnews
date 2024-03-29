class LatestPost extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.className = this.getAttribute('class') || null
    this.render()
  }

  attributeChangedCallback(name, newValue, oldValue) {
    if (this[name] !== oldValue) this[name] = newValue
    this.render()
  }

  static get observedAttributes() {
    return ['class']
  }

  render() {
    this.innerHTML = `
			<h2 class="text-xl font-semibold">Latest Posts</h2>
			<hr class="mt-2 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible
				after:content-[''] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]
			">
			<section 
				class="mt-8 grid sm:grid-cols-2 sm:max-w-[100%] sm:gap-x-4 sm:gap-y-24 md:max-w-[100%] gap-10" id="latest-post-container"
			></section>
    `
  }
}

customElements.define('latest-posts', LatestPost)
export default LatestPost
