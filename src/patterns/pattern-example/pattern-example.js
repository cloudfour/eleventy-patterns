document.addEventListener('DOMContentLoaded', () => {
  const buttons = [...document.querySelectorAll('.EP_js-pattern-example')];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // eslint-disable-next-line no-alert, no-undef
      alert('You have clicked a pattern example button!');
    });
  });
});
