const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

const defaultText = output.textContent;

textInput.addEventListener('input', event => {
  output.textContent =
    event.currentTarget.value.trim() === ''
      ? defaultText
      : event.currentTarget.value;
});
