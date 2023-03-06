let counterValue = 0;

const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]');
const spanValue = document.querySelector('#value')

const hendleIcrement = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
    console.log(counterValue)
}

const hendleDecrement = () => {
    counterValue -= 1
    spanValue.textContent = counterValue
    console.log(counterValue)
};

decrementBtn.addEventListener('click', hendleDecrement);
incrementBtn.addEventListener('click', hendleIcrement);

//////////////////////////////////
