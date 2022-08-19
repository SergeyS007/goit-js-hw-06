const moveInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
moveInput.addEventListener("input", () => {
  output.style.fontSize = `${moveInput.value}px`;
});
