const inputEl = document.querySelector('#validation-input');
const data_lengthEl = Number(inputEl.dataset.length);

inputEl.addEventListener('focus', onInputFocus);
inputEl.addEventListener('blur', onInputBlur);

function onInputFocus() {
  inputEl.classList.remove('invalid');
  inputEl.classList.remove('valid');
}

function onInputBlur(event) {
  const lengthEl = event.currentTarget.value;
  if (lengthEl.length !== data_lengthEl) {
    return inputEl.classList.add('invalid');
  }
  return inputEl.classList.add('valid');
}
