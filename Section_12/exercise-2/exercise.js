// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.

//    - Select the first button without adding or using any "id"
btn1 = document.getElementsByTagName("button")[0];

//    - Select the second button by using an "id"
btn2 = document.getElementById("btn2");
// console.log(btn1, btn2);

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.

//    - Output the first button by using the variable in which it's stored
btn1.addEventListener("click", function (event) {
  console.dir(btn1);
});
//    - Output the second button WITHOUT using the variable in which it's stored
btn2.addEventListener("click", function (event) {
  console.dir(btn2);
});

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
