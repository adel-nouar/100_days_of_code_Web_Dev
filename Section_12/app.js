// console.dir(document);

// document.body.children[1].children[0].href = "https://google.com";

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

// anchorElement = document.querySelector("#external-link");
// anchorElement.href = "https://academind.com";
anchorElement = document.querySelector("p a");
anchorElement.href = "https://academind.com";

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https:\\google.com";
newAnchorElement.textContent = "Goes to Google";

let firstParagraph = document.querySelector("p");

firstParagraph.append(newAnchorElement);
