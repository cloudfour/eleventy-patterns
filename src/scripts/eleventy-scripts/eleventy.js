function initMenuToggle() {
  const menuToggle = document.querySelector('.EP_nav__menu-toggle');
  const menu = document.querySelector('.EP_nav__menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('is-open');
  });
}

function initSubmenuToggle() {
  const submenuToggle = document.querySelectorAll('.EP_menu__toggle');

  submenuToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {
      let target = toggle.nextElementSibling;
      const toggleIcon = toggle.querySelector('.EP_menu__toggle-icon');
      target.classList.toggle('is-open');
      toggleIcon.classList.toggle('is-open');
    });
  });
}

window.addEventListener('load', () => {
  initMenuToggle();
  initSubmenuToggle();
});
