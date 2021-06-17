import './sass/main.scss';
import templateItems from './templates/main.hbs';
import menu from './menu.json';

const menuRef = document.querySelector('.js-menu');
const markup = templateItems(menu);

menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkbox = document.querySelector('.theme-switch__toggle');
const STORAGE_KEY = 'currentTheme';
const savedTheme = localStorage.getItem(STORAGE_KEY);

document.body.classList.add('.light-theme');

checkbox.addEventListener('change', onThemeChange);

function onThemeChange() {
    if (checkbox.checked) {
        document.body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.DARK);
    } else {
        document.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    }
    }
        
function ifLocalStorageHasDarkTheme() {
  if (savedTheme === Theme.DARK) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    checkbox.setAttribute('checked', true);
  }
}

ifLocalStorageHasDarkTheme();
