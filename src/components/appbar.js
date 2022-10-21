class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<nav class="flex justify-between items-center px-6 md:px-[68px] h-24 relative">
      <a href="" class="brand text-2xl font-bold">TopNews</a>
      <ul
        class="mt-2 text-base font-medium w-11/12 overflow-x-auto whitespace-nowrap absolute top-24 h-9 md:w-auto md:overflow-visible md:whitespace-normal md:static md:top-0 md:h-auto">
        <li class="inline-block mr-5">
          <a href="#" class="underline underline-offset-8 decoration-[#06283D]">Home</a>
        </li>
        <li class="inline-block mr-5 ">
          <a href="#" class="hover:underline underline-offset-8 decoration-[#06283D]">Technology</a>
        </li>
        <li class="inline-block mr-5 ">
          <a href="#" class="hover:underline underline-offset-8 decoration-[#06283D]">Health</a>
        </li>
        <li class="inline-block mr-5 ">
          <a href="#" class="hover:underline underline-offset-8 decoration-[#06283D]">Art</a>
        </li>
        <li class="inline-block mr-5 ">
          <a href="#" class="hover:underline underline-offset-8 decoration-[#06283D]">Education</a>
        </li>
        <li class="inline-block mr-5 ">
          <a href="#" class="hover:underline underline-offset-8 decoration-[#06283D]">Science</a>
        </li>
      </ul>
      <button
        class="search bg-[#F7F7F7] rounded-md w-10 h-10 flex items-center justify-center hover:shadow-sm transition-all">
        <img src="./img/search-icon.svg" alt="search-icon">
      </button>
    </nav>`;
	}
}

customElements.define('app-bar', AppBar);

export default AppBar;
