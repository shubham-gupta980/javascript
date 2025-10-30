// console.log("Hello JS");
// window.console.log("Hello JS");    --> This code is already known that window is the part of code this is not such specifies

// console.log(window);
// window.document; //  ---> Print the document means html code
// console.log(window.document);
// console.dir(window.document); // print the properties of document

// console.log(document.body);
// console.dir(document.head);

// console.log(document.body.childNodes[0]);
// document.body.childNodes[3].innerText = "abcd";  --> dynamically changes in our web page

// DOM manipulation
// let id = document.getElementById("heading");
// console.log(id);

// let c = document.getElementsByClassName("heading-class")  --> return html collection
// console.log(c);
// console.dir(c);

// let e = document.getElementsByTagName("p");
// console.log(e);
// console.dir(e);

// Query selector : this is use to return the nodelist
// console.log(document.querySelector("p"));
// console.log(document.querySelector(".heading-class"))
// console.log(document.querySelector("#b"));   return 1st element
// console.log(document.querySelectorAll(".heading-class"))   return all element

// properties --> this is use to check, set and update the elements
// 1. tagName --> return tag 
// let firstl = document.querySelector(".heading-class");
// console.dir(firstl);
// console.log(firstl.tagName);

// 2. innerText --> return the inner text of the element and all its children
// let firstl = document.querySelector("div");
// console.dir(firstl);
// // console.log(firstl.children);
// console.log(firstl.lastChildChild);

// 3. innerHTML --> return the inner text with html content
// let firstl = document.querySelector("div");
// console.log(firstl.innerHTML);

// 4. Textcontent --> return the textual content even for hidden elements
// let firstl = document.querySelector("div");
// console.log(firstl.innerText);
// console.log(firstl.textContent);

// Q1 --> create a h2 heading element with text "HellonJavascript" append from "Apna college student"
let h2 = document.querySelector("h2");
console.log(h2);
h2.innerText = h2.innerText + " Apna college student";

let divs = document.querySelectorAll(".box");
let idx= 0;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}