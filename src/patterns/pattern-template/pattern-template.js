document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.js-pattern-template')];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('You have clicked a pattern template button!')
    });
  });
});