const textInput = document.querySelector("#name-input");
const outputString = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  outputString.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    outputString.textContent = "Anonymous";
  }
});
