// Toggle menu on small screens
function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_nav__menu-toggle');
  const menu = document.querySelector('.EP_nav__menu');

  menuToggle.addEventListener('click', () => {
    let expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', !expanded);
    document.body.classList.toggle('no-scroll');
  });
}

// Toggle accordions
function initSubmenuToggle() {
  const submenuToggle = document.querySelectorAll('.EP_nav__submenu-toggle');

  submenuToggle.forEach(toggle => {
    toggle.addEventListener('click', event => {
      event.preventDefault();
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

let position = document.documentElement.scrollTop;

// WIP: hide navigation when scrolling down, show when scrolling up
function navPosition() {
  let scroll = document.documentElement.scrollTop;

  if (scroll > position) {
    document.body.classList.add('EP-nav-hidden');
  } else {
    document.body.classList.remove('EP-nav-hidden');
  }
  position = scroll;
}

window.addEventListener('scroll', navPosition);
