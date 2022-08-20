const listWithId = document.querySelector("#categories");
const arrayOfCategories = listWithId.children;
console.log(`Number of categories: `, arrayOfCategories.length);
for (const category of arrayOfCategories) {
  const titleOfCategory = category.firstElementChild;
  console.log(`Category: `, titleOfCategory.textContent);
  const list = category.lastElementChild;
  const arrayOfElements = list.children;
  console.log(`Elements: `, arrayOfElements.length);
}
