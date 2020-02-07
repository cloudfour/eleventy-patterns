import headsUp from 'headsup.js';

// Toggle menu on small screens
function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_js-nav__menu-toggle');
  const menu = document.querySelector('.EP_js-nav__menu');

  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';

    // Toggle `aria-expanded` to the opposite of its current value
    menuToggle.setAttribute('aria-expanded', !expanded);

    menu.classList.toggle('is-open');
    document.body.classList.toggle('EP_no-scroll');
  });
}

// Toggle menu accordions
function initSubmenuToggle() {
  const submenuToggle = document.querySelectorAll('.EP_js-nav__submenu-toggle');

  submenuToggle.forEach(toggle => {
    toggle.addEventListener('click', event => {
      const target = toggle.nextElementSibling;
      const toggleIcon = toggle.querySelector('.EP_toggle-icon');

      const expanded = toggle.getAttribute('aria-expanded') === 'true';

      // Toggle `aria-expanded` to the opposite of its current value
      toggle.setAttribute('aria-expanded', !expanded);

      target.classList.toggle('is-open');
      toggleIcon.classList.toggle('is-open');
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
