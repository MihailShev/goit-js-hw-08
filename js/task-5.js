function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
const bodyColor = document.body;

btnEl.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyColor.style.backgroundColor = randomColor;
  textColor.textContent = randomColor;
});
