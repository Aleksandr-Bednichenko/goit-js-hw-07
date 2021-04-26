const menu = document.querySelector("ul");
console.log(menu);
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const submenu = document.createElement("ul");

ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  submenu.append(element);
});
menu.appendChild(submenu);
