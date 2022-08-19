let counterValue = 0;
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const totalValue = document.querySelector("#value");
const handleClickDecrement = () => {
  counterValue -= 1;
  totalValue.textContent = counterValue;
};
const handleClickIncrement = () => {
  counterValue += 1;
  totalValue.textContent = counterValue;
};
buttonDecrement.addEventListener("click", handleClickDecrement);
buttonIncrement.addEventListener("click", handleClickIncrement);
