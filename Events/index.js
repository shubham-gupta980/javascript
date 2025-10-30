// let btn = document.querySelector("#btn");
// btn.onclick=()=> {
//     console.log("Butthon was clicked");
//     let a = 25;
//     a++
//     console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("We are inside the box");
// }

// Event object
// let btn = document.querySelector("#btn");
// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt) =>  {
//     console.log("Mouse over #box");
//     console.log("Event type:", evt.type);
//     console.log("Mouse position:", evt.clientX, evt.clientY);
//     console.log("Target element:", evt.target);
// }

// Event Listners
// Add event listner

// let btn1 = document.querySelector("#btn");
// btn1.addEventListener("click", (evt) => {
//     console.log("Button was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.bubbles)
// })

// let box = document.querySelector("#box");
// box.addEventListener("mouseover", (evt) => {
//     console.log("Inside the box")
//     console.log(evt.type);
//     console.log(evt);
// })

// delete event listner
let btn1 = document.querySelector("#btn");

btn1.addEventListener("click", (evt) => {
    console.log("Handler 1");
})
// btn1.addEventListener("click", (evt) => {
//     console.log("Handler 2");
// })
const headler =(evt) => {
    console.log("Handler 2");
}
btn1.addEventListener("click", headler)

btn1.addEventListener("click", (evt) => {
    console.log("Handler 3");
})
btn1.addEventListener("click", (evt) => {
    console.log("Handler 4");
})

// btn1.removeEventListener("click", (evt) => {
//     console.log("Handler 1");
// })
btn1.removeEventListener("click", headler);

// Q1--> create a button that changes the screem dark-mode in single click and light-mode in double click
// let b = document.querySelector(".box");
// let currmode = "light";
// b.addEventListener("click", (evt) => {
//     if (currmode === "light") {
//         currmode = "dark";
//         document.body.style.backgroundColor = "black";
//     }
//     else {
//         currmode = "light";
//         document.body.style.backgroundColor = "white";
//     }
//     console.log(currmode);
// })

let btn = document.querySelector(".box");
let body = document.querySelector("body");
let currMode = "light";
btn.addEventListener('click', ()=> {
    if (currMode === "light") {
    currMode = "dark";
    body.classList.add("black");
    body.classList.remove("white")
}
else {
    currMode = "light";
    body.classList.add("white")
    body.classList.remove("black")
}
})

// function genOTP(length) {
//     let OTP = "";
//     for (let i=0; i<length; i++) {
//         let random = Math.floor(Math.random()*10).toString();   
//         // *10 means generate the number btw 0 to 9
//         OTP += random
//     }
//     // return OTP;
//     console.log(OTP);
// }
// genOTP(6);

// document.getElementById('formid').onsubmit = addEventListener('click', function() {
//     alert("From submitted");
// })
