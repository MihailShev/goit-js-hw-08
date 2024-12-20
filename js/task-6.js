function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('input');
const btnCreateElem = document.querySelector('button[data-create]');
const btnDestroyElem = document.querySelector('button[data-destroy]');
const boxesElem = document.querySelector('#boxes');

const createBoxes = amount => {
  let boxesSize = 30;
  const step = 10;
  const boxesElemArray = [];
  for (let i = 0; i < amount; i++) {
    const boxElem = document.createElement('div');
    boxElem.textContent = i + 1;
    boxElem.style.width = boxesSize + 'px';
    boxElem.style.height = boxesSize + 'px';
    boxElem.style.backgroundColor = getRandomHexColor();
    boxesElemArray.push(boxElem);
    boxesSize += step;
  }
  boxesElem.append(...boxesElemArray);
};

const destroyBoxes = () => {
  boxesElem.innerHTML = '';
  inputElem.value = '';
};

const getBoxesAmount = () => {
  let amount = 0;
  if (
    inputElem.valueAsNumber >= Number(inputElem.min) &&
    inputElem.valueAsNumber <= Number(inputElem.max)
  ) {
    amount = inputElem.value;
  }
  return amount;
};

btnCreateElem.addEventListener('click', () => {
  const amount = getBoxesAmount();
  if (amount) {
    destroyBoxes();
    createBoxes(amount);
  }
});

btnDestroyElem.addEventListener('click', destroyBoxes);
