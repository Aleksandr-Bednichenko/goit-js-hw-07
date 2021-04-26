const menu = document.querySelector('ul');

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
});
menu.append(...list);
console.log(menu);
