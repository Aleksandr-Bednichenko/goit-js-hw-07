const refs = {
  inputEl: document.querySelector('input'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxesEl: document.querySelector('#boxes'),
};

const divEls = document.createElement('ul');

refs.inputEl.addEventListener('input', onInput);
refs.btnRender.addEventListener('click', createBoxes);
// refs.boxesEl.addEventListener('click', destroyBoxes);

function onInput() {
  console.log(refs.inputEl.value);
}

function createBoxes(amount) {
  amount = refs.inputEl.value;
  const sizeDiv = 20;
  for (let i = 0; i < amount; i += 10) {
    const divEl = document.createElement('div');
    divEl.style.width = `${sizeDiv}px`;
    divEl.style.height = `${sizeDiv}px`;
    // divEl.style.border = black;

    divEls.appendChild(divEl);
  }
  refs.boxesEl.appendChild(divEls);
  console.log(refs.boxesEl);
}
