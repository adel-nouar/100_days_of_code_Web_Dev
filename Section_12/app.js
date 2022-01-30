let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  if (paragraphElement.textContent == "Click me!") {
    paragraphElement.textContent = "Clicked";
  } else {
    paragraphElement.textContent = "Click me!";
  }
}

paragraphElement.addEventListener("click", changeParagraphText);
