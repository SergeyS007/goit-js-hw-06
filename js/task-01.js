const listWithId = document.querySelector("#categories");
const arrayOfCategories = listWithId.children;
console.log(`Number of categories: `, arrayOfCategories.length);
for (const category of arrayOfCategories) {
  const titleOfCategory = category.querySelector("h2");
  console.log(`Category: `, titleOfCategory.textContent);
  const aaa = category.querySelector("ul");
  const arrayOfElements = aaa.children;
  console.log(`Elements: `, arrayOfElements.length);
}
