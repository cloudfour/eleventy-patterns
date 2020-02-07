import headsUp from 'headsup.js';
import scrollLock from 'scroll-lock';

// Toggle menu on small screens
function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_js-nav__menu-toggle');
  const menu = document.querySelector('.EP_js-nav__menu');

  menuToggle.addEventListener('click', () => {
    const wasExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    // Toggle `aria-expanded` to the opposite of its current value
    menuToggle.setAttribute('aria-expanded', !wasExpanded);

    if (wasExpanded) {
      scrollLock.enablePageScroll(menu);
    } else {
      scrollLock.disablePageScroll(menu);
    }

    menu.classList.toggle('is-open');
  });
}

// Toggle menu accordions
function initSubmenuToggle() {
  const categories = document.querySelectorAll('.EP_nav__category');

  categories.forEach(category => {
    const toggle = category.querySelector('.EP_js-nav__submenu-toggle');

    toggle.addEventListener('click', event => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';

      // Toggle `aria-expanded` to the opposite of its current value
      toggle.setAttribute('aria-expanded', !expanded);

      category.classList.toggle('is-open');
    });
  });
}

window.addEventListener('load', () => {
  initMenuToggle();
  initSubmenuToggle();
  headsUp({
    selector: '.EP_js-header',
    debounce: 100,
    hiddenHeaderClass: 'EP_header-hidden'
  });
});
