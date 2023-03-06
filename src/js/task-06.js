//1 получ доступ к инпуту
//2 пишем фуу смены класов
//3 вешаем слушателя соб на инпут

const input = document.querySelector('#validation-input')

const changeBorder = (e) => {
    if (e.target.value.length !==
        Number(input.getAttribute(["data-length"]))) {
        
        input.classList.add('invalid')
        return
    }
    input.classList.replace('invalid', 'valid')

    
}

input.addEventListener('blur', changeBorder)