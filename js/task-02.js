const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");
let elements = [];
for (const ingredient of ingredients) {
  let element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  elements.push(element);
}
listOfIngredients.append(...elements);
