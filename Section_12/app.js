let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  if (paragraphElement.textContent == "Click me!") {
    paragraphElement.textContent = "Clicked";
  } else {
    paragraphElement.textContent = "Click me!";
  }
}

paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput() {
  let enteredText = inputElement.value;
  console.log(enteredText);
}

inputElement.addEventListener("input", retrieveUserInput);
