class PopularPost extends HTMLElement {
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
			<h2 class="text-xl font-semibold">Popular Posts</h2>
			<hr class="mt-2 mb-8 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible
				after:content-[''] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]
			">
			<section class="w-full flex flex-col gap-4 md:gap-y-10" id="popular-post-container"></section>
    `
  }
}

customElements.define('popular-posts', PopularPost)
export default PopularPost
