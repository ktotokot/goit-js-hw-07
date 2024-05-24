function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector('#boxes');

createButton.addEventListener('click', function onClickButton(){
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
divBoxes.innerHTML = '';

if (amount >= 1 && amount <= 100) {
  const boxes = [];
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
    }

    divBoxes.append(...boxes);
    input.value = '';
};
};

function destroyBoxes() {
divBoxes.innerHTML = '';
};