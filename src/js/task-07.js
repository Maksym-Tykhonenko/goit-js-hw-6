const sizeControllers = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleFontSizeChengin = (e) => {
    console.log(e.currentTarget.value);
    text.style.fontSize = `${e.currentTarget.value}px`
}

sizeControllers.addEventListener('input', handleFontSizeChengin)



//<input id="font-size-control" type="range" min="16" max="96" />
//    <br />
//    <span id="text">Abracadabra!</span>