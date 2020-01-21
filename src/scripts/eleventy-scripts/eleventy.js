function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_nav__menu-toggle');
  const menu = document.querySelector('.EP_nav__menu');

  menuToggle.addEventListener('click', () => {
    let expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', !expanded);
  });
}

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
