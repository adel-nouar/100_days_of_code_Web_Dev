// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.

//    - Select the first button without adding or using any "id"
const btn1 = document.getElementsByTagName("button")[0];
// const btn1 = document.querySelector("button");

//    - Select the second button by using an "id"
const btn2 = document.getElementById("chg-bg-btn");
// const btn2 = document.querySelector("#chg-bg-btn");
// console.log(btn1, btn2);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.

//    - Output the first button by using the variable in which it's stored
// function removeParagraph() {
//   console.dir(btn1);
// }

// function changeBackgroundColor(event) {
//   console.dir(event.target);
// }

// btn1.addEventListener("click", removeParagraph);
// //    - Output the second button WITHOUT using the variable in which it's stored
// btn2.addEventListener("click", changeBackgroundColor);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
const paragraph1 = document.body.children[2].children[1];
console.log(paragraph1);
const paragraph3 = paragraph1.nextElementSibling.nextElementSibling;
// const paragraph3 = document.body.children[2].children[3];
console.log(paragraph3);

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

function removeParagraph() {
  paragraph3.remove();
}

function changeBackgroundColor(event) {
  // paragraph1.style.backgroundColor = "blue";
  // paragraph1.className = "blue-bg";
  paragraph1.classList.add("blue-bg");
}

btn1.addEventListener("click", removeParagraph);
//    - Output the second button WITHOUT using the variable in which it's stored
btn2.addEventListener("click", changeBackgroundColor);

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
