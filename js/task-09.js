function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
//    <div class="widget">
//      <p>Background color: <span class="color">-</span></p>
//      <button type="button" class="change-color">Change color</button>
//    </div>

const background = document.querySelector('.widget');
const colorText = document.querySelector('.color');
const btn = document.querySelector('.change-color');

const changeBacgroundColor = () => {
  colorText.textContent = getRandomHexColor();
  background.style.backgroundColor = getRandomHexColor();
};

btn.addEventListener('click', changeBacgroundColor);
