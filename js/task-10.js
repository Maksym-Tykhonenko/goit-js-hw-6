function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
//////////////////////////////////////////////////////////////////

const controls = document.querySelector('#control');
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxList = document.querySelector('#boxes');

const createBox = (amount) => {
  console.log(amount);
 
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i*10}px`;
    box.style.height = `${30 + i*10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxList.append(box); 
  }
  
};
const destroyBox = () => {
  boxList.innerHTML = '';
  input.value = '';
};

createBtn.addEventListener('click', () => {
  //console.log(input.value)
  createBox(input.value)
});
 
destroyBtn.addEventListener('click', destroyBox);