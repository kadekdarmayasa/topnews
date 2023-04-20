class FeaturedForMembers extends HTMLElement {
  connectedCallback() {
    this.className = this.getAttribute('class') || null;
    this.render();
  }

  attributeChangedCallback(name, newValue) {
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ['class'];
  }

  render() {
    this.innerHTML = `
      <section class="mt-32 mb-8">
        <h2 class="text-xl font-semibold">Featured For Members</h2>
        <hr
          class="mt-2 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible
        after:content-[''] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]">
      </section>

      <section class="flex w-full gap-6 justify-between flex-col md:flex-row">
        <section class="feature-1 w-full mb-16 md:mb-0 md:max-w-[34%] max-h-[300px]" id="feature-1">
        </section>

        <section class="feature-2 max-h-[300px] w-full md:max-w-[34%] flex flex-col gap-y-8 gap-x-4 md:gap-y-4">
        </section>

        <section class="feature-3 h-[300px] w-full md:max-w-[30%] flex flex-col gap-y-8 gap-x-4 md:gap-y-4">
        </section>
      </section>
    `;
  }
}

customElements.define('featured-for-members', FeaturedForMembers);

export default FeaturedForMembers;
