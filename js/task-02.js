const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listOfIngredients = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  console.log(element);
  listOfIngredients.append(element);
}
