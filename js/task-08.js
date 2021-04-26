const refs = {
    inputEl: document.querySelector('input'),
    btnRender:document.querySelector('[data-action="render"]'),
    btnDestroy: document.querySelector('[data-action="destroy"]'),
    boxesEl: document.querySelector('#boxes'),
}


//  const rrr = alert(document.getElementById("refs.inputEl").value)
// console.log(rrr);
refs.inputEl.addEventListener('input', onInput);

function onInput() {
   console.log(document.getElementById("refs.inputEl"))
}

// refs.btnRender.addEventListener('click', createBoxes(amount));
// refs.boxesEl.addEventListener('click', destroyBoxes());

// function createBoxes(amount) {
//  console.log(amount.currentTarget);

// };


// function destroyBoxes() {
        
// };