
const refs = {
    inputEl: document.querySelector('#name-input'),
    spamEl: document.querySelector('#name-output'),
}


refs.inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    console.log(event.currentTarget.value);
    if (event.currentTarget.value === '') {
        refs.spamEl.textContent = 'незнакомец'
    } else {refs.spamEl.textContent = event.currentTarget.value;}
    }