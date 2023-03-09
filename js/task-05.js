//1 получ доступ к инпуту
//2 получ доступ к спан
//3 спан тeкст контент = инпут текст контент
//4 вешаем слушателя соб на инпут

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

const handleChangeTxt = () => {
    if (input.value === '') {
        span.textContent = "Anonymous"
        return
    }
    span.innerHTML = input.value
};

//const handleChangeTxt = (e) => {
//    span.textContent = e.currentTarget.value ? 
//        e.currentTarget.value
//        : 'Anonymous'
//}

input.addEventListener('input', handleChangeTxt)