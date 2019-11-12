document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.js-pattern-example')];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      alert('You have clicked a pattern example button!')
    });
  });
});
