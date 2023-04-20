class AppBar extends HTMLElement {
	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `<nav class="flex justify-between items-center px-6 md:px-[50px] h-24 relative">
			<a href="" class="brand text-2xl font-bold">TopNews</a>
			<ul class="mt-2 text-base font-medium w-11/12 overflow-x-hidden whitespace-nowrap absolute top-24 h-9 sm:w-auto sm:overflow-visible sm:whitespace-normal sm:static md:h-auto">
				<li class="inline-block mr-5 cursor-pointer" id="home">
					<a href="" class="underline underline-offset-8 decoration-[#06283D]">Home</a>
				</li>
				<li class="inline-block mr-5 cursor-pointer" id="technology">
					<a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Technology</a>
				</li>
				<li class="inline-block mr-5 cursor-pointer" id="health">
					<a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Health</a>
				</li>
				<li class="inline-block mr-5 cursor-pointer" id="art">
					<a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Art</a>
				</li>
				<li class="inline-block mr-5 cursor-pointer" id="education">
					<a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Education</a>
				</li>
				<li class="inline-block mr-5 cursor-pointer" id="science">
					<a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Science</a>
				</li>
			</ul>
			<button data-tooltip-target="tooltip-default" data-modal-toggle="defaultModal" class="search bg-[#eaeaea] rounded-md w-10 h-10 flex items-center justify-center hover:shadow-sm hover:bg-[#ebebeb] transition-all">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</button>
			<div id="tooltip-default"  role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
					CTRL + Shift + K
			<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
		</nav>`;
	}
}

customElements.define('app-bar', AppBar);

export default AppBar;
