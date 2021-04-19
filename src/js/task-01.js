const category = [...document.querySelectorAll('.item')];
console.log(`'У списку ${category.length} категорії.'`);

category.forEach(element => {
    const nameCategory = element.firstElementChild;
    const lastEl =element.lastElementChild;
    const quantityCategory = [...lastEl.querySelectorAll('li')];
    console.log(`Категория: ${nameCategory.textContent}`);
    console.log(`Кількість елементів: ${quantityCategory.length}`);
});
// 