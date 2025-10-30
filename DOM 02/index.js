// let d = document.querySelector("div");
// console.log(d);
// console.log(d.getAttribute("class"));
// console.log(d.getAttribute("name"));

// let s = document.querySelector("span");
// console.log(s.getAttribute("id"));
// console.log(s.setAttribute("id","clubbbb"));   ---> change the value of id

// 1.create element
// let btn = document.createElement("Button");
// btn.innerText = "Click me!"
// console.log(btn);

//2. Add element --> which is use to display elements in web page
// let divs = document.querySelector("div");
// divs.append(btn);
// divs.prepend(btn);
// divs.before(btn);
// divs.after(btn);

// let heading = document.createElement("h1");
// heading.innerHTML = "<i> This is my main heading </i>";
// console.log(heading);
// let divs = document.querySelector("div");
// divs.before(heading);

// 3. Delete Node
// let para = document.querySelector("p");
// para.remove();

// Q1 --> Create a new button element Give it a text "Click me", background color of red & text color of white insert the button ass the first element inside the body
let newbtn = document.createElement("button");
newbtn.innerText = "Click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
console.log(newbtn);

let body = document.querySelector("body");
console.log(body.prepend(newbtn));

// Q2 -->
let para = document.querySelector("p");
// para.getAttribute("class")
// para.setAttribute("class", "newclass");  -> changes apply only new class
// para.classList.add("newclass");     --> both changes apply 

