const sunIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>';
const moonIcon =
	'<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>';

const STORAGE_KEY = 'theme';

function getActiveTheme() {
	return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

function setTheme(theme) {
	localStorage.setItem(STORAGE_KEY, theme);
	document.documentElement.setAttribute('data-theme', theme);
}

function renderToggle(button, theme) {
	button.innerHTML = theme === 'dark' ? moonIcon : sunIcon;
	button.setAttribute(
		'aria-label',
		theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
	);
}

const button = document.getElementById('theme-toggle');
if (button) {
	let theme = getActiveTheme();
	renderToggle(button, theme);

	button.addEventListener('click', () => {
		theme = theme === 'light' ? 'dark' : 'light';
		setTheme(theme);
		renderToggle(button, theme);
	});
}
