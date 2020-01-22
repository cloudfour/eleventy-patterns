// Toggle menu on small screens
function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_nav__menu-toggle');
  const menu = document.querySelector('.EP_nav__menu');

  menuToggle.addEventListener('click', () => {
    let expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', !expanded);
  });
}

// Toggle accordions
function initSubmenuToggle() {
  const submenuToggle = document.querySelectorAll('.EP_nav__submenu-toggle');

  submenuToggle.forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      let target = toggle.nextElementSibling;
      let expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
      const toggleIcon = toggle.querySelector('.toggle-icon');
      target.classList.toggle('is-open');
      toggleIcon.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', !expanded);
    });
  });
}

window.addEventListener('load', () => {
  initMenuToggle();
  initSubmenuToggle();
});

var position = document.documentElement.scrollTop;

// Testing
function navPosition() {
  var scroll = document.documentElement.scrollTop;
  const menu = document.querySelector('.EP_nav__menu');

  if (!menu.classList.contains('is-open')) {
    if (scroll > position) {
      document.body.classList.add('EP-nav-hidden');
    } else {
      document.body.classList.remove('EP-nav-hidden');
    }
    position = scroll;
  }
}

window.addEventListener('scroll', navPosition);
