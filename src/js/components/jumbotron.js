class Jumbotron extends HTMLElement {
	connectedCallback() {
		this.className = this.getAttribute('class') || null;
		this.render();
	}

	attributeChangedCallback(name, newValue) {
		this[name] = newValue;
		this.render();
	}

	static get attributeObserved() {
		return ['class'];
	}

	render() {
		this.innerHTML = `
     <section
      class="md:text-left text-center jumbotron bg-[#DFF6FF] mt-20 mx-6 sm:mt-6 md:mx-[50px] flex justify-between items-center p-16 md:px-20 px-8 flex-col md:flex-row">
      <div class="first-column sm:max-w-[460px] md:order-1 order-2 mt-12 md:mt-0">
        <h1 class="font-semibold text-xl sm:text-2xl leading-10">Find Popular and Helpful News <br
            class="hidden sm:block"> on
          TopNews
        </h1>
        <p class="font-medium text-base leading-9 mt-8 mb-8">Topnews is a site that provides news from various sources.
          Where the news presented can provide benefit to
          the individual who reads it.</p>
        <div class="buttons font-medium">
          <button class="w-48 h-[50px] mb-4 sm:mr-2 bg-[#06283D] text-white rounded-md">Sign Up</button>
          <button class="w-48 h-[50px] border-2 border-[#06283D] rounded-md">Subscribe</button>
        </div>
      </div>
      <div class="second-column max-w-[540px] md:order-2">
        <img src="./img/jumbotron-img.svg" alt="jumbtron">
      </div>
    </section>
  `;
	}
}

customElements.define('jumbo-tron', Jumbotron);

export default Jumbotron;
