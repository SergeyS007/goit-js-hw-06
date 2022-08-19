const input = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

let width = 30;
let height = 30;
let number = 0;

const handleInput = () => {
  number = input.value;
};
const handleClickCreate = () => {
  createBoxes(number);
};
const handleClickDestroy = () => {
  removeBoxes(number);
};

input.addEventListener("input", handleInput);
buttonCreate.addEventListener("click", handleClickCreate);
buttonDestroy.addEventListener("click", handleClickDestroy);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    height += 10;
    let div = document.createElement("div");
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("inDiv");
    boxes.append(div);
    console.log(div);
  }
}

function removeBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    const inDivEl = document.querySelector(".inDiv");
    inDivEl.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
