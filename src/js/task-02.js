const menu = document.querySelector('ul');
console.log(menu);
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

ingredients.forEach(ingredient => {
    const element = document.createElement('li');
    element.textContent = ingredient;
    menu.appendChild(element);
});

