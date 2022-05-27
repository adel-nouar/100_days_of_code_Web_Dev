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

function retrieveUserInput(event) {
  //   let enteredText = inputElement.value;
  let enteredText = event.target.value;
  //   let enteredText = event.data; // This is different, only get the one character typed at a time
  console.log(enteredText);
  //   console.log(event);
}

inputElement.addEventListener("input", retrieveUserInput);
