function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const buttonChangeColor = document.querySelector(".change-color");
const span = document.querySelector(".color");

buttonChangeColor.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = body.style.backgroundColor;
}
