//toggle dark/light mode on lightbulb click
const dark = "#000000";
const light = "#FBFBFB";
const grey = "#f8f8f8";
let isDarkMode = true;

document.querySelector(".lightbulb").addEventListener("click", function () {
	document.querySelector("#lightbulb").classList.toggle("lightbulb-on");
	if (isDarkMode) {
		document.documentElement.style.setProperty("--bg", light);
		document.documentElement.style.setProperty("--color", dark);
		document.documentElement.style.setProperty("--border", dark);
		isDarkMode = false;
	} else {
		document.documentElement.style.setProperty("--bg", dark);
		document.documentElement.style.setProperty("--color", light);
		document.documentElement.style.setProperty("--border", grey);
		isDarkMode = true;
	}
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
   isDarkMode = false;
}
