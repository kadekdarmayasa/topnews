/*! For license information please see script.js.LICENSE.txt */
(() => {
	'use strict';
	var n = {
			16: (n, t, e) => {
				e.d(t, { Z: () => c });
				var r = e(81),
					o = e.n(r),
					a = e(645),
					i = e.n(a)()(o());
				i.push([n.id, '@import url(https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap);']), i.push([n.id, '\r\n', '']);
				const c = i;
			},
			668: (n, t, e) => {
				e.d(t, { Z: () => c });
				var r = e(81),
					o = e.n(r),
					a = e(645),
					i = e.n(a)()(o());
				i.push([
					n.id,
					'/*\n! tailwindcss v3.1.8 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n:root,\n[data-theme] {\n  background-color: hsla(var(--b1) / 1);\n  background-color: hsla(var(--b1) / var(--tw-bg-opacity, 1));\n  color: hsla(var(--bc) / 1);\n  color: hsla(var(--bc) / var(--tw-text-opacity, 1));\n}\n\nhtml {\n  -webkit-tap-highlight-color: transparent;\n}\n\n:root {\n  --p: 259 94% 51%;\n  --pf: 259 94% 41%;\n  --sf: 314 100% 38%;\n  --af: 174 60% 41%;\n  --nf: 219 14% 22%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --ac: 175 44% 15%;\n  --n: 219 14% 28%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 180 2% 90%;\n  --bc: 215 28% 17%;\n}\n\n@media (color-index: 48) {\n\n  :root {\n    --p: 262 80% 50%;\n    --pf: 262 80% 40%;\n    --sf: 316 70% 40%;\n    --af: 175 70% 33%;\n    --in: 198 93% 60%;\n    --su: 158 64% 52%;\n    --wa: 43 96% 56%;\n    --er: 0 91% 71%;\n    --inc: 198 100% 12%;\n    --suc: 158 100% 10%;\n    --wac: 43 100% 11%;\n    --erc: 0 100% 14%;\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-text-case: uppercase;\n    --btn-focus-scale: 0.95;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n    --pc: 0 0% 100%;\n    --s: 316 70% 50%;\n    --sc: 0 0% 100%;\n    --a: 175 70% 41%;\n    --ac: 0 0% 100%;\n    --n: 218 18% 12%;\n    --nf: 223 17% 8%;\n    --nc: 220 13% 69%;\n    --b1: 220 18% 20%;\n    --b2: 220 17% 17%;\n    --b3: 219 18% 15%;\n    --bc: 220 13% 69%;\n  }\n}\n\n@media (color: 48842621) {\n\n  :root {\n    --p: 262 80% 50%;\n    --pf: 262 80% 40%;\n    --sf: 316 70% 40%;\n    --af: 175 70% 33%;\n    --in: 198 93% 60%;\n    --su: 158 64% 52%;\n    --wa: 43 96% 56%;\n    --er: 0 91% 71%;\n    --inc: 198 100% 12%;\n    --suc: 158 100% 10%;\n    --wac: 43 100% 11%;\n    --erc: 0 100% 14%;\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-text-case: uppercase;\n    --btn-focus-scale: 0.95;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n    --pc: 0 0% 100%;\n    --s: 316 70% 50%;\n    --sc: 0 0% 100%;\n    --a: 175 70% 41%;\n    --ac: 0 0% 100%;\n    --n: 218 18% 12%;\n    --nf: 223 17% 8%;\n    --nc: 220 13% 69%;\n    --b1: 220 18% 20%;\n    --b2: 220 17% 17%;\n    --b3: 219 18% 15%;\n    --bc: 220 13% 69%;\n  }\n}\n\n@media (prefers-color-scheme: dark) {\n\n  :root {\n    --p: 262 80% 50%;\n    --pf: 262 80% 40%;\n    --sf: 316 70% 40%;\n    --af: 175 70% 33%;\n    --in: 198 93% 60%;\n    --su: 158 64% 52%;\n    --wa: 43 96% 56%;\n    --er: 0 91% 71%;\n    --inc: 198 100% 12%;\n    --suc: 158 100% 10%;\n    --wac: 43 100% 11%;\n    --erc: 0 100% 14%;\n    --rounded-box: 1rem;\n    --rounded-btn: 0.5rem;\n    --rounded-badge: 1.9rem;\n    --animation-btn: 0.25s;\n    --animation-input: .2s;\n    --btn-text-case: uppercase;\n    --btn-focus-scale: 0.95;\n    --border-btn: 1px;\n    --tab-border: 1px;\n    --tab-radius: 0.5rem;\n    --pc: 0 0% 100%;\n    --s: 316 70% 50%;\n    --sc: 0 0% 100%;\n    --a: 175 70% 41%;\n    --ac: 0 0% 100%;\n    --n: 218 18% 12%;\n    --nf: 223 17% 8%;\n    --nc: 220 13% 69%;\n    --b1: 220 18% 20%;\n    --b2: 220 17% 17%;\n    --b3: 219 18% 15%;\n    --bc: 220 13% 69%;\n  }\n}\n\n[data-theme=light] {\n  --p: 259 94% 51%;\n  --pf: 259 94% 41%;\n  --sf: 314 100% 38%;\n  --af: 174 60% 41%;\n  --nf: 219 14% 22%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 0 0% 100%;\n  --s: 314 100% 47%;\n  --sc: 0 0% 100%;\n  --a: 174 60% 51%;\n  --ac: 175 44% 15%;\n  --n: 219 14% 28%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 180 2% 90%;\n  --bc: 215 28% 17%;\n}\n\n[data-theme=dark] {\n  --p: 262 80% 50%;\n  --pf: 262 80% 40%;\n  --sf: 316 70% 40%;\n  --af: 175 70% 33%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 0 0% 100%;\n  --s: 316 70% 50%;\n  --sc: 0 0% 100%;\n  --a: 175 70% 41%;\n  --ac: 0 0% 100%;\n  --n: 218 18% 12%;\n  --nf: 223 17% 8%;\n  --nc: 220 13% 69%;\n  --b1: 220 18% 20%;\n  --b2: 220 17% 17%;\n  --b3: 219 18% 15%;\n  --bc: 220 13% 69%;\n}\n\n[data-theme=cupcake] {\n  --p: 183 47% 59%;\n  --pf: 183 47% 47%;\n  --sf: 338 71% 62%;\n  --af: 39 84% 46%;\n  --nf: 280 46% 11%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 183 100% 12%;\n  --sc: 338 100% 16%;\n  --ac: 39 100% 12%;\n  --nc: 280 83% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --s: 338 71% 78%;\n  --a: 39 84% 58%;\n  --n: 280 46% 14%;\n  --b1: 24 33% 97%;\n  --b2: 27 22% 92%;\n  --b3: 22 14% 89%;\n  --bc: 280 46% 14%;\n  --rounded-btn: 1.9rem;\n  --tab-border: 2px;\n  --tab-radius: .5rem;\n}\n\n[data-theme=bumblebee] {\n  --p: 41 74% 53%;\n  --pf: 41 74% 42%;\n  --sf: 50 94% 46%;\n  --af: 240 33% 11%;\n  --nf: 240 33% 11%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 0% 20%;\n  --ac: 240 60% 83%;\n  --nc: 240 60% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 240 33% 14%;\n  --s: 50 94% 58%;\n  --sc: 240 33% 14%;\n  --a: 240 33% 14%;\n  --n: 240 33% 14%;\n  --b1: 0 0% 100%;\n}\n\n[data-theme=emerald] {\n  --p: 141 50% 60%;\n  --pf: 141 50% 48%;\n  --sf: 219 96% 48%;\n  --af: 10 81% 45%;\n  --nf: 219 20% 20%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 151 28% 19%;\n  --s: 219 96% 60%;\n  --sc: 210 20% 98%;\n  --a: 10 81% 56%;\n  --ac: 210 20% 98%;\n  --n: 219 20% 25%;\n  --nc: 210 20% 98%;\n  --b1: 0 0% 100%;\n  --bc: 219 20% 25%;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n}\n\n[data-theme=corporate] {\n  --p: 229 96% 64%;\n  --pf: 229 96% 51%;\n  --sf: 215 26% 47%;\n  --af: 154 49% 48%;\n  --nf: 233 27% 10%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 229 100% 93%;\n  --sc: 215 100% 12%;\n  --ac: 154 100% 12%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 215 26% 59%;\n  --a: 154 49% 60%;\n  --n: 233 27% 13%;\n  --nc: 210 38% 95%;\n  --b1: 0 0% 100%;\n  --bc: 233 27% 13%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: .125rem;\n  --rounded-badge: .125rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n}\n\n[data-theme=synthwave] {\n  --p: 321 70% 69%;\n  --pf: 321 70% 55%;\n  --sf: 197 87% 52%;\n  --af: 48 89% 46%;\n  --nf: 253 61% 15%;\n  --b2: 254 59% 23%;\n  --b3: 254 59% 21%;\n  --pc: 321 100% 14%;\n  --sc: 197 100% 13%;\n  --ac: 48 100% 11%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 197 87% 65%;\n  --a: 48 89% 57%;\n  --n: 253 61% 19%;\n  --nc: 260 60% 98%;\n  --b1: 254 59% 26%;\n  --bc: 260 60% 98%;\n  --in: 199 87% 64%;\n  --inc: 257 63% 17%;\n  --su: 168 74% 68%;\n  --suc: 257 63% 17%;\n  --wa: 48 89% 57%;\n  --wac: 257 63% 17%;\n  --er: 352 74% 57%;\n  --erc: 260 60% 98%;\n}\n\n[data-theme=retro] {\n  --p: 3 74% 76%;\n  --pf: 3 74% 61%;\n  --sf: 145 27% 58%;\n  --af: 49 67% 61%;\n  --nf: 42 17% 34%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 345 5% 15%;\n  --s: 145 27% 72%;\n  --sc: 345 5% 15%;\n  --a: 49 67% 76%;\n  --ac: 345 5% 15%;\n  --n: 42 17% 42%;\n  --nc: 45 47% 80%;\n  --b1: 45 47% 80%;\n  --b2: 45 37% 72%;\n  --b3: 42 36% 65%;\n  --bc: 345 5% 15%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n  --rounded-box: 0.4rem;\n  --rounded-btn: 0.4rem;\n  --rounded-badge: 0.4rem;\n}\n\n[data-theme=cyberpunk] {\n  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;\n  --pf: 345 100% 58%;\n  --sf: 195 80% 56%;\n  --af: 276 74% 57%;\n  --nf: 57 100% 10%;\n  --b2: 56 100% 45%;\n  --b3: 56 100% 41%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 56 100% 10%;\n  --pc: 345 100% 15%;\n  --sc: 195 100% 14%;\n  --ac: 276 100% 14%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --p: 345 100% 73%;\n  --s: 195 80% 70%;\n  --a: 276 74% 71%;\n  --n: 57 100% 13%;\n  --nc: 56 100% 50%;\n  --b1: 56 100% 50%;\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --tab-radius: 0;\n}\n\n[data-theme=valentine] {\n  --p: 353 74% 67%;\n  --pf: 353 74% 54%;\n  --sf: 254 86% 61%;\n  --af: 181 56% 56%;\n  --nf: 336 43% 38%;\n  --b2: 318 46% 80%;\n  --b3: 318 46% 72%;\n  --pc: 353 100% 13%;\n  --sc: 254 100% 15%;\n  --ac: 181 100% 14%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 254 86% 77%;\n  --a: 181 56% 70%;\n  --n: 336 43% 48%;\n  --nc: 318 46% 89%;\n  --b1: 318 46% 89%;\n  --bc: 344 38% 28%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=halloween] {\n  --p: 32 89% 52%;\n  --pf: 32 89% 42%;\n  --sf: 271 46% 34%;\n  --af: 91 100% 26%;\n  --nf: 180 4% 9%;\n  --b2: 0 0% 12%;\n  --b3: 0 0% 10%;\n  --bc: 0 0% 83%;\n  --sc: 271 100% 88%;\n  --ac: 91 100% 7%;\n  --nc: 180 5% 82%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 180 7% 8%;\n  --s: 271 46% 42%;\n  --a: 91 100% 33%;\n  --n: 180 4% 11%;\n  --b1: 0 0% 13%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n}\n\n[data-theme=garden] {\n  --p: 139 16% 43%;\n  --pf: 139 16% 34%;\n  --sf: 97 37% 75%;\n  --af: 0 68% 75%;\n  --nf: 0 4% 28%;\n  --b2: 0 4% 82%;\n  --b3: 0 4% 74%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 139 100% 89%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 97 37% 93%;\n  --sc: 96 32% 15%;\n  --a: 0 68% 94%;\n  --ac: 0 22% 16%;\n  --n: 0 4% 35%;\n  --nc: 0 4% 91%;\n  --b1: 0 4% 91%;\n  --bc: 0 3% 6%;\n}\n\n[data-theme=forest] {\n  --p: 141 72% 42%;\n  --pf: 141 72% 34%;\n  --sf: 141 75% 38%;\n  --af: 35 69% 42%;\n  --nf: 0 10% 5%;\n  --b2: 0 12% 7%;\n  --b3: 0 12% 7%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 12% 82%;\n  --sc: 141 100% 10%;\n  --ac: 35 100% 10%;\n  --nc: 0 7% 81%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 141 100% 88%;\n  --s: 141 75% 48%;\n  --a: 35 69% 52%;\n  --n: 0 10% 6%;\n  --b1: 0 12% 8%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=aqua] {\n  --p: 182 93% 49%;\n  --pf: 182 93% 40%;\n  --sf: 274 31% 45%;\n  --af: 47 100% 64%;\n  --nf: 205 54% 40%;\n  --b2: 219 53% 39%;\n  --b3: 219 53% 35%;\n  --bc: 219 100% 89%;\n  --sc: 274 100% 91%;\n  --ac: 47 100% 16%;\n  --nc: 205 100% 90%;\n  --inc: 221 100% 91%;\n  --suc: 142 100% 87%;\n  --wac: 32 100% 9%;\n  --erc: 0 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --pc: 181 100% 17%;\n  --s: 274 31% 57%;\n  --a: 47 100% 80%;\n  --n: 205 54% 50%;\n  --b1: 219 53% 43%;\n  --in: 221 83% 53%;\n  --su: 142 76% 36%;\n  --wa: 32 95% 44%;\n  --er: 0 72% 51%;\n}\n\n[data-theme=lofi] {\n  --p: 0 0% 5%;\n  --pf: 0 0% 4%;\n  --sf: 0 2% 8%;\n  --af: 0 0% 12%;\n  --nf: 0 0% 0%;\n  --btn-text-case: uppercase;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --pc: 0 0% 100%;\n  --s: 0 2% 10%;\n  --sc: 0 0% 100%;\n  --a: 0 0% 15%;\n  --ac: 0 0% 100%;\n  --n: 0 0% 0%;\n  --nc: 0 0% 100%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 95%;\n  --b3: 0 2% 90%;\n  --bc: 0 0% 0%;\n  --in: 212 100% 48%;\n  --inc: 0 0% 100%;\n  --su: 137 72% 46%;\n  --suc: 0 0% 100%;\n  --wa: 5 100% 66%;\n  --wac: 0 0% 100%;\n  --er: 325 78% 49%;\n  --erc: 0 0% 100%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: 0.125rem;\n  --rounded-badge: 0.125rem;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-focus-scale: 1;\n  --tab-radius: 0;\n}\n\n[data-theme=pastel] {\n  --p: 284 22% 80%;\n  --pf: 284 22% 64%;\n  --sf: 352 70% 70%;\n  --af: 158 55% 65%;\n  --nf: 199 44% 49%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --bc: 0 0% 20%;\n  --pc: 284 59% 16%;\n  --sc: 352 100% 18%;\n  --ac: 158 100% 16%;\n  --nc: 199 100% 12%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 352 70% 88%;\n  --a: 158 55% 81%;\n  --n: 199 44% 61%;\n  --b1: 0 0% 100%;\n  --b2: 210 20% 98%;\n  --b3: 216 12% 84%;\n  --rounded-btn: 1.9rem;\n}\n\n[data-theme=fantasy] {\n  --p: 296 83% 25%;\n  --pf: 296 83% 20%;\n  --sf: 200 100% 30%;\n  --af: 31 94% 41%;\n  --nf: 215 28% 13%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --in: 198 93% 60%;\n  --su: 158 64% 52%;\n  --wa: 43 96% 56%;\n  --er: 0 91% 71%;\n  --pc: 296 100% 85%;\n  --sc: 200 100% 87%;\n  --ac: 31 100% 10%;\n  --nc: 215 62% 83%;\n  --inc: 198 100% 12%;\n  --suc: 158 100% 10%;\n  --wac: 43 100% 11%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 200 100% 37%;\n  --a: 31 94% 51%;\n  --n: 215 28% 17%;\n  --b1: 0 0% 100%;\n  --bc: 215 28% 17%;\n}\n\n[data-theme=wireframe] {\n  font-family: Chalkboard,comic sans ms,"sanssecondaryerif";\n  --pf: 0 0% 58%;\n  --sf: 0 0% 58%;\n  --af: 0 0% 58%;\n  --nf: 0 0% 74%;\n  --bc: 0 0% 20%;\n  --pc: 0 0% 14%;\n  --sc: 0 0% 14%;\n  --ac: 0 0% 14%;\n  --nc: 0 0% 18%;\n  --inc: 240 100% 90%;\n  --suc: 120 100% 85%;\n  --wac: 60 100% 10%;\n  --erc: 0 100% 90%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --p: 0 0% 72%;\n  --s: 0 0% 72%;\n  --a: 0 0% 72%;\n  --n: 0 0% 92%;\n  --b1: 0 0% 100%;\n  --b2: 0 0% 93%;\n  --b3: 0 0% 87%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25%;\n  --wa: 60 30% 50%;\n  --er: 0 100% 50%;\n  --rounded-box: 0.2rem;\n  --rounded-btn: 0.2rem;\n  --rounded-badge: 0.2rem;\n  --tab-radius: 0.2rem;\n}\n\n[data-theme=black] {\n  --p: 0 2% 20%;\n  --pf: 0 2% 16%;\n  --sf: 0 2% 16%;\n  --af: 0 2% 16%;\n  --bc: 0 0% 80%;\n  --pc: 0 5% 84%;\n  --sc: 0 5% 84%;\n  --ac: 0 5% 84%;\n  --nc: 0 3% 83%;\n  --inc: 240 100% 90%;\n  --suc: 120 100% 85%;\n  --wac: 60 100% 10%;\n  --erc: 0 100% 90%;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --s: 0 2% 20%;\n  --a: 0 2% 20%;\n  --b1: 0 0% 0%;\n  --b2: 0 0% 5%;\n  --b3: 0 2% 10%;\n  --n: 0 1% 15%;\n  --nf: 0 2% 20%;\n  --in: 240 100% 50%;\n  --su: 120 100% 25%;\n  --wa: 60 100% 50%;\n  --er: 0 100% 50%;\n  --rounded-box: 0;\n  --rounded-btn: 0;\n  --rounded-badge: 0;\n  --animation-btn: 0;\n  --animation-input: 0;\n  --btn-text-case: lowercase;\n  --btn-focus-scale: 1;\n  --tab-radius: 0;\n}\n\n[data-theme=luxury] {\n  --p: 0 0% 100%;\n  --pf: 0 0% 80%;\n  --sf: 218 54% 14%;\n  --af: 319 22% 21%;\n  --nf: 270 4% 7%;\n  --pc: 0 0% 20%;\n  --sc: 218 100% 84%;\n  --ac: 319 85% 85%;\n  --inc: 202 100% 14%;\n  --suc: 89 100% 10%;\n  --wac: 54 100% 13%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 218 54% 18%;\n  --a: 319 22% 26%;\n  --n: 270 4% 9%;\n  --nc: 37 67% 58%;\n  --b1: 240 10% 4%;\n  --b2: 270 4% 9%;\n  --b3: 270 2% 18%;\n  --bc: 37 67% 58%;\n  --in: 202 100% 70%;\n  --su: 89 62% 52%;\n  --wa: 54 69% 64%;\n  --er: 0 100% 72%;\n}\n\n[data-theme=dracula] {\n  --p: 326 100% 74%;\n  --pf: 326 100% 59%;\n  --sf: 265 89% 62%;\n  --af: 31 100% 57%;\n  --nf: 230 15% 24%;\n  --b2: 231 15% 17%;\n  --b3: 231 15% 15%;\n  --pc: 326 100% 15%;\n  --sc: 265 100% 16%;\n  --ac: 31 100% 14%;\n  --nc: 230 71% 86%;\n  --inc: 191 100% 15%;\n  --suc: 135 100% 13%;\n  --wac: 65 100% 15%;\n  --erc: 0 100% 93%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 265 89% 78%;\n  --a: 31 100% 71%;\n  --n: 230 15% 30%;\n  --b1: 231 15% 18%;\n  --bc: 60 30% 96%;\n  --in: 191 97% 77%;\n  --su: 135 94% 65%;\n  --wa: 65 92% 76%;\n  --er: 0 100% 67%;\n}\n\n[data-theme=cmyk] {\n  --p: 203 83% 60%;\n  --pf: 203 83% 48%;\n  --sf: 335 78% 48%;\n  --af: 56 100% 48%;\n  --nf: 0 0% 8%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --bc: 0 0% 20%;\n  --pc: 203 100% 12%;\n  --sc: 335 100% 92%;\n  --ac: 56 100% 12%;\n  --nc: 0 0% 82%;\n  --inc: 192 100% 10%;\n  --suc: 291 100% 88%;\n  --wac: 25 100% 11%;\n  --erc: 4 100% 91%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 335 78% 60%;\n  --a: 56 100% 60%;\n  --n: 0 0% 10%;\n  --b1: 0 0% 100%;\n  --in: 192 48% 52%;\n  --su: 291 48% 38%;\n  --wa: 25 85% 57%;\n  --er: 4 81% 56%;\n}\n\n[data-theme=autumn] {\n  --p: 344 96% 28%;\n  --pf: 344 96% 22%;\n  --sf: 0 63% 47%;\n  --af: 27 56% 50%;\n  --nf: 22 17% 35%;\n  --b2: 0 0% 85%;\n  --b3: 0 0% 77%;\n  --bc: 0 0% 19%;\n  --pc: 344 100% 86%;\n  --sc: 0 100% 92%;\n  --ac: 27 100% 13%;\n  --nc: 22 100% 89%;\n  --inc: 187 100% 10%;\n  --suc: 165 100% 9%;\n  --wac: 30 100% 10%;\n  --erc: 354 100% 90%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 0 63% 58%;\n  --a: 27 56% 63%;\n  --n: 22 17% 44%;\n  --b1: 0 0% 95%;\n  --in: 187 48% 50%;\n  --su: 165 34% 43%;\n  --wa: 30 84% 50%;\n  --er: 354 79% 49%;\n}\n\n[data-theme=business] {\n  --p: 210 64% 31%;\n  --pf: 210 64% 24%;\n  --sf: 200 13% 44%;\n  --af: 13 80% 48%;\n  --nf: 213 14% 13%;\n  --b2: 0 0% 11%;\n  --b3: 0 0% 10%;\n  --bc: 0 0% 83%;\n  --pc: 210 100% 86%;\n  --sc: 200 100% 11%;\n  --ac: 13 100% 12%;\n  --nc: 213 28% 83%;\n  --inc: 199 100% 88%;\n  --suc: 144 100% 11%;\n  --wac: 39 100% 12%;\n  --erc: 6 100% 89%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 200 13% 55%;\n  --a: 13 80% 60%;\n  --n: 213 14% 16%;\n  --b1: 0 0% 13%;\n  --in: 199 100% 42%;\n  --su: 144 31% 56%;\n  --wa: 39 64% 60%;\n  --er: 6 56% 43%;\n  --rounded-box: 0.25rem;\n  --rounded-btn: .125rem;\n  --rounded-badge: .125rem;\n}\n\n[data-theme=acid] {\n  --p: 303 100% 50%;\n  --pf: 303 100% 40%;\n  --sf: 27 100% 40%;\n  --af: 72 98% 40%;\n  --nf: 238 43% 14%;\n  --b2: 0 0% 88%;\n  --b3: 0 0% 79%;\n  --bc: 0 0% 20%;\n  --pc: 303 100% 90%;\n  --sc: 27 100% 10%;\n  --ac: 72 100% 10%;\n  --nc: 238 99% 83%;\n  --inc: 210 100% 12%;\n  --suc: 149 100% 12%;\n  --wac: 53 100% 11%;\n  --erc: 1 100% 89%;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 27 100% 50%;\n  --a: 72 98% 50%;\n  --n: 238 43% 17%;\n  --b1: 0 0% 98%;\n  --in: 210 92% 58%;\n  --su: 149 50% 58%;\n  --wa: 53 93% 57%;\n  --er: 1 100% 45%;\n  --rounded-box: 1.25rem;\n  --rounded-btn: 1rem;\n  --rounded-badge: 1rem;\n}\n\n[data-theme=lemonade] {\n  --p: 89 96% 31%;\n  --pf: 89 96% 24%;\n  --sf: 60 81% 44%;\n  --af: 63 80% 71%;\n  --nf: 238 43% 14%;\n  --b2: 0 0% 90%;\n  --b3: 0 0% 81%;\n  --bc: 0 0% 20%;\n  --pc: 89 100% 86%;\n  --sc: 60 100% 11%;\n  --ac: 63 100% 18%;\n  --nc: 238 99% 83%;\n  --inc: 192 79% 17%;\n  --suc: 74 100% 16%;\n  --wac: 50 100% 15%;\n  --erc: 1 100% 17%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 60 81% 55%;\n  --a: 63 80% 88%;\n  --n: 238 43% 17%;\n  --b1: 0 0% 100%;\n  --in: 192 39% 85%;\n  --su: 74 76% 79%;\n  --wa: 50 87% 75%;\n  --er: 1 70% 83%;\n}\n\n[data-theme=night] {\n  --p: 198 93% 60%;\n  --pf: 198 93% 48%;\n  --sf: 234 89% 59%;\n  --af: 329 86% 56%;\n  --b2: 222 47% 10%;\n  --b3: 222 47% 9%;\n  --bc: 222 66% 82%;\n  --pc: 198 100% 12%;\n  --sc: 234 100% 15%;\n  --ac: 329 100% 14%;\n  --nc: 217 76% 83%;\n  --inc: 198 100% 10%;\n  --suc: 172 100% 10%;\n  --wac: 41 100% 13%;\n  --erc: 351 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 234 89% 74%;\n  --a: 329 86% 70%;\n  --n: 217 33% 17%;\n  --nf: 217 30% 22%;\n  --b1: 222 47% 11%;\n  --in: 198 90% 48%;\n  --su: 172 66% 50%;\n  --wa: 41 88% 64%;\n  --er: 351 95% 71%;\n}\n\n[data-theme=coffee] {\n  --p: 30 67% 58%;\n  --pf: 30 67% 46%;\n  --sf: 182 25% 16%;\n  --af: 194 74% 20%;\n  --nf: 300 20% 5%;\n  --b2: 306 19% 10%;\n  --b3: 306 19% 9%;\n  --pc: 30 100% 12%;\n  --sc: 182 67% 84%;\n  --ac: 194 100% 85%;\n  --nc: 300 14% 81%;\n  --inc: 171 100% 13%;\n  --suc: 93 100% 12%;\n  --wac: 43 100% 14%;\n  --erc: 10 100% 15%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 182 25% 20%;\n  --a: 194 74% 25%;\n  --n: 300 20% 6%;\n  --b1: 306 19% 11%;\n  --bc: 37 8% 42%;\n  --in: 171 37% 67%;\n  --su: 93 25% 62%;\n  --wa: 43 100% 69%;\n  --er: 10 95% 75%;\n}\n\n[data-theme=winter] {\n  --p: 212 100% 51%;\n  --pf: 212 100% 41%;\n  --sf: 247 47% 35%;\n  --af: 310 49% 42%;\n  --nf: 217 92% 8%;\n  --pc: 212 100% 90%;\n  --sc: 247 100% 89%;\n  --ac: 310 100% 90%;\n  --nc: 217 100% 82%;\n  --inc: 192 100% 16%;\n  --suc: 182 100% 13%;\n  --wac: 32 100% 17%;\n  --erc: 0 100% 14%;\n  --rounded-box: 1rem;\n  --rounded-btn: 0.5rem;\n  --rounded-badge: 1.9rem;\n  --animation-btn: 0.25s;\n  --animation-input: .2s;\n  --btn-text-case: uppercase;\n  --btn-focus-scale: 0.95;\n  --border-btn: 1px;\n  --tab-border: 1px;\n  --tab-radius: 0.5rem;\n  --s: 247 47% 43%;\n  --a: 310 49% 52%;\n  --n: 217 92% 10%;\n  --b1: 0 0% 100%;\n  --b2: 217 100% 97%;\n  --b3: 219 44% 92%;\n  --bc: 214 30% 32%;\n  --in: 192 93% 78%;\n  --su: 182 47% 66%;\n  --wa: 32 62% 84%;\n  --er: 0 63% 72%;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-duration: 200ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  height: 1.25rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding-left: 0.563rem;\n  padding-right: 0.563rem;\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n  border-radius: 1.9rem;\n  border-radius: var(--rounded-badge, 1.9rem);\n}\r\n@keyframes spin {\n\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\r\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 1rem;\n  border-radius: var(--rounded-box, 1rem);\n}\r\n.card:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n.card-body {\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  padding: 2rem;\n  padding: var(--padding-card, 2rem);\n  gap: 0.5rem;\n}\r\n.card-body :where(p) {\n  flex-grow: 1;\n}\r\n.card-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\r\n.card figure {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\r\n.card.image-full {\n  display: grid;\n}\r\n.card.image-full:before {\n  position: relative;\n  content: "";\n  z-index: 10;\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--n) / var(--tw-bg-opacity));\n  opacity: 0.75;\n  border-radius: 1rem;\n  border-radius: var(--rounded-box, 1rem);\n}\r\n.card.image-full:before,\n    .card.image-full > * {\n  grid-column-start: 1;\n  grid-row-start: 1;\n}\r\n.card.image-full > figure img {\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.card.image-full > .card-body {\n  position: relative;\n  z-index: 20;\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.footer {\n  display: grid;\n  width: 100%;\n  grid-auto-flow: row;\n  align-items: start;\n  justify-items: start;\n  place-items: start;\n  grid-row-gap: 2.5rem;\n  row-gap: 2.5rem;\n  grid-column-gap: 1rem;\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.footer > * {\n  display: grid;\n  align-items: start;\n  justify-items: start;\n  place-items: start;\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n}\r\n@media (min-width: 48rem) {\n\n  .footer {\n    grid-auto-flow: column;\n  }\n\n  .footer-center {\n    grid-auto-flow: row dense;\n  }\n}\r\n.badge-outline {\n  border-color: currentColor;\n  --tw-border-opacity: 0.5;\n  background-color: transparent;\n  color: currentColor;\n}\r\n.badge-outline.badge-primary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-secondary {\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-accent {\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-info {\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-success {\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-warning {\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}\r\n.badge-outline.badge-error {\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}\r\n.btn-outline .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--s) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--s) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--a) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--a) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}\r\n.btn-outline .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--n) / var(--tw-border-opacity));\n  border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));\n  background-color: transparent;\n}\r\n.btn-outline.btn-primary .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--p) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--s) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--a) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-info .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--in) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--in) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-success .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--su) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--su) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-warning .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--wa) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--wa) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-error .badge-outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--er) / var(--tw-border-opacity));\n  background-color: transparent;\n  --tw-text-opacity: 1;\n  color: hsl(var(--er) / var(--tw-text-opacity));\n}\r\n.btn-outline:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b1) / var(--tw-border-opacity));\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--b1) / var(--tw-bg-opacity));\n  background-color: hsl(var(--b2, var(--b1)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--bc) / var(--tw-text-opacity));\n}\r\n.btn-outline:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b1) / var(--tw-border-opacity));\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--nc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--pc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--p) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-primary:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--pc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--p) / var(--tw-bg-opacity));\n  background-color: hsl(var(--pf, var(--p)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--pc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--sc) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--s) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-secondary:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--sc) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--s) / var(--tw-bg-opacity));\n  background-color: hsl(var(--sf, var(--s)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--sc) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent:hover .badge {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--ac) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--ac) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--a) / var(--tw-text-opacity));\n}\r\n.btn-outline.btn-accent:hover .badge.outline {\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--ac) / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: hsl(var(--a) / var(--tw-bg-opacity));\n  background-color: hsl(var(--af, var(--a)) / var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: hsl(var(--ac) / var(--tw-text-opacity));\n}\r\n@keyframes button-pop {\n\n  0% {\n    transform: scale(0.95);\n    transform: scale(var(--btn-focus-scale, 0.95));\n  }\n\n  40% {\n    transform: scale(1.02);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\r\n.card.focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\r\n.card:focus-visible {\n  outline: 2px solid currentColor;\n  outline-offset: 2px;\n}\r\n.card.bordered {\n  border-width: 1px;\n  --tw-border-opacity: 1;\n  border-color: hsl(var(--b1) / var(--tw-border-opacity));\n  border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));\n}\r\n.card.compact .card-body {\n  padding: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.card-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n  font-weight: 600;\n}\r\n@keyframes checkmark {\n\n  0% {\n    background-position-y: 5px;\n  }\n\n  50% {\n    background-position-y: -2px;\n  }\n\n  100% {\n    background-position-y: 0;\n  }\n}\r\n@keyframes progress-loading {\n\n  50% {\n    left: 107%;\n  }\n}\r\n@keyframes radiomark {\n\n  0% {\n    box-shadow: 0 0 0 12px hsl(var(--b1)) inset, 0 0 0 12px hsl(var(--b1)) inset;\n  }\n\n  50% {\n    box-shadow: 0 0 0 3px hsl(var(--b1)) inset, 0 0 0 3px hsl(var(--b1)) inset;\n  }\n\n  100% {\n    box-shadow: 0 0 0 4px hsl(var(--b1)) inset, 0 0 0 4px hsl(var(--b1)) inset;\n  }\n}\r\n@keyframes rating-pop {\n\n  0% {\n    transform: translateY(-0.125em);\n  }\n\n  40% {\n    transform: translateY(-0.125em);\n  }\n\n  100% {\n    transform: translateY(0);\n  }\n}\r\n@keyframes toast-pop {\n\n  0% {\n    transform: scale(0.9);\n    opacity: 0;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\r\n.card-compact .card-body {\n  padding: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.card-compact .card-title {\n  margin-bottom: 0.25rem;\n}\r\n.card-normal .card-body {\n  padding: 2rem;\n  padding: var(--padding-card, 2rem);\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.card-normal .card-title {\n  margin-bottom: 0.75rem;\n}\r\n.static {\n  position: static;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.top-24 {\n  top: 6rem;\n}\r\n.order-2 {\n  order: 2;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mx-6 {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\r\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\r\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\r\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\r\n.mb-32 {\n  margin-bottom: 8rem;\n}\r\n.mt-20 {\n  margin-top: 5rem;\n}\r\n.mt-48 {\n  margin-top: 12rem;\n}\r\n.mt-6 {\n  margin-top: 1.5rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mb-8 {\n  margin-bottom: 2rem;\n}\r\n.mt-10 {\n  margin-top: 2.5rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\r\n.mt-16 {\n  margin-top: 4rem;\n}\r\n.mr-4 {\n  margin-right: 1rem;\n}\r\n.mr-5 {\n  margin-right: 1.25rem;\n}\r\n.mt-32 {\n  margin-top: 8rem;\n}\r\n.mb-16 {\n  margin-bottom: 4rem;\n}\r\n.mt-12 {\n  margin-top: 3rem;\n}\r\n.mt-8 {\n  margin-top: 2rem;\n}\r\n.mb-4 {\n  margin-bottom: 1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mr-3 {\n  margin-right: 0.75rem;\n}\r\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mr-2 {\n  margin-right: 0.5rem;\n}\r\n.mr-12 {\n  margin-right: 3rem;\n}\r\n.mr-8 {\n  margin-right: 2rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.grid {\n  display: grid;\n}\r\n.hidden {\n  display: none;\n}\r\n.h-\\[0\\.09rem\\] {\n  height: 0.09rem;\n}\r\n.h-24 {\n  height: 6rem;\n}\r\n.h-9 {\n  height: 2.25rem;\n}\r\n.h-10 {\n  height: 2.5rem;\n}\r\n.h-\\[300px\\] {\n  height: 300px;\n}\r\n.h-\\[50px\\] {\n  height: 50px;\n}\r\n.h-48 {\n  height: 12rem;\n}\r\n.h-40 {\n  height: 10rem;\n}\r\n.h-14 {\n  height: 3.5rem;\n}\r\n.h-16 {\n  height: 4rem;\n}\r\n.h-1 {\n  height: 0.25rem;\n}\r\n.h-7 {\n  height: 1.75rem;\n}\r\n.h-full {\n  height: 100%;\n}\r\n.h-\\[100px\\] {\n  height: 100px;\n}\r\n.max-h-\\[300px\\] {\n  max-height: 300px;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.w-11\\/12 {\n  width: 91.666667%;\n}\r\n.w-10 {\n  width: 2.5rem;\n}\r\n.w-48 {\n  width: 12rem;\n}\r\n.w-96 {\n  width: 24rem;\n}\r\n.w-1 {\n  width: 0.25rem;\n}\r\n.w-7 {\n  width: 1.75rem;\n}\r\n.w-\\[120px\\] {\n  width: 120px;\n}\r\n.w-\\[80\\%\\] {\n  width: 80%;\n}\r\n.max-w-\\[540px\\] {\n  max-width: 540px;\n}\r\n.max-w-full {\n  max-width: 100%;\n}\r\n.cursor-pointer {\n  cursor: pointer;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.flex-wrap {\n  flex-wrap: wrap;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.justify-end {\n  justify-content: flex-end;\n}\r\n.justify-center {\n  justify-content: center;\n}\r\n.justify-between {\n  justify-content: space-between;\n}\r\n.gap-10 {\n  gap: 2.5rem;\n}\r\n.gap-6 {\n  gap: 1.5rem;\n}\r\n.gap-4 {\n  gap: 1rem;\n}\r\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\r\n.gap-y-8 {\n  row-gap: 2rem;\n}\r\n.overflow-hidden {\n  overflow: hidden;\n}\r\n.overflow-visible {\n  overflow: visible;\n}\r\n.overflow-x-auto {\n  overflow-x: auto;\n}\r\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\r\n.text-ellipsis {\n  text-overflow: ellipsis;\n}\r\n.whitespace-nowrap {\n  white-space: nowrap;\n}\r\n.rounded-md {\n  border-radius: 0.375rem;\n}\r\n.rounded-full {\n  border-radius: 9999px;\n}\r\n.border-2 {\n  border-width: 2px;\n}\r\n.border-\\[\\#06283D\\] {\n  --tw-border-opacity: 1;\n  border-color: rgba(6, 40, 61, var(--tw-border-opacity));\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#0d3249\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(13, 50, 73, var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#F7F7F7\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(247, 247, 247, var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#DFF6FF\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(223, 246, 255, var(--tw-bg-opacity));\n}\r\n.bg-\\[\\#06283D\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(6, 40, 61, var(--tw-bg-opacity));\n}\r\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\r\n.object-none {\n  -o-object-fit: none;\n     object-fit: none;\n}\r\n.p-16 {\n  padding: 4rem;\n}\r\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\r\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\r\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\r\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.font-display {\n  font-family: "Plus Jakarta Sans", sans-serif;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\r\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\r\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\r\n.font-bold {\n  font-weight: 700;\n}\r\n.font-medium {\n  font-weight: 500;\n}\r\n.font-semibold {\n  font-weight: 600;\n}\r\n.font-normal {\n  font-weight: 400;\n}\r\n.leading-10 {\n  line-height: 2.5rem;\n}\r\n.leading-9 {\n  line-height: 2.25rem;\n}\r\n.leading-7 {\n  line-height: 1.75rem;\n}\r\n.text-\\[\\#06283D\\] {\n  --tw-text-opacity: 1;\n  color: rgba(6, 40, 61, var(--tw-text-opacity));\n}\r\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\r\n.text-\\[\\#989898\\] {\n  --tw-text-opacity: 1;\n  color: rgba(152, 152, 152, var(--tw-text-opacity));\n}\r\n.underline {\n  text-decoration-line: underline;\n}\r\n.decoration-\\[\\#06283D\\] {\n  text-decoration-color: #06283D;\n}\r\n.underline-offset-8 {\n  text-underline-offset: 8px;\n}\r\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.line-clamp-2 {\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\r\n\r\nnav ul::-webkit-scrollbar {\r\n\tdisplay: none;\r\n}\r\n\r\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\r\n\r\n.after\\:-top-\\[1\\.2px\\]::after {\n  content: var(--tw-content);\n  top: -1.2px;\n}\r\n\r\n.after\\:left-0::after {\n  content: var(--tw-content);\n  left: 0px;\n}\r\n\r\n.after\\:right-0::after {\n  content: var(--tw-content);\n  right: 0px;\n}\r\n\r\n.after\\:block::after {\n  content: var(--tw-content);\n  display: block;\n}\r\n\r\n.after\\:h-\\[0\\.12rem\\]::after {\n  content: var(--tw-content);\n  height: 0.12rem;\n}\r\n\r\n.after\\:w-\\[50\\%\\]::after {\n  content: var(--tw-content);\n  width: 50%;\n}\r\n\r\n.after\\:bg-\\[\\#06283D\\]::after {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgba(6, 40, 61, var(--tw-bg-opacity));\n}\r\n\r\n.after\\:content-\\[\\\'\\\'\\]::after {\n  --tw-content: \'\';\n  content: var(--tw-content);\n}\r\n\r\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\r\n\r\n.hover\\:shadow-sm:hover {\n  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}\r\n\r\n@media (min-width: 640px) {\n\n  .sm\\:static {\n    position: static;\n  }\n\n  .sm\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n\n  .sm\\:mr-2 {\n    margin-right: 0.5rem;\n  }\n\n  .sm\\:block {\n    display: block;\n  }\n\n  .sm\\:w-auto {\n    width: auto;\n  }\n\n  .sm\\:max-w-\\[460px\\] {\n    max-width: 460px;\n  }\n\n  .sm\\:max-w-\\[100\\%\\] {\n    max-width: 100%;\n  }\n\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:gap-x-4 {\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n  }\n\n  .sm\\:gap-y-24 {\n    row-gap: 6rem;\n  }\n\n  .sm\\:overflow-visible {\n    overflow: visible;\n  }\n\n  .sm\\:whitespace-normal {\n    white-space: normal;\n  }\n\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .sm\\:after\\:w-\\[20\\%\\]::after {\n    content: var(--tw-content);\n    width: 20%;\n  }\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:order-1 {\n    order: 1;\n  }\n\n  .md\\:order-2 {\n    order: 2;\n  }\n\n  .md\\:mx-\\[50px\\] {\n    margin-left: 50px;\n    margin-right: 50px;\n  }\n\n  .md\\:mb-52 {\n    margin-bottom: 13rem;\n  }\n\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:h-auto {\n    height: auto;\n  }\n\n  .md\\:h-\\[150px\\] {\n    height: 150px;\n  }\n\n  .md\\:w-\\[150px\\] {\n    width: 150px;\n  }\n\n  .md\\:max-w-\\[65\\%\\] {\n    max-width: 65%;\n  }\n\n  .md\\:max-w-\\[35\\%\\] {\n    max-width: 35%;\n  }\n\n  .md\\:max-w-\\[34\\%\\] {\n    max-width: 34%;\n  }\n\n  .md\\:max-w-\\[30\\%\\] {\n    max-width: 30%;\n  }\n\n  .md\\:max-w-\\[100\\%\\] {\n    max-width: 100%;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:gap-y-4 {\n    row-gap: 1rem;\n  }\n\n  .md\\:gap-y-10 {\n    row-gap: 2.5rem;\n  }\n\n  .md\\:px-\\[50px\\] {\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n\n  .md\\:px-20 {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n}\r\n\r\n@media (min-width: 1536px) {\n\n  .\\32xl\\:container {\n    width: 100%;\n  }\n\n  @media (min-width: 640px) {\n\n    .\\32xl\\:container {\n      max-width: 640px;\n    }\n  }\n\n  @media (min-width: 768px) {\n\n    .\\32xl\\:container {\n      max-width: 768px;\n    }\n  }\n\n  @media (min-width: 1024px) {\n\n    .\\32xl\\:container {\n      max-width: 1024px;\n    }\n  }\n\n  @media (min-width: 1280px) {\n\n    .\\32xl\\:container {\n      max-width: 1280px;\n    }\n  }\n\n  @media (min-width: 1536px) {\n\n    .\\32xl\\:container {\n      max-width: 1536px;\n    }\n  }\n}\r\n',
					'',
				]);
				const c = i;
			},
			645: (n) => {
				n.exports = function (n) {
					var t = [];
					return (
						(t.toString = function () {
							return this.map(function (t) {
								var e = '',
									r = void 0 !== t[5];
								return (
									t[4] && (e += '@supports ('.concat(t[4], ') {')),
									t[2] && (e += '@media '.concat(t[2], ' {')),
									r && (e += '@layer'.concat(t[5].length > 0 ? ' '.concat(t[5]) : '', ' {')),
									(e += n(t)),
									r && (e += '}'),
									t[2] && (e += '}'),
									t[4] && (e += '}'),
									e
								);
							}).join('');
						}),
						(t.i = function (n, e, r, o, a) {
							'string' == typeof n && (n = [[null, n, void 0]]);
							var i = {};
							if (r)
								for (var c = 0; c < this.length; c++) {
									var s = this[c][0];
									null != s && (i[s] = !0);
								}
							for (var l = 0; l < n.length; l++) {
								var u = [].concat(n[l]);
								(r && i[u[0]]) ||
									(void 0 !== a && (void 0 === u[5] || (u[1] = '@layer'.concat(u[5].length > 0 ? ' '.concat(u[5]) : '', ' {').concat(u[1], '}')), (u[5] = a)),
									e && (u[2] ? ((u[1] = '@media '.concat(u[2], ' {').concat(u[1], '}')), (u[2] = e)) : (u[2] = e)),
									o && (u[4] ? ((u[1] = '@supports ('.concat(u[4], ') {').concat(u[1], '}')), (u[4] = o)) : (u[4] = ''.concat(o))),
									t.push(u));
							}
						}),
						t
					);
				};
			},
			81: (n) => {
				n.exports = function (n) {
					return n[1];
				};
			},
			379: (n) => {
				var t = [];
				function e(n) {
					for (var e = -1, r = 0; r < t.length; r++)
						if (t[r].identifier === n) {
							e = r;
							break;
						}
					return e;
				}
				function r(n, r) {
					for (var a = {}, i = [], c = 0; c < n.length; c++) {
						var s = n[c],
							l = r.base ? s[0] + r.base : s[0],
							u = a[l] || 0,
							d = ''.concat(l, ' ').concat(u);
						a[l] = u + 1;
						var f = e(d),
							p = { css: s[1], media: s[2], sourceMap: s[3], supports: s[4], layer: s[5] };
						if (-1 !== f) t[f].references++, t[f].updater(p);
						else {
							var b = o(p, r);
							(r.byIndex = c), t.splice(c, 0, { identifier: d, updater: b, references: 1 });
						}
						i.push(d);
					}
					return i;
				}
				function o(n, t) {
					var e = t.domAPI(t);
					return (
						e.update(n),
						function (t) {
							if (t) {
								if (t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap && t.supports === n.supports && t.layer === n.layer) return;
								e.update((n = t));
							} else e.remove();
						}
					);
				}
				n.exports = function (n, o) {
					var a = r((n = n || []), (o = o || {}));
					return function (n) {
						n = n || [];
						for (var i = 0; i < a.length; i++) {
							var c = e(a[i]);
							t[c].references--;
						}
						for (var s = r(n, o), l = 0; l < a.length; l++) {
							var u = e(a[l]);
							0 === t[u].references && (t[u].updater(), t.splice(u, 1));
						}
						a = s;
					};
				};
			},
			569: (n) => {
				var t = {};
				n.exports = function (n, e) {
					var r = (function (n) {
						if (void 0 === t[n]) {
							var e = document.querySelector(n);
							if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement)
								try {
									e = e.contentDocument.head;
								} catch (n) {
									e = null;
								}
							t[n] = e;
						}
						return t[n];
					})(n);
					if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					r.appendChild(e);
				};
			},
			216: (n) => {
				n.exports = function (n) {
					var t = document.createElement('style');
					return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
				};
			},
			565: (n, t, e) => {
				n.exports = function (n) {
					var t = e.nc;
					t && n.setAttribute('nonce', t);
				};
			},
			795: (n) => {
				n.exports = function (n) {
					var t = n.insertStyleElement(n);
					return {
						update: function (e) {
							!(function (n, t, e) {
								var r = '';
								e.supports && (r += '@supports ('.concat(e.supports, ') {')), e.media && (r += '@media '.concat(e.media, ' {'));
								var o = void 0 !== e.layer;
								o && (r += '@layer'.concat(e.layer.length > 0 ? ' '.concat(e.layer) : '', ' {')), (r += e.css), o && (r += '}'), e.media && (r += '}'), e.supports && (r += '}');
								var a = e.sourceMap;
								a && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), ' */')), t.styleTagTransform(r, n, t.options);
							})(t, n, e);
						},
						remove: function () {
							!(function (n) {
								if (null === n.parentNode) return !1;
								n.parentNode.removeChild(n);
							})(t);
						},
					};
				};
			},
			589: (n) => {
				n.exports = function (n, t) {
					if (t.styleSheet) t.styleSheet.cssText = n;
					else {
						for (; t.firstChild; ) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(n));
					}
				};
			},
		},
		t = {};
	function e(r) {
		var o = t[r];
		if (void 0 !== o) return o.exports;
		var a = (t[r] = { id: r, exports: {} });
		return n[r](a, a.exports, e), a.exports;
	}
	(e.n = (n) => {
		var t = n && n.__esModule ? () => n.default : () => n;
		return e.d(t, { a: t }), t;
	}),
		(e.d = (n, t) => {
			for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
		}),
		(e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
		(e.nc = void 0),
		(() => {
			const n = function (n) {
				var t = new Date(n),
					e = t.getFullYear(),
					r = t.getMonth(),
					o = t.getDate();
				return ''.concat(o, ' - ').concat(r, ' - ').concat(e);
			};
			function t(n) {
				return (
					(t =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					t(n)
				);
			}
			function r() {
				r = function () {
					return n;
				};
				var n = {},
					e = Object.prototype,
					o = e.hasOwnProperty,
					a = 'function' == typeof Symbol ? Symbol : {},
					i = a.iterator || '@@iterator',
					c = a.asyncIterator || '@@asyncIterator',
					s = a.toStringTag || '@@toStringTag';
				function l(n, t, e) {
					return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
				}
				try {
					l({}, '');
				} catch (n) {
					l = function (n, t, e) {
						return (n[t] = e);
					};
				}
				function u(n, t, e, r) {
					var o = t && t.prototype instanceof p ? t : p,
						a = Object.create(o.prototype),
						i = new E(r || []);
					return (
						(a._invoke = (function (n, t, e) {
							var r = 'suspendedStart';
							return function (o, a) {
								if ('executing' === r) throw new Error('Generator is already running');
								if ('completed' === r) {
									if ('throw' === o) throw a;
									return { value: void 0, done: !0 };
								}
								for (e.method = o, e.arg = a; ; ) {
									var i = e.delegate;
									if (i) {
										var c = k(i, e);
										if (c) {
											if (c === f) continue;
											return c;
										}
									}
									if ('next' === e.method) e.sent = e._sent = e.arg;
									else if ('throw' === e.method) {
										if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
										e.dispatchException(e.arg);
									} else 'return' === e.method && e.abrupt('return', e.arg);
									r = 'executing';
									var s = d(n, t, e);
									if ('normal' === s.type) {
										if (((r = e.done ? 'completed' : 'suspendedYield'), s.arg === f)) continue;
										return { value: s.arg, done: e.done };
									}
									'throw' === s.type && ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
								}
							};
						})(n, e, i)),
						a
					);
				}
				function d(n, t, e) {
					try {
						return { type: 'normal', arg: n.call(t, e) };
					} catch (n) {
						return { type: 'throw', arg: n };
					}
				}
				n.wrap = u;
				var f = {};
				function p() {}
				function b() {}
				function h() {}
				var m = {};
				l(m, i, function () {
					return this;
				});
				var y = Object.getPrototypeOf,
					v = y && y(y(S([])));
				v && v !== e && o.call(v, i) && (m = v);
				var g = (h.prototype = p.prototype = Object.create(m));
				function w(n) {
					['next', 'throw', 'return'].forEach(function (t) {
						l(n, t, function (n) {
							return this._invoke(t, n);
						});
					});
				}
				function x(n, e) {
					function r(a, i, c, s) {
						var l = d(n[a], n, i);
						if ('throw' !== l.type) {
							var u = l.arg,
								f = u.value;
							return f && 'object' == t(f) && o.call(f, '__await')
								? e.resolve(f.__await).then(
										function (n) {
											r('next', n, c, s);
										},
										function (n) {
											r('throw', n, c, s);
										},
								  )
								: e.resolve(f).then(
										function (n) {
											(u.value = n), c(u);
										},
										function (n) {
											return r('throw', n, c, s);
										},
								  );
						}
						s(l.arg);
					}
					var a;
					this._invoke = function (n, t) {
						function o() {
							return new e(function (e, o) {
								r(n, t, e, o);
							});
						}
						return (a = a ? a.then(o, o) : o());
					};
				}
				function k(n, t) {
					var e = n.iterator[t.method];
					if (void 0 === e) {
						if (((t.delegate = null), 'throw' === t.method)) {
							if (n.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(n, t), 'throw' === t.method)) return f;
							(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
						}
						return f;
					}
					var r = d(e, n.iterator, t.arg);
					if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), f;
					var o = r.arg;
					return o
						? o.done
							? ((t[n.resultName] = o.value), (t.next = n.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), f)
							: o
						: ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), f);
				}
				function L(n) {
					var t = { tryLoc: n[0] };
					1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
				}
				function j(n) {
					var t = n.completion || {};
					(t.type = 'normal'), delete t.arg, (n.completion = t);
				}
				function E(n) {
					(this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(L, this), this.reset(!0);
				}
				function S(n) {
					if (n) {
						var t = n[i];
						if (t) return t.call(n);
						if ('function' == typeof n.next) return n;
						if (!isNaN(n.length)) {
							var e = -1,
								r = function t() {
									for (; ++e < n.length; ) if (o.call(n, e)) return (t.value = n[e]), (t.done = !1), t;
									return (t.value = void 0), (t.done = !0), t;
								};
							return (r.next = r);
						}
					}
					return { next: O };
				}
				function O() {
					return { value: void 0, done: !0 };
				}
				return (
					(b.prototype = h),
					l(g, 'constructor', h),
					l(h, 'constructor', b),
					(b.displayName = l(h, s, 'GeneratorFunction')),
					(n.isGeneratorFunction = function (n) {
						var t = 'function' == typeof n && n.constructor;
						return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name));
					}),
					(n.mark = function (n) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(n, h) : ((n.__proto__ = h), l(n, s, 'GeneratorFunction')), (n.prototype = Object.create(g)), n;
					}),
					(n.awrap = function (n) {
						return { __await: n };
					}),
					w(x.prototype),
					l(x.prototype, c, function () {
						return this;
					}),
					(n.AsyncIterator = x),
					(n.async = function (t, e, r, o, a) {
						void 0 === a && (a = Promise);
						var i = new x(u(t, e, r, o), a);
						return n.isGeneratorFunction(e)
							? i
							: i.next().then(function (n) {
									return n.done ? n.value : i.next();
							  });
					}),
					w(g),
					l(g, s, 'Generator'),
					l(g, i, function () {
						return this;
					}),
					l(g, 'toString', function () {
						return '[object Generator]';
					}),
					(n.keys = function (n) {
						var t = [];
						for (var e in n) t.push(e);
						return (
							t.reverse(),
							function e() {
								for (; t.length; ) {
									var r = t.pop();
									if (r in n) return (e.value = r), (e.done = !1), e;
								}
								return (e.done = !0), e;
							}
						);
					}),
					(n.values = S),
					(E.prototype = {
						constructor: E,
						reset: function (n) {
							if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = void 0), this.tryEntries.forEach(j), !n))
								for (var t in this) 't' === t.charAt(0) && o.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
						},
						stop: function () {
							this.done = !0;
							var n = this.tryEntries[0].completion;
							if ('throw' === n.type) throw n.arg;
							return this.rval;
						},
						dispatchException: function (n) {
							if (this.done) throw n;
							var t = this;
							function e(e, r) {
								return (i.type = 'throw'), (i.arg = n), (t.next = e), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
							}
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var a = this.tryEntries[r],
									i = a.completion;
								if ('root' === a.tryLoc) return e('end');
								if (a.tryLoc <= this.prev) {
									var c = o.call(a, 'catchLoc'),
										s = o.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return e(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return e(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return e(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return e(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (n, t) {
							for (var e = this.tryEntries.length - 1; e >= 0; --e) {
								var r = this.tryEntries[e];
								if (r.tryLoc <= this.prev && o.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
									var a = r;
									break;
								}
							}
							a && ('break' === n || 'continue' === n) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return (i.type = n), (i.arg = t), a ? ((this.method = 'next'), (this.next = a.finallyLoc), f) : this.complete(i);
						},
						complete: function (n, t) {
							if ('throw' === n.type) throw n.arg;
							return (
								'break' === n.type || 'continue' === n.type
									? (this.next = n.arg)
									: 'return' === n.type
									? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end'))
									: 'normal' === n.type && t && (this.next = t),
								f
							);
						},
						finish: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), j(e), f;
							}
						},
						catch: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.tryLoc === n) {
									var r = e.completion;
									if ('throw' === r.type) {
										var o = r.arg;
										j(e);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (n, t, e) {
							return (this.delegate = { iterator: S(n), resultName: t, nextLoc: e }), 'next' === this.method && (this.arg = void 0), f;
						},
					}),
					n
				);
			}
			function o(n, t, e, r, o, a, i) {
				try {
					var c = n[a](i),
						s = c.value;
				} catch (n) {
					return void e(n);
				}
				c.done ? t(s) : Promise.resolve(s).then(r, o);
			}
			function a(n) {
				return function () {
					var t = this,
						e = arguments;
					return new Promise(function (r, a) {
						var i = n.apply(t, e);
						function c(n) {
							o(i, r, a, c, s, 'next', n);
						}
						function s(n) {
							o(i, r, a, c, s, 'throw', n);
						}
						c(void 0);
					});
				};
			}
			const i = (function () {
				var t = a(
					r().mark(function t(e) {
						var o;
						return r().wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										(o = (function () {
											var n = a(
												r().mark(function n(t, o) {
													var a, i;
													return r().wrap(function (n) {
														for (;;)
															switch ((n.prev = n.next)) {
																case 0:
																	return (
																		(n.next = 2),
																		fetch(''.concat(e, 'q=').concat(t, '&sortBy=publishedAt&pageSize=').concat(o, '&language=en'), { headers: { 'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81' } })
																	);
																case 2:
																	return (a = n.sent), (n.next = 5), a.json();
																case 5:
																	return (i = n.sent), n.abrupt('return', i.articles);
																case 7:
																case 'end':
																	return n.stop();
															}
													}, n);
												}),
											);
											return function (t, e) {
												return n.apply(this, arguments);
											};
										})()),
											(window.onload = a(
												r().mark(function t() {
													var e, a, i, c, s, l;
													return r().wrap(function (t) {
														for (;;)
															switch ((t.prev = t.next)) {
																case 0:
																	return (e = document.querySelector('.feature-1')), (t.next = 3), o('health', 1);
																case 3:
																	return (
																		(a = t.sent),
																		(e.innerHTML = '\n\t\t   <img src="'
																			.concat(a[0].urlToImage, '" alt="health-image" class="w-full h-40 object-none  image-source ">\n\t\t        <div class="px-1">\n\t\t          <a href="')
																			.concat(
																				a[0].url,
																				'" target="_blank" class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">\n\t\t            ',
																			)
																			.concat(
																				a[0].title,
																				'\n\t\t          </a>\n\t\t          <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">\n\t\t            ',
																			)
																			.concat(
																				a[0].description,
																				'\n\t\t          </p>\n\t\t          <div class="flex justify-between items-center mt-5 text-sm">\n\t\t            <div>\n\t\t              <h4 class="author font-semibold">',
																			)
																			.concat(a[0].author, '</h4>\n\t\t              <div class="flex items-center mt-1">\n\t\t                <p class="date">')
																			.concat(n(a[0].publishedAt), '</p>\n\t\t                <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>\n\t\t                <p class="source">')
																			.concat(
																				a[0].source.name,
																				'</p>\n\t\t              </div>\n\t\t            </div>\n\t\t            <button class="w-7 h-7">\n\t\t              <img src="./img/save.svg" alt="save" class="w-full h-full">\n\t\t            </button>\n\t\t          </div>\n\t\t        </div>\n\t\t',
																			)),
																		(i = document.querySelector('.feature-2')),
																		(t.next = 8),
																		o('technology', 2)
																	);
																case 8:
																	return (
																		(c = t.sent),
																		Array.from(c).forEach(function (t) {
																			i.innerHTML += '\n\t\t   <article class="feature-2 h-[100px] md:h-[150px] flex">\n\t\t          <img src="'
																				.concat(
																					t.urlToImage,
																					'" alt="tech-images"\n\t\t              class="mr-3 w-[120px] h-full md:w-[150px] object-cover">\n\t\t          <div class="flex flex-col overflow-hidden">\n\t\t            <a href="',
																				)
																				.concat(t.url, '"\n\t\t              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">\n\t\t             ')
																				.concat(t.title, '\n\t\t            </a>\n\n\t\t            <p class="hidden md:block description font-normal text-sm truncate my-3 mb-5">\n\t\t             ')
																				.concat(
																					t.description,
																					'\n\t\t            </p>\n\n\t\t            <div class="flex justify-between mt-4 md:mt-0">\n\t\t              <div>\n\t\t                <h4 class="author font-semibold text-sm">',
																				)
																				.concat(t.source.name, '</h4>\n\t\t                <p class="date">')
																				.concat(n(t.publishedAt), '</p>\n\t\t              </div>\n\t\t            </div>\n\n\t\t          </div>\n\t\t        </article>\n\t\t');
																		}),
																		(s = document.querySelector('.feature-3')),
																		(t.next = 13),
																		o('art', 3)
																	);
																case 13:
																	(l = t.sent),
																		Array.from(l).forEach(function (t) {
																			s.innerHTML += '\n\t\t     <article class="feature-3 h-[100px] flex">\n\t\t          <img src="'
																				.concat(t.urlToImage, '" alt="art-image" class="w-[120px] h-full object-cover mr-2">\n\t\t          <div class="flex flex-col">\n\t\t            <a href="')
																				.concat(t.url, '"\n\t\t              class="hover:underline title font-semibold text-sm h-10 overflow-hidden text-ellipsis line-clamp-2">\n\t\t              ')
																				.concat(
																					t.title,
																					'\n\t\t            </a>\n\t\t            <div class="flex justify-between mt-4">\n\t\t              <div>\n\t\t                <h4 class="author font-semibold text-sm">',
																				)
																				.concat(t.source.name, '</h4>\n\t\t                <p class="date">')
																				.concat(n(t.publishedAt), '</p>\n\t\t              </div>\n\t\t            </div>\n\t\t          </div>\n\t\t        </article>\n\t\t  ');
																		});
																case 15:
																case 'end':
																	return t.stop();
															}
													}, t);
												}),
											));
									case 2:
									case 'end':
										return t.stop();
								}
						}, t);
					}),
				);
				return function (n) {
					return t.apply(this, arguments);
				};
			})();
			function c(n) {
				return (
					(c =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					c(n)
				);
			}
			function s() {
				s = function () {
					return n;
				};
				var n = {},
					t = Object.prototype,
					e = t.hasOwnProperty,
					r = 'function' == typeof Symbol ? Symbol : {},
					o = r.iterator || '@@iterator',
					a = r.asyncIterator || '@@asyncIterator',
					i = r.toStringTag || '@@toStringTag';
				function l(n, t, e) {
					return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
				}
				try {
					l({}, '');
				} catch (n) {
					l = function (n, t, e) {
						return (n[t] = e);
					};
				}
				function u(n, t, e, r) {
					var o = t && t.prototype instanceof p ? t : p,
						a = Object.create(o.prototype),
						i = new E(r || []);
					return (
						(a._invoke = (function (n, t, e) {
							var r = 'suspendedStart';
							return function (o, a) {
								if ('executing' === r) throw new Error('Generator is already running');
								if ('completed' === r) {
									if ('throw' === o) throw a;
									return { value: void 0, done: !0 };
								}
								for (e.method = o, e.arg = a; ; ) {
									var i = e.delegate;
									if (i) {
										var c = k(i, e);
										if (c) {
											if (c === f) continue;
											return c;
										}
									}
									if ('next' === e.method) e.sent = e._sent = e.arg;
									else if ('throw' === e.method) {
										if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
										e.dispatchException(e.arg);
									} else 'return' === e.method && e.abrupt('return', e.arg);
									r = 'executing';
									var s = d(n, t, e);
									if ('normal' === s.type) {
										if (((r = e.done ? 'completed' : 'suspendedYield'), s.arg === f)) continue;
										return { value: s.arg, done: e.done };
									}
									'throw' === s.type && ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
								}
							};
						})(n, e, i)),
						a
					);
				}
				function d(n, t, e) {
					try {
						return { type: 'normal', arg: n.call(t, e) };
					} catch (n) {
						return { type: 'throw', arg: n };
					}
				}
				n.wrap = u;
				var f = {};
				function p() {}
				function b() {}
				function h() {}
				var m = {};
				l(m, o, function () {
					return this;
				});
				var y = Object.getPrototypeOf,
					v = y && y(y(S([])));
				v && v !== t && e.call(v, o) && (m = v);
				var g = (h.prototype = p.prototype = Object.create(m));
				function w(n) {
					['next', 'throw', 'return'].forEach(function (t) {
						l(n, t, function (n) {
							return this._invoke(t, n);
						});
					});
				}
				function x(n, t) {
					function r(o, a, i, s) {
						var l = d(n[o], n, a);
						if ('throw' !== l.type) {
							var u = l.arg,
								f = u.value;
							return f && 'object' == c(f) && e.call(f, '__await')
								? t.resolve(f.__await).then(
										function (n) {
											r('next', n, i, s);
										},
										function (n) {
											r('throw', n, i, s);
										},
								  )
								: t.resolve(f).then(
										function (n) {
											(u.value = n), i(u);
										},
										function (n) {
											return r('throw', n, i, s);
										},
								  );
						}
						s(l.arg);
					}
					var o;
					this._invoke = function (n, e) {
						function a() {
							return new t(function (t, o) {
								r(n, e, t, o);
							});
						}
						return (o = o ? o.then(a, a) : a());
					};
				}
				function k(n, t) {
					var e = n.iterator[t.method];
					if (void 0 === e) {
						if (((t.delegate = null), 'throw' === t.method)) {
							if (n.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(n, t), 'throw' === t.method)) return f;
							(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
						}
						return f;
					}
					var r = d(e, n.iterator, t.arg);
					if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), f;
					var o = r.arg;
					return o
						? o.done
							? ((t[n.resultName] = o.value), (t.next = n.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), f)
							: o
						: ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), f);
				}
				function L(n) {
					var t = { tryLoc: n[0] };
					1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
				}
				function j(n) {
					var t = n.completion || {};
					(t.type = 'normal'), delete t.arg, (n.completion = t);
				}
				function E(n) {
					(this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(L, this), this.reset(!0);
				}
				function S(n) {
					if (n) {
						var t = n[o];
						if (t) return t.call(n);
						if ('function' == typeof n.next) return n;
						if (!isNaN(n.length)) {
							var r = -1,
								a = function t() {
									for (; ++r < n.length; ) if (e.call(n, r)) return (t.value = n[r]), (t.done = !1), t;
									return (t.value = void 0), (t.done = !0), t;
								};
							return (a.next = a);
						}
					}
					return { next: O };
				}
				function O() {
					return { value: void 0, done: !0 };
				}
				return (
					(b.prototype = h),
					l(g, 'constructor', h),
					l(h, 'constructor', b),
					(b.displayName = l(h, i, 'GeneratorFunction')),
					(n.isGeneratorFunction = function (n) {
						var t = 'function' == typeof n && n.constructor;
						return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name));
					}),
					(n.mark = function (n) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(n, h) : ((n.__proto__ = h), l(n, i, 'GeneratorFunction')), (n.prototype = Object.create(g)), n;
					}),
					(n.awrap = function (n) {
						return { __await: n };
					}),
					w(x.prototype),
					l(x.prototype, a, function () {
						return this;
					}),
					(n.AsyncIterator = x),
					(n.async = function (t, e, r, o, a) {
						void 0 === a && (a = Promise);
						var i = new x(u(t, e, r, o), a);
						return n.isGeneratorFunction(e)
							? i
							: i.next().then(function (n) {
									return n.done ? n.value : i.next();
							  });
					}),
					w(g),
					l(g, i, 'Generator'),
					l(g, o, function () {
						return this;
					}),
					l(g, 'toString', function () {
						return '[object Generator]';
					}),
					(n.keys = function (n) {
						var t = [];
						for (var e in n) t.push(e);
						return (
							t.reverse(),
							function e() {
								for (; t.length; ) {
									var r = t.pop();
									if (r in n) return (e.value = r), (e.done = !1), e;
								}
								return (e.done = !0), e;
							}
						);
					}),
					(n.values = S),
					(E.prototype = {
						constructor: E,
						reset: function (n) {
							if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = void 0), this.tryEntries.forEach(j), !n))
								for (var t in this) 't' === t.charAt(0) && e.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
						},
						stop: function () {
							this.done = !0;
							var n = this.tryEntries[0].completion;
							if ('throw' === n.type) throw n.arg;
							return this.rval;
						},
						dispatchException: function (n) {
							if (this.done) throw n;
							var t = this;
							function r(e, r) {
								return (i.type = 'throw'), (i.arg = n), (t.next = e), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var a = this.tryEntries[o],
									i = a.completion;
								if ('root' === a.tryLoc) return r('end');
								if (a.tryLoc <= this.prev) {
									var c = e.call(a, 'catchLoc'),
										s = e.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (n, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && e.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var a = o;
									break;
								}
							}
							a && ('break' === n || 'continue' === n) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return (i.type = n), (i.arg = t), a ? ((this.method = 'next'), (this.next = a.finallyLoc), f) : this.complete(i);
						},
						complete: function (n, t) {
							if ('throw' === n.type) throw n.arg;
							return (
								'break' === n.type || 'continue' === n.type
									? (this.next = n.arg)
									: 'return' === n.type
									? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end'))
									: 'normal' === n.type && t && (this.next = t),
								f
							);
						},
						finish: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), j(e), f;
							}
						},
						catch: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.tryLoc === n) {
									var r = e.completion;
									if ('throw' === r.type) {
										var o = r.arg;
										j(e);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (n, t, e) {
							return (this.delegate = { iterator: S(n), resultName: t, nextLoc: e }), 'next' === this.method && (this.arg = void 0), f;
						},
					}),
					n
				);
			}
			function l(n, t, e, r, o, a, i) {
				try {
					var c = n[a](i),
						s = c.value;
				} catch (n) {
					return void e(n);
				}
				c.done ? t(s) : Promise.resolve(s).then(r, o);
			}
			const u = (function () {
				var t,
					e =
						((t = s().mark(function t(e, r) {
							var o, a, i, c;
							return s().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), fetch(''.concat(e, 'q=science&sortBy=publishedAt&pageSize=').concat(r, '&language=en&page=2'), { headers: { 'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81' } });
										case 2:
											return (o = t.sent), (t.next = 5), o.json();
										case 5:
											(a = t.sent),
												(i = a.articles),
												(c = document.getElementById('latest-post-container')),
												Array.from(i).forEach(function (t) {
													c.innerHTML += '\n          <article class="feature-1 w-full mb-16 md:mb-0 max-h-[300px]">\n            <img src="'
														.concat(t.urlToImage, '" alt="education" class="w-full h-40 object-none image-source">\n            <div class="px-1">\n              <a href="')
														.concat(t.url, '" target="_blank"\n                class="hover:underline title font-semibold block text-lg my-2 overflow-hidden h-14  text-ellipsis line-clamp-2">\n                ')
														.concat(t.title, '\n              </a>\n              <p class="description font-normal text-sm leading-7 h-16 overflow-hidden text-ellipsis line-clamp-2">\n                ')
														.concat(
															t.description,
															'\n              </p>\n              <div class="flex justify-between items-center mt-5 text-sm">\n                <div class="overflow-hidden">\n                  <h4 class="author font-semibold w-[80%] text-ellipsis">',
														)
														.concat(t.author, '</h4>\n                  <div class="flex items-center mt-1">\n                    <p class="date">')
														.concat(n(t.publishedAt), '</p>\n                    <div class="bg-[#06283D] rounded-full h-1 w-1 mx-2"></div>\n                    <p class="source">')
														.concat(
															t.source.name,
															'</p>\n                  </div>\n                </div>\n                <button class="w-7 h-7">\n                  <img src="./img/save.svg" alt="save" class="w-full h-full">\n                </button>\n              </div>\n            </div>\n          </article>\n    ',
														);
												});
										case 9:
										case 'end':
											return t.stop();
									}
							}, t);
						})),
						function () {
							var n = this,
								e = arguments;
							return new Promise(function (r, o) {
								var a = t.apply(n, e);
								function i(n) {
									l(a, r, o, i, c, 'next', n);
								}
								function c(n) {
									l(a, r, o, i, c, 'throw', n);
								}
								i(void 0);
							});
						});
				return function (n, t) {
					return e.apply(this, arguments);
				};
			})();
			function d(n) {
				return (
					(d =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					d(n)
				);
			}
			function f() {
				f = function () {
					return n;
				};
				var n = {},
					t = Object.prototype,
					e = t.hasOwnProperty,
					r = 'function' == typeof Symbol ? Symbol : {},
					o = r.iterator || '@@iterator',
					a = r.asyncIterator || '@@asyncIterator',
					i = r.toStringTag || '@@toStringTag';
				function c(n, t, e) {
					return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
				}
				try {
					c({}, '');
				} catch (n) {
					c = function (n, t, e) {
						return (n[t] = e);
					};
				}
				function s(n, t, e, r) {
					var o = t && t.prototype instanceof p ? t : p,
						a = Object.create(o.prototype),
						i = new E(r || []);
					return (
						(a._invoke = (function (n, t, e) {
							var r = 'suspendedStart';
							return function (o, a) {
								if ('executing' === r) throw new Error('Generator is already running');
								if ('completed' === r) {
									if ('throw' === o) throw a;
									return { value: void 0, done: !0 };
								}
								for (e.method = o, e.arg = a; ; ) {
									var i = e.delegate;
									if (i) {
										var c = k(i, e);
										if (c) {
											if (c === u) continue;
											return c;
										}
									}
									if ('next' === e.method) e.sent = e._sent = e.arg;
									else if ('throw' === e.method) {
										if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
										e.dispatchException(e.arg);
									} else 'return' === e.method && e.abrupt('return', e.arg);
									r = 'executing';
									var s = l(n, t, e);
									if ('normal' === s.type) {
										if (((r = e.done ? 'completed' : 'suspendedYield'), s.arg === u)) continue;
										return { value: s.arg, done: e.done };
									}
									'throw' === s.type && ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
								}
							};
						})(n, e, i)),
						a
					);
				}
				function l(n, t, e) {
					try {
						return { type: 'normal', arg: n.call(t, e) };
					} catch (n) {
						return { type: 'throw', arg: n };
					}
				}
				n.wrap = s;
				var u = {};
				function p() {}
				function b() {}
				function h() {}
				var m = {};
				c(m, o, function () {
					return this;
				});
				var y = Object.getPrototypeOf,
					v = y && y(y(S([])));
				v && v !== t && e.call(v, o) && (m = v);
				var g = (h.prototype = p.prototype = Object.create(m));
				function w(n) {
					['next', 'throw', 'return'].forEach(function (t) {
						c(n, t, function (n) {
							return this._invoke(t, n);
						});
					});
				}
				function x(n, t) {
					function r(o, a, i, c) {
						var s = l(n[o], n, a);
						if ('throw' !== s.type) {
							var u = s.arg,
								f = u.value;
							return f && 'object' == d(f) && e.call(f, '__await')
								? t.resolve(f.__await).then(
										function (n) {
											r('next', n, i, c);
										},
										function (n) {
											r('throw', n, i, c);
										},
								  )
								: t.resolve(f).then(
										function (n) {
											(u.value = n), i(u);
										},
										function (n) {
											return r('throw', n, i, c);
										},
								  );
						}
						c(s.arg);
					}
					var o;
					this._invoke = function (n, e) {
						function a() {
							return new t(function (t, o) {
								r(n, e, t, o);
							});
						}
						return (o = o ? o.then(a, a) : a());
					};
				}
				function k(n, t) {
					var e = n.iterator[t.method];
					if (void 0 === e) {
						if (((t.delegate = null), 'throw' === t.method)) {
							if (n.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(n, t), 'throw' === t.method)) return u;
							(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
						}
						return u;
					}
					var r = l(e, n.iterator, t.arg);
					if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), u;
					var o = r.arg;
					return o
						? o.done
							? ((t[n.resultName] = o.value), (t.next = n.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), u)
							: o
						: ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), u);
				}
				function L(n) {
					var t = { tryLoc: n[0] };
					1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
				}
				function j(n) {
					var t = n.completion || {};
					(t.type = 'normal'), delete t.arg, (n.completion = t);
				}
				function E(n) {
					(this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(L, this), this.reset(!0);
				}
				function S(n) {
					if (n) {
						var t = n[o];
						if (t) return t.call(n);
						if ('function' == typeof n.next) return n;
						if (!isNaN(n.length)) {
							var r = -1,
								a = function t() {
									for (; ++r < n.length; ) if (e.call(n, r)) return (t.value = n[r]), (t.done = !1), t;
									return (t.value = void 0), (t.done = !0), t;
								};
							return (a.next = a);
						}
					}
					return { next: O };
				}
				function O() {
					return { value: void 0, done: !0 };
				}
				return (
					(b.prototype = h),
					c(g, 'constructor', h),
					c(h, 'constructor', b),
					(b.displayName = c(h, i, 'GeneratorFunction')),
					(n.isGeneratorFunction = function (n) {
						var t = 'function' == typeof n && n.constructor;
						return !!t && (t === b || 'GeneratorFunction' === (t.displayName || t.name));
					}),
					(n.mark = function (n) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(n, h) : ((n.__proto__ = h), c(n, i, 'GeneratorFunction')), (n.prototype = Object.create(g)), n;
					}),
					(n.awrap = function (n) {
						return { __await: n };
					}),
					w(x.prototype),
					c(x.prototype, a, function () {
						return this;
					}),
					(n.AsyncIterator = x),
					(n.async = function (t, e, r, o, a) {
						void 0 === a && (a = Promise);
						var i = new x(s(t, e, r, o), a);
						return n.isGeneratorFunction(e)
							? i
							: i.next().then(function (n) {
									return n.done ? n.value : i.next();
							  });
					}),
					w(g),
					c(g, i, 'Generator'),
					c(g, o, function () {
						return this;
					}),
					c(g, 'toString', function () {
						return '[object Generator]';
					}),
					(n.keys = function (n) {
						var t = [];
						for (var e in n) t.push(e);
						return (
							t.reverse(),
							function e() {
								for (; t.length; ) {
									var r = t.pop();
									if (r in n) return (e.value = r), (e.done = !1), e;
								}
								return (e.done = !0), e;
							}
						);
					}),
					(n.values = S),
					(E.prototype = {
						constructor: E,
						reset: function (n) {
							if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = void 0), this.tryEntries.forEach(j), !n))
								for (var t in this) 't' === t.charAt(0) && e.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
						},
						stop: function () {
							this.done = !0;
							var n = this.tryEntries[0].completion;
							if ('throw' === n.type) throw n.arg;
							return this.rval;
						},
						dispatchException: function (n) {
							if (this.done) throw n;
							var t = this;
							function r(e, r) {
								return (i.type = 'throw'), (i.arg = n), (t.next = e), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var a = this.tryEntries[o],
									i = a.completion;
								if ('root' === a.tryLoc) return r('end');
								if (a.tryLoc <= this.prev) {
									var c = e.call(a, 'catchLoc'),
										s = e.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (n, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && e.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var a = o;
									break;
								}
							}
							a && ('break' === n || 'continue' === n) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return (i.type = n), (i.arg = t), a ? ((this.method = 'next'), (this.next = a.finallyLoc), u) : this.complete(i);
						},
						complete: function (n, t) {
							if ('throw' === n.type) throw n.arg;
							return (
								'break' === n.type || 'continue' === n.type
									? (this.next = n.arg)
									: 'return' === n.type
									? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end'))
									: 'normal' === n.type && t && (this.next = t),
								u
							);
						},
						finish: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), j(e), u;
							}
						},
						catch: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.tryLoc === n) {
									var r = e.completion;
									if ('throw' === r.type) {
										var o = r.arg;
										j(e);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (n, t, e) {
							return (this.delegate = { iterator: S(n), resultName: t, nextLoc: e }), 'next' === this.method && (this.arg = void 0), u;
						},
					}),
					n
				);
			}
			function p(n, t, e, r, o, a, i) {
				try {
					var c = n[a](i),
						s = c.value;
				} catch (n) {
					return void e(n);
				}
				c.done ? t(s) : Promise.resolve(s).then(r, o);
			}
			const b = (function () {
				var t,
					e =
						((t = f().mark(function t(e, r) {
							var o, a, i, c;
							return f().wrap(function (t) {
								for (;;)
									switch ((t.prev = t.next)) {
										case 0:
											return (t.next = 2), fetch(''.concat(e, 'q=education&sortBy=popularity&pageSize=').concat(r, '&language=en'), { headers: { 'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81' } });
										case 2:
											return (o = t.sent), (t.next = 5), o.json();
										case 5:
											(a = t.sent),
												(i = a.articles),
												(c = document.getElementById('popular-post-container')),
												Array.from(i).forEach(function (t, e) {
													c.innerHTML +=
														e > 0
															? '\n      <article class="h-[100px] w-full flex items-center">\n            <h2 class="text-6xl text-[#989898] mr-8">0'
																	.concat(
																		++e,
																		'</h2>\n            <div class="flex flex-col overflow-hidden w-full">\n              <a href=""\n                class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">\n                ',
																	)
																	.concat(
																		t.title,
																		'\n              </a>\n              <div class="flex justify-between mt-4">\n                <div>\n                  <h4 class="author font-semibold text-sm">',
																	)
																	.concat(t.author, '</h4>\n                  <p class="date">')
																	.concat(n(t.publishedAt), '</p>\n                </div>\n              </div>\n            </div>\n          </article>\n    ')
															: '\n      <article class="h-[100px] w-full flex items-center">\n            <h2 class="text-6xl text-[#989898] mr-12">0'
																	.concat(
																		++e,
																		'</h2>\n            <div class="flex flex-col overflow-hidden w-full">\n              <a href=""\n                class="hover:underline title font-semibold text-sm overflow-hidden h-10 max-w-full  text-ellipsis line-clamp-2">\n                ',
																	)
																	.concat(
																		t.title,
																		'\n              </a>\n              <div class="flex justify-between mt-4">\n                <div>\n                  <h4 class="author font-semibold text-sm">',
																	)
																	.concat(t.author, '</h4>\n                  <p class="date">')
																	.concat(n(t.publishedAt), '</p>\n                </div>\n              </div>\n            </div>\n          </article>\n    ');
												});
										case 10:
										case 'end':
											return t.stop();
									}
							}, t);
						})),
						function () {
							var n = this,
								e = arguments;
							return new Promise(function (r, o) {
								var a = t.apply(n, e);
								function i(n) {
									p(a, r, o, i, c, 'next', n);
								}
								function c(n) {
									p(a, r, o, i, c, 'throw', n);
								}
								i(void 0);
							});
						});
				return function (n, t) {
					return e.apply(this, arguments);
				};
			})();
			function h(n) {
				return (
					(h =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					h(n)
				);
			}
			function m() {
				m = function () {
					return n;
				};
				var n = {},
					t = Object.prototype,
					e = t.hasOwnProperty,
					r = 'function' == typeof Symbol ? Symbol : {},
					o = r.iterator || '@@iterator',
					a = r.asyncIterator || '@@asyncIterator',
					i = r.toStringTag || '@@toStringTag';
				function c(n, t, e) {
					return Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }), n[t];
				}
				try {
					c({}, '');
				} catch (n) {
					c = function (n, t, e) {
						return (n[t] = e);
					};
				}
				function s(n, t, e, r) {
					var o = t && t.prototype instanceof d ? t : d,
						a = Object.create(o.prototype),
						i = new E(r || []);
					return (
						(a._invoke = (function (n, t, e) {
							var r = 'suspendedStart';
							return function (o, a) {
								if ('executing' === r) throw new Error('Generator is already running');
								if ('completed' === r) {
									if ('throw' === o) throw a;
									return { value: void 0, done: !0 };
								}
								for (e.method = o, e.arg = a; ; ) {
									var i = e.delegate;
									if (i) {
										var c = k(i, e);
										if (c) {
											if (c === u) continue;
											return c;
										}
									}
									if ('next' === e.method) e.sent = e._sent = e.arg;
									else if ('throw' === e.method) {
										if ('suspendedStart' === r) throw ((r = 'completed'), e.arg);
										e.dispatchException(e.arg);
									} else 'return' === e.method && e.abrupt('return', e.arg);
									r = 'executing';
									var s = l(n, t, e);
									if ('normal' === s.type) {
										if (((r = e.done ? 'completed' : 'suspendedYield'), s.arg === u)) continue;
										return { value: s.arg, done: e.done };
									}
									'throw' === s.type && ((r = 'completed'), (e.method = 'throw'), (e.arg = s.arg));
								}
							};
						})(n, e, i)),
						a
					);
				}
				function l(n, t, e) {
					try {
						return { type: 'normal', arg: n.call(t, e) };
					} catch (n) {
						return { type: 'throw', arg: n };
					}
				}
				n.wrap = s;
				var u = {};
				function d() {}
				function f() {}
				function p() {}
				var b = {};
				c(b, o, function () {
					return this;
				});
				var y = Object.getPrototypeOf,
					v = y && y(y(S([])));
				v && v !== t && e.call(v, o) && (b = v);
				var g = (p.prototype = d.prototype = Object.create(b));
				function w(n) {
					['next', 'throw', 'return'].forEach(function (t) {
						c(n, t, function (n) {
							return this._invoke(t, n);
						});
					});
				}
				function x(n, t) {
					function r(o, a, i, c) {
						var s = l(n[o], n, a);
						if ('throw' !== s.type) {
							var u = s.arg,
								d = u.value;
							return d && 'object' == h(d) && e.call(d, '__await')
								? t.resolve(d.__await).then(
										function (n) {
											r('next', n, i, c);
										},
										function (n) {
											r('throw', n, i, c);
										},
								  )
								: t.resolve(d).then(
										function (n) {
											(u.value = n), i(u);
										},
										function (n) {
											return r('throw', n, i, c);
										},
								  );
						}
						c(s.arg);
					}
					var o;
					this._invoke = function (n, e) {
						function a() {
							return new t(function (t, o) {
								r(n, e, t, o);
							});
						}
						return (o = o ? o.then(a, a) : a());
					};
				}
				function k(n, t) {
					var e = n.iterator[t.method];
					if (void 0 === e) {
						if (((t.delegate = null), 'throw' === t.method)) {
							if (n.iterator.return && ((t.method = 'return'), (t.arg = void 0), k(n, t), 'throw' === t.method)) return u;
							(t.method = 'throw'), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
						}
						return u;
					}
					var r = l(e, n.iterator, t.arg);
					if ('throw' === r.type) return (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), u;
					var o = r.arg;
					return o
						? o.done
							? ((t[n.resultName] = o.value), (t.next = n.nextLoc), 'return' !== t.method && ((t.method = 'next'), (t.arg = void 0)), (t.delegate = null), u)
							: o
						: ((t.method = 'throw'), (t.arg = new TypeError('iterator result is not an object')), (t.delegate = null), u);
				}
				function L(n) {
					var t = { tryLoc: n[0] };
					1 in n && (t.catchLoc = n[1]), 2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])), this.tryEntries.push(t);
				}
				function j(n) {
					var t = n.completion || {};
					(t.type = 'normal'), delete t.arg, (n.completion = t);
				}
				function E(n) {
					(this.tryEntries = [{ tryLoc: 'root' }]), n.forEach(L, this), this.reset(!0);
				}
				function S(n) {
					if (n) {
						var t = n[o];
						if (t) return t.call(n);
						if ('function' == typeof n.next) return n;
						if (!isNaN(n.length)) {
							var r = -1,
								a = function t() {
									for (; ++r < n.length; ) if (e.call(n, r)) return (t.value = n[r]), (t.done = !1), t;
									return (t.value = void 0), (t.done = !0), t;
								};
							return (a.next = a);
						}
					}
					return { next: O };
				}
				function O() {
					return { value: void 0, done: !0 };
				}
				return (
					(f.prototype = p),
					c(g, 'constructor', p),
					c(p, 'constructor', f),
					(f.displayName = c(p, i, 'GeneratorFunction')),
					(n.isGeneratorFunction = function (n) {
						var t = 'function' == typeof n && n.constructor;
						return !!t && (t === f || 'GeneratorFunction' === (t.displayName || t.name));
					}),
					(n.mark = function (n) {
						return Object.setPrototypeOf ? Object.setPrototypeOf(n, p) : ((n.__proto__ = p), c(n, i, 'GeneratorFunction')), (n.prototype = Object.create(g)), n;
					}),
					(n.awrap = function (n) {
						return { __await: n };
					}),
					w(x.prototype),
					c(x.prototype, a, function () {
						return this;
					}),
					(n.AsyncIterator = x),
					(n.async = function (t, e, r, o, a) {
						void 0 === a && (a = Promise);
						var i = new x(s(t, e, r, o), a);
						return n.isGeneratorFunction(e)
							? i
							: i.next().then(function (n) {
									return n.done ? n.value : i.next();
							  });
					}),
					w(g),
					c(g, i, 'Generator'),
					c(g, o, function () {
						return this;
					}),
					c(g, 'toString', function () {
						return '[object Generator]';
					}),
					(n.keys = function (n) {
						var t = [];
						for (var e in n) t.push(e);
						return (
							t.reverse(),
							function e() {
								for (; t.length; ) {
									var r = t.pop();
									if (r in n) return (e.value = r), (e.done = !1), e;
								}
								return (e.done = !0), e;
							}
						);
					}),
					(n.values = S),
					(E.prototype = {
						constructor: E,
						reset: function (n) {
							if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = void 0), this.tryEntries.forEach(j), !n))
								for (var t in this) 't' === t.charAt(0) && e.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
						},
						stop: function () {
							this.done = !0;
							var n = this.tryEntries[0].completion;
							if ('throw' === n.type) throw n.arg;
							return this.rval;
						},
						dispatchException: function (n) {
							if (this.done) throw n;
							var t = this;
							function r(e, r) {
								return (i.type = 'throw'), (i.arg = n), (t.next = e), r && ((t.method = 'next'), (t.arg = void 0)), !!r;
							}
							for (var o = this.tryEntries.length - 1; o >= 0; --o) {
								var a = this.tryEntries[o],
									i = a.completion;
								if ('root' === a.tryLoc) return r('end');
								if (a.tryLoc <= this.prev) {
									var c = e.call(a, 'catchLoc'),
										s = e.call(a, 'finallyLoc');
									if (c && s) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									} else if (c) {
										if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
									} else {
										if (!s) throw new Error('try statement without catch or finally');
										if (this.prev < a.finallyLoc) return r(a.finallyLoc);
									}
								}
							}
						},
						abrupt: function (n, t) {
							for (var r = this.tryEntries.length - 1; r >= 0; --r) {
								var o = this.tryEntries[r];
								if (o.tryLoc <= this.prev && e.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
									var a = o;
									break;
								}
							}
							a && ('break' === n || 'continue' === n) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
							var i = a ? a.completion : {};
							return (i.type = n), (i.arg = t), a ? ((this.method = 'next'), (this.next = a.finallyLoc), u) : this.complete(i);
						},
						complete: function (n, t) {
							if ('throw' === n.type) throw n.arg;
							return (
								'break' === n.type || 'continue' === n.type
									? (this.next = n.arg)
									: 'return' === n.type
									? ((this.rval = this.arg = n.arg), (this.method = 'return'), (this.next = 'end'))
									: 'normal' === n.type && t && (this.next = t),
								u
							);
						},
						finish: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.finallyLoc === n) return this.complete(e.completion, e.afterLoc), j(e), u;
							}
						},
						catch: function (n) {
							for (var t = this.tryEntries.length - 1; t >= 0; --t) {
								var e = this.tryEntries[t];
								if (e.tryLoc === n) {
									var r = e.completion;
									if ('throw' === r.type) {
										var o = r.arg;
										j(e);
									}
									return o;
								}
							}
							throw new Error('illegal catch attempt');
						},
						delegateYield: function (n, t, e) {
							return (this.delegate = { iterator: S(n), resultName: t, nextLoc: e }), 'next' === this.method && (this.arg = void 0), u;
						},
					}),
					n
				);
			}
			function y(n, t, e, r, o, a, i) {
				try {
					var c = n[a](i),
						s = c.value;
				} catch (n) {
					return void e(n);
				}
				c.done ? t(s) : Promise.resolve(s).then(r, o);
			}
			function v(n) {
				return function () {
					var t = this,
						e = arguments;
					return new Promise(function (r, o) {
						var a = n.apply(t, e);
						function i(n) {
							y(a, r, o, i, c, 'next', n);
						}
						function c(n) {
							y(a, r, o, i, c, 'throw', n);
						}
						i(void 0);
					});
				};
			}
			const g = (function () {
				var t = v(
					m().mark(function t(e, r) {
						var o, a;
						return m().wrap(function (t) {
							for (;;)
								switch ((t.prev = t.next)) {
									case 0:
										return (
											(o = (function () {
												var n = v(
													m().mark(function n(t) {
														var o, a;
														return m().wrap(function (n) {
															for (;;)
																switch ((n.prev = n.next)) {
																	case 0:
																		return (
																			(n.next = 2),
																			fetch(''.concat(e, 'q=').concat(r, '&sortBy=publishedAt&pageSize=').concat(t, '&language=en'), { headers: { 'X-Api-Key': 'dadfe7d798784bcb8b4d0fb510216e81' } })
																		);
																	case 2:
																		return (o = n.sent), (n.next = 5), o.json();
																	case 5:
																		return (a = n.sent), n.abrupt('return', a.articles);
																	case 7:
																	case 'end':
																		return n.stop();
																}
														}, n);
													}),
												);
												return function (t) {
													return n.apply(this, arguments);
												};
											})()),
											(a = document.querySelector('.category-content')),
											(t.next = 4),
											o(10)
										);
									case 4:
										t.sent.forEach(function (t) {
											a.innerHTML += '\n\t     <div class="card w-96 bg-white shadow-xl">\n\t      <figure>\n\t        <img src="'
												.concat(t.urlToImage, '" alt="')
												.concat(r, '" class="w-full h-48 object-cover"/>\n\t      </figure>\n\t      <div class="card-body flex flex-col justify-between">\n\t        <a href="')
												.concat(t.url, '" class="card-title hover:underline">\n\t          ')
												.concat(t.title, '\n\t        </a>\n\t        <div class="card-actions justify-end mt-5">\n\t          <div class="badge badge-inline">')
												.concat(t.source.name, '</div>\n\t          <div class="badge badge-outline">')
												.concat(n(t.publishedAt), '</div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t');
										});
									case 6:
									case 'end':
										return t.stop();
								}
						}, t);
					}),
				);
				return function (n, e) {
					return t.apply(this, arguments);
				};
			})();
			var w = e(379),
				x = e.n(w),
				k = e(795),
				L = e.n(k),
				j = e(569),
				E = e.n(j),
				S = e(565),
				O = e.n(S),
				_ = e(216),
				P = e.n(_),
				T = e(589),
				C = e.n(T),
				F = e(16),
				z = {};
			(z.styleTagTransform = C()), (z.setAttributes = O()), (z.insert = E().bind(null, 'head')), (z.domAPI = L()), (z.insertStyleElement = P()), x()(F.Z, z), F.Z && F.Z.locals && F.Z.locals;
			var A = e(668),
				R = {};
			function M(n) {
				return (
					(M =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					M(n)
				);
			}
			function N(n, t) {
				if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
			}
			function I(n, t) {
				for (var e = 0; e < t.length; e++) {
					var r = t[e];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
				}
			}
			function D(n, t) {
				if (t && ('object' === M(t) || 'function' == typeof t)) return t;
				if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n;
				})(n);
			}
			function G(n) {
				var t = 'function' == typeof Map ? new Map() : void 0;
				return (
					(G = function (n) {
						if (null === n || ((e = n), -1 === Function.toString.call(e).indexOf('[native code]'))) return n;
						var e;
						if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== t) {
							if (t.has(n)) return t.get(n);
							t.set(n, r);
						}
						function r() {
							return H(n, arguments, U(this).constructor);
						}
						return (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), B(r, n);
					}),
					G(n)
				);
			}
			function H(n, t, e) {
				return (
					(H = q()
						? Reflect.construct.bind()
						: function (n, t, e) {
								var r = [null];
								r.push.apply(r, t);
								var o = new (Function.bind.apply(n, r))();
								return e && B(o, e.prototype), o;
						  }),
					H.apply(null, arguments)
				);
			}
			function q() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (n) {
					return !1;
				}
			}
			function B(n, t) {
				return (
					(B = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (n, t) {
								return (n.__proto__ = t), n;
						  }),
					B(n, t)
				);
			}
			function U(n) {
				return (
					(U = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (n) {
								return n.__proto__ || Object.getPrototypeOf(n);
						  }),
					U(n)
				);
			}
			(R.styleTagTransform = C()), (R.setAttributes = O()), (R.insert = E().bind(null, 'head')), (R.domAPI = L()), (R.insertStyleElement = P()), x()(A.Z, R), A.Z && A.Z.locals && A.Z.locals;
			var Y = (function (n) {
				!(function (n, t) {
					if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
					(n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, 'prototype', { writable: !1 }), t && B(n, t);
				})(i, n);
				var t,
					e,
					r,
					o,
					a =
						((t = i),
						(e = q()),
						function () {
							var n,
								r = U(t);
							if (e) {
								var o = U(this).constructor;
								n = Reflect.construct(r, arguments, o);
							} else n = r.apply(this, arguments);
							return D(this, n);
						});
				function i() {
					return N(this, i), a.apply(this, arguments);
				}
				return (
					(r = i),
					(o = [
						{
							key: 'connectedCallback',
							value: function () {
								this.render();
							},
						},
						{
							key: 'render',
							value: function () {
								this.innerHTML =
									'<nav class="flex justify-between items-center px-6 md:px-[50px] h-24 relative">\n      <a href="" class="brand text-2xl font-bold">TopNews</a>\n      <ul\n        class="mt-2 text-base font-medium w-11/12 overflow-x-auto whitespace-nowrap absolute top-24 h-9 sm:w-auto sm:overflow-visible sm:whitespace-normal sm:static md:h-auto">\n        <li class="inline-block mr-5 cursor-pointer" id="home">\n          <a href="" class="underline underline-offset-8 decoration-[#06283D]">Home</a>\n        </li>\n        <li class="inline-block mr-5 cursor-pointer" id="technology">\n          <a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Technology</a>\n        </li>\n        <li class="inline-block mr-5 cursor-pointer" id="health">\n          <a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Health</a>\n        </li>\n        <li class="inline-block mr-5 cursor-pointer" id="art">\n          <a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Art</a>\n        </li>\n        <li class="inline-block mr-5 cursor-pointer" id="education">\n          <a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Education</a>\n        </li>\n        <li class="inline-block mr-5 cursor-pointer" id="science">\n          <a href="" class="hover:underline underline-offset-8 decoration-[#06283D]">Science</a>\n        </li>\n      </ul>\n      <button\n        class="search bg-[#F7F7F7] rounded-md w-10 h-10 flex items-center justify-center hover:shadow-sm transition-all">\n        <img src="./img/search-icon.svg" alt="search-icon">\n      </button>\n    </nav>';
							},
						},
					]) && I(r.prototype, o),
					Object.defineProperty(r, 'prototype', { writable: !1 }),
					i
				);
			})(G(HTMLElement));
			function Z(n) {
				return (
					(Z =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					Z(n)
				);
			}
			function K(n, t) {
				if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
			}
			function X(n, t) {
				for (var e = 0; e < t.length; e++) {
					var r = t[e];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
				}
			}
			function J(n, t) {
				if (t && ('object' === Z(t) || 'function' == typeof t)) return t;
				if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n;
				})(n);
			}
			function W(n) {
				var t = 'function' == typeof Map ? new Map() : void 0;
				return (
					(W = function (n) {
						if (null === n || ((e = n), -1 === Function.toString.call(e).indexOf('[native code]'))) return n;
						var e;
						if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== t) {
							if (t.has(n)) return t.get(n);
							t.set(n, r);
						}
						function r() {
							return Q(n, arguments, nn(this).constructor);
						}
						return (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), $(r, n);
					}),
					W(n)
				);
			}
			function Q(n, t, e) {
				return (
					(Q = V()
						? Reflect.construct.bind()
						: function (n, t, e) {
								var r = [null];
								r.push.apply(r, t);
								var o = new (Function.bind.apply(n, r))();
								return e && $(o, e.prototype), o;
						  }),
					Q.apply(null, arguments)
				);
			}
			function V() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (n) {
					return !1;
				}
			}
			function $(n, t) {
				return (
					($ = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (n, t) {
								return (n.__proto__ = t), n;
						  }),
					$(n, t)
				);
			}
			function nn(n) {
				return (
					(nn = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (n) {
								return n.__proto__ || Object.getPrototypeOf(n);
						  }),
					nn(n)
				);
			}
			customElements.define('app-bar', Y);
			var tn = (function (n) {
				!(function (n, t) {
					if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
					(n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, 'prototype', { writable: !1 }), t && $(n, t);
				})(c, n);
				var t,
					e,
					r,
					o,
					a,
					i =
						((t = c),
						(e = V()),
						function () {
							var n,
								r = nn(t);
							if (e) {
								var o = nn(this).constructor;
								n = Reflect.construct(r, arguments, o);
							} else n = r.apply(this, arguments);
							return J(this, n);
						});
				function c() {
					return K(this, c), i.apply(this, arguments);
				}
				return (
					(r = c),
					(a = [
						{
							key: 'observedAttributes',
							get: function () {
								return ['class'];
							},
						},
					]),
					(o = [
						{
							key: 'connectedCallback',
							value: function () {
								(this.className = this.getAttribute('class') || null), this.render();
							},
						},
						{
							key: 'attributeChangedCallback',
							value: function (n, t) {
								(this[n] = t), this.render();
							},
						},
						{
							key: 'render',
							value: function () {
								this.innerHTML =
									'\n     <section\n      class="md:text-left text-center jumbotron bg-[#DFF6FF] mt-20 mx-6 sm:mt-6 md:mx-[50px] flex justify-between items-center p-16 md:px-20 px-8 flex-col md:flex-row">\n      <div class="first-column sm:max-w-[460px] md:order-1 order-2 mt-12 md:mt-0">\n        <h1 class="font-semibold text-xl sm:text-2xl leading-10">Find Popular and Helpful News <br\n            class="hidden sm:block"> on\n          TopNews\n        </h1>\n        <p class="font-medium text-base leading-9 mt-8 mb-8">Topnews is a site that provides news from various sources.\n          Where the news presented can provide benefit to\n          the individual who reads it.</p>\n        <div class="buttons font-medium">\n          <button class="w-48 h-[50px] mb-4 sm:mr-2 bg-[#06283D] text-white rounded-md">Sign Up</button>\n          <button class="w-48 h-[50px] border-2 border-[#06283D] rounded-md">Subscribe</button>\n        </div>\n      </div>\n      <div class="second-column max-w-[540px] md:order-2">\n        <img src="./img/jumbotron-img.svg" alt="jumbtron">\n      </div>\n    </section>\n  ';
							},
						},
					]) && X(r.prototype, o),
					a && X(r, a),
					Object.defineProperty(r, 'prototype', { writable: !1 }),
					c
				);
			})(W(HTMLElement));
			function en(n) {
				return (
					(en =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					en(n)
				);
			}
			function rn(n, t) {
				if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
			}
			function on(n, t) {
				for (var e = 0; e < t.length; e++) {
					var r = t[e];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
				}
			}
			function an(n, t) {
				if (t && ('object' === en(t) || 'function' == typeof t)) return t;
				if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n;
				})(n);
			}
			function cn(n) {
				var t = 'function' == typeof Map ? new Map() : void 0;
				return (
					(cn = function (n) {
						if (null === n || ((e = n), -1 === Function.toString.call(e).indexOf('[native code]'))) return n;
						var e;
						if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== t) {
							if (t.has(n)) return t.get(n);
							t.set(n, r);
						}
						function r() {
							return sn(n, arguments, dn(this).constructor);
						}
						return (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), un(r, n);
					}),
					cn(n)
				);
			}
			function sn(n, t, e) {
				return (
					(sn = ln()
						? Reflect.construct.bind()
						: function (n, t, e) {
								var r = [null];
								r.push.apply(r, t);
								var o = new (Function.bind.apply(n, r))();
								return e && un(o, e.prototype), o;
						  }),
					sn.apply(null, arguments)
				);
			}
			function ln() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (n) {
					return !1;
				}
			}
			function un(n, t) {
				return (
					(un = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (n, t) {
								return (n.__proto__ = t), n;
						  }),
					un(n, t)
				);
			}
			function dn(n) {
				return (
					(dn = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (n) {
								return n.__proto__ || Object.getPrototypeOf(n);
						  }),
					dn(n)
				);
			}
			customElements.define('jumbo-tron', tn);
			var fn = (function (n) {
				!(function (n, t) {
					if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
					(n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, 'prototype', { writable: !1 }), t && un(n, t);
				})(c, n);
				var t,
					e,
					r,
					o,
					a,
					i =
						((t = c),
						(e = ln()),
						function () {
							var n,
								r = dn(t);
							if (e) {
								var o = dn(this).constructor;
								n = Reflect.construct(r, arguments, o);
							} else n = r.apply(this, arguments);
							return an(this, n);
						});
				function c() {
					return rn(this, c), i.apply(this, arguments);
				}
				return (
					(r = c),
					(a = [
						{
							key: 'observedAttributes',
							get: function () {
								return ['class'];
							},
						},
					]),
					(o = [
						{
							key: 'connectedCallback',
							value: function () {
								(this.className = this.getAttribute('class') || null), this.render();
							},
						},
						{
							key: 'attributeChangedCallback',
							value: function (n, t) {
								(this[n] = t), this.render();
							},
						},
						{
							key: 'render',
							value: function () {
								this.innerHTML =
									'\n      <section class="mt-32 mb-8">\n        <h2 class="text-xl font-semibold">Featured For Members</h2>\n        <hr\n          class="mt-2 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible\n        after:content-[\'\'] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]">\n      </section>\n\n      <section class="flex w-full gap-6 justify-between flex-col md:flex-row">\n        <section class="feature-1 w-full mb-16 md:mb-0 md:max-w-[34%] max-h-[300px]" id="feature-1">\n        </section>\n\n        <section class="feature-2 max-h-[300px] w-full md:max-w-[34%] flex flex-col gap-y-8 gap-x-4 md:gap-y-4">\n        </section>\n\n        <section class="feature-3 h-[300px] w-full md:max-w-[30%] flex flex-col gap-y-8 gap-x-4 md:gap-y-4">\n        </section>\n      </section>\n    ';
							},
						},
					]) && on(r.prototype, o),
					a && on(r, a),
					Object.defineProperty(r, 'prototype', { writable: !1 }),
					c
				);
			})(cn(HTMLElement));
			function pn(n) {
				return (
					(pn =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					pn(n)
				);
			}
			function bn(n, t) {
				if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
			}
			function hn(n, t) {
				for (var e = 0; e < t.length; e++) {
					var r = t[e];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
				}
			}
			function mn(n, t) {
				if (t && ('object' === pn(t) || 'function' == typeof t)) return t;
				if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n;
				})(n);
			}
			function yn(n) {
				var t = 'function' == typeof Map ? new Map() : void 0;
				return (
					(yn = function (n) {
						if (null === n || ((e = n), -1 === Function.toString.call(e).indexOf('[native code]'))) return n;
						var e;
						if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== t) {
							if (t.has(n)) return t.get(n);
							t.set(n, r);
						}
						function r() {
							return vn(n, arguments, xn(this).constructor);
						}
						return (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), wn(r, n);
					}),
					yn(n)
				);
			}
			function vn(n, t, e) {
				return (
					(vn = gn()
						? Reflect.construct.bind()
						: function (n, t, e) {
								var r = [null];
								r.push.apply(r, t);
								var o = new (Function.bind.apply(n, r))();
								return e && wn(o, e.prototype), o;
						  }),
					vn.apply(null, arguments)
				);
			}
			function gn() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (n) {
					return !1;
				}
			}
			function wn(n, t) {
				return (
					(wn = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (n, t) {
								return (n.__proto__ = t), n;
						  }),
					wn(n, t)
				);
			}
			function xn(n) {
				return (
					(xn = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (n) {
								return n.__proto__ || Object.getPrototypeOf(n);
						  }),
					xn(n)
				);
			}
			customElements.define('featured-for-members', fn);
			var kn = (function (n) {
				!(function (n, t) {
					if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
					(n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, 'prototype', { writable: !1 }), t && wn(n, t);
				})(c, n);
				var t,
					e,
					r,
					o,
					a,
					i =
						((t = c),
						(e = gn()),
						function () {
							var n,
								r = xn(t);
							if (e) {
								var o = xn(this).constructor;
								n = Reflect.construct(r, arguments, o);
							} else n = r.apply(this, arguments);
							return mn(this, n);
						});
				function c() {
					return bn(this, c), i.apply(this, arguments);
				}
				return (
					(r = c),
					(a = [
						{
							key: 'observedAttributes',
							get: function () {
								return ['class'];
							},
						},
					]),
					(o = [
						{
							key: 'connectedCallback',
							value: function () {
								(this.className = this.getAttribute('class') || null), this.render();
							},
						},
						{
							key: 'attributeChangedCallback',
							value: function (n, t) {
								(this[n] = t), this.render();
							},
						},
						{
							key: 'render',
							value: function () {
								this.innerHTML =
									'\n        \x3c!-- Latest Post Title --\x3e\n        <h2 class="text-xl font-semibold">Latest Posts</h2>\n        <hr\n          class="mt-2 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible\n        after:content-[\'\'] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]">\n\n        \x3c!-- Latest Post Content --\x3e\n        <section class="mt-8 grid sm:grid-cols-2 sm:max-w-[100%] sm:gap-x-4 sm:gap-y-24 md:max-w-[100%] gap-10"\n          id="latest-post-container">\n        </section>\n    ';
							},
						},
					]) && hn(r.prototype, o),
					a && hn(r, a),
					Object.defineProperty(r, 'prototype', { writable: !1 }),
					c
				);
			})(yn(HTMLElement));
			function Ln(n) {
				return (
					(Ln =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (n) {
									return typeof n;
							  }
							: function (n) {
									return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
							  }),
					Ln(n)
				);
			}
			function jn(n, t) {
				if (!(n instanceof t)) throw new TypeError('Cannot call a class as a function');
			}
			function En(n, t) {
				for (var e = 0; e < t.length; e++) {
					var r = t[e];
					(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
				}
			}
			function Sn(n, t) {
				if (t && ('object' === Ln(t) || 'function' == typeof t)) return t;
				if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
				return (function (n) {
					if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return n;
				})(n);
			}
			function On(n) {
				var t = 'function' == typeof Map ? new Map() : void 0;
				return (
					(On = function (n) {
						if (null === n || ((e = n), -1 === Function.toString.call(e).indexOf('[native code]'))) return n;
						var e;
						if ('function' != typeof n) throw new TypeError('Super expression must either be null or a function');
						if (void 0 !== t) {
							if (t.has(n)) return t.get(n);
							t.set(n, r);
						}
						function r() {
							return _n(n, arguments, Cn(this).constructor);
						}
						return (r.prototype = Object.create(n.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), Tn(r, n);
					}),
					On(n)
				);
			}
			function _n(n, t, e) {
				return (
					(_n = Pn()
						? Reflect.construct.bind()
						: function (n, t, e) {
								var r = [null];
								r.push.apply(r, t);
								var o = new (Function.bind.apply(n, r))();
								return e && Tn(o, e.prototype), o;
						  }),
					_n.apply(null, arguments)
				);
			}
			function Pn() {
				if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ('function' == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
				} catch (n) {
					return !1;
				}
			}
			function Tn(n, t) {
				return (
					(Tn = Object.setPrototypeOf
						? Object.setPrototypeOf.bind()
						: function (n, t) {
								return (n.__proto__ = t), n;
						  }),
					Tn(n, t)
				);
			}
			function Cn(n) {
				return (
					(Cn = Object.setPrototypeOf
						? Object.getPrototypeOf.bind()
						: function (n) {
								return n.__proto__ || Object.getPrototypeOf(n);
						  }),
					Cn(n)
				);
			}
			customElements.define('latest-posts', kn);
			var Fn = (function (n) {
				!(function (n, t) {
					if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
					(n.prototype = Object.create(t && t.prototype, { constructor: { value: n, writable: !0, configurable: !0 } })), Object.defineProperty(n, 'prototype', { writable: !1 }), t && Tn(n, t);
				})(c, n);
				var t,
					e,
					r,
					o,
					a,
					i =
						((t = c),
						(e = Pn()),
						function () {
							var n,
								r = Cn(t);
							if (e) {
								var o = Cn(this).constructor;
								n = Reflect.construct(r, arguments, o);
							} else n = r.apply(this, arguments);
							return Sn(this, n);
						});
				function c() {
					return jn(this, c), i.apply(this, arguments);
				}
				return (
					(r = c),
					(a = [
						{
							key: 'observedAttributes',
							get: function () {
								return ['class'];
							},
						},
					]),
					(o = [
						{
							key: 'connectedCallback',
							value: function () {
								(this.className = this.getAttribute('class') || null), this.render();
							},
						},
						{
							key: 'attributeChangedCallback',
							value: function (n, t) {
								(this[n] = t), this.render();
							},
						},
						{
							key: 'render',
							value: function () {
								this.innerHTML =
									'\n        \x3c!-- Popular Post Title --\x3e\n        <h2 class="text-xl font-semibold">Popular Posts</h2>\n        <hr\n          class="mt-2 mb-8 w-full h-[0.09rem] block bg-[#0d3249] relative overflow-visible\n        after:content-[\'\'] after:h-[0.12rem] after:absolute after:-top-[1.2px] after:left-0 after:right-0 after:block after:w-[50%] sm:after:w-[20%] after:bg-[#06283D]">\n\n        \x3c!-- Popular Post Content --\x3e\n        <section class="w-full flex flex-col gap-4 md:gap-y-10" id="popular-post-container">\n        </section>\n    ';
							},
						},
					]) && En(r.prototype, o),
					a && En(r, a),
					Object.defineProperty(r, 'prototype', { writable: !1 }),
					c
				);
			})(On(HTMLElement));
			customElements.define('popular-posts', Fn),
				window.addEventListener('DOMContentLoaded', function () {
					var n = 'https://newsapi.org/v2/everything?';
					i(n), u(n, '4'), b(n, '5');
					var t = document.querySelectorAll('nav ul li'),
						e = document.querySelectorAll('nav ul li a'),
						r = document.querySelector('header'),
						o = document.querySelector('featured-for-members'),
						a = document.querySelector('latest-posts'),
						c = document.querySelector('popular-posts'),
						s = document.querySelector('.category-content');
					'home' != localStorage.getItem('navLinkID') ? g(n, localStorage.getItem('navLinkID')) : (s.classList.add('hidden'), s.classList.remove('flex'), s.classList.remove('mt-20')),
						t.forEach(function (t) {
							'home' != localStorage.getItem('navLinkID')
								? (r.lastElementChild.classList.add('hidden'), o.classList.add('hidden'), a.classList.add('hidden'), c.classList.add('hidden'))
								: (r.lastElementChild.classList.remove('hidden'), o.classList.remove('hidden'), a.classList.remove('hidden'), c.classList.remove('hidden')),
								localStorage.getItem('navLinkID') == t.id &&
									(e.forEach(function (n) {
										n.classList.contains('underline') && n.classList.remove('underline');
									}),
									t.firstElementChild.classList.add('underline')),
								t.addEventListener('click', function () {
									e.forEach(function (n) {
										n.classList.contains('underline') && n.classList.remove('underline');
									}),
										this.firstElementChild.classList.add('underline'),
										'home' != this.id
											? (r.lastElementChild.classList.add('hidden'),
											  o.classList.add('hidden'),
											  a.classList.add('hidden'),
											  c.classList.add('hidden'),
											  localStorage.setItem('navLinkID', this.id),
											  localStorage.setItem('hidden-home-content', !0),
											  (s.innerHTML = ''),
											  g(n, localStorage.getItem('navLinkID')),
											  s.classList.remove('hidden'),
											  s.classList.add('flex'),
											  s.classList.add('mt-20'))
											: (r.lastElementChild.classList.remove('hidden'),
											  o.classList.remove('hidden'),
											  a.classList.remove('hidden'),
											  c.classList.remove('hidden'),
											  localStorage.setItem('navLinkID', this.id),
											  localStorage.setItem('hidden-home-content', !1),
											  (s.innerHTML = ''),
											  s.classList.add('hidden'),
											  s.classList.remove('flex'),
											  s.classList.remove('mt-20'));
								});
						});
				});
		})();
})();
