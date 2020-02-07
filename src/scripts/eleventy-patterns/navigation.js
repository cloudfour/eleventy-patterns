import headsUp from 'headsup.js';

// Toggle menu on small screens
function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_js-nav__menu-toggle');
  const menu = document.querySelector('.EP_js-nav__menu');

  menuToggle.addEventListener('click', () => {
    let expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('EP_no-scroll');
  });
}

// Toggle menu accordions
function initSubmenuToggle() {
  const submenuToggle = document.querySelectorAll('.EP_js-nav__submenu-toggle');

  submenuToggle.forEach(toggle => {
    toggle.addEventListener('click', event => {
      let target = toggle.nextElementSibling;
      let expanded = toggle.getAttribute('aria-expanded') === 'true';
      const toggleIcon = toggle.querySelector('.EP_toggle-icon');
      target.classList.toggle('is-open');
      toggleIcon.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', !expanded);
    });
  });
}

window.addEventListener('load', () => {
  initMenuToggle();
  initSubmenuToggle();
  headsUp({
    selector: '.EP_js-header-container',
    debounce: 100,
    hiddenHeaderClass: 'EP_nav-hidden'
  });
});
