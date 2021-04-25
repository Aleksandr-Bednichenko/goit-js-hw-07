const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')


console.log(spanEl.textContent)
inputEl.addEventListener('input', onInput)
function onInput(event) {
    const font = Number(event.currentTarget.value);
    spanEl.style.fontSize = `${font}px`;
}