const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", () => {
  const textInputLength = textInput.value.length;

  textInputLength === 6
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
});
textInput.addEventListener("focus", () => {
  textInput.value = "";
  textInput.classList.contains("valid")
    ? textInput.classList.remove("valid")
    : textInput.classList.remove("invalid");
});
