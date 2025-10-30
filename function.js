// function fullName() {
//     console.log("Welcome to VS code");
//     console.log("We are learning JS!")
// }
// fullName();  // No of function call == no of print\

// function print(msg) {    // pass parameter -- In function definition
//     console.log(msg);
// }
// print("Print the message");   // Argument -- In function call

// function sum(m,n) {
//     console.log(m+n);
// }
// sum(22,22);

// function Issum(m,n) {
//     return m+n;
// }
// console.log(Issum(2,6));

// function sum(x, y) {
//     // local variable --> work on a particular block
//     let s = x+y;
//     console.log("before return");
//     return s;
//     console.log("After return");  // After return you can't write a code(code reachable)
// }
// let val = sum(3,4);
// console.log(val);

// Arrow function
// const arrowSum = (a,b) => {  // const is a variable and the arrowsum is the value store in variable and other parts are Arrowfunction
//     console.log(a + b);   // we can also return in arrowfunction
// }

// const printhello = () =>{
//     console.log("Hello JS!");
// }

// Q1 Create a function using a "function" keyword that takes a string as an argument & return the number of vowels in the string
// and create the same using a function

// function countVowel(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// return count
// }

// const countVowel = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char ==="o" || char === "u"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// for each loop in array
// let cities = ["Varanashi", "Ballia", "Delhi", "Mumbai"];
// cities.forEach(function value(val,idx,array) {
//     console.log(val, idx, array);
// })

// let arr = [12,23,35,46,56,67,88,89];
// arr.forEach((val) => {
//     console.log(val);
// })

// Q1 -> for a given array of numbers printthe square of each value using for each loop
// let val = [22,44,66,88,100];
// let calcSquare = (val) => {
//     console.log(val * val);
// }
// val.forEach(calcSquare);

// let arr = [12,13,14,15,16,17];
// arr.forEach((val) => {
//     console.log(val*val);
// })

// Function method in javascript
// 1. Map mathod
// let arr = [12,13,14,15,16,17];
// arr.map((val, idx, array) => {
//     console.log(val, idx, array);
// })

// let newArray = arr.map(function app(num) {
//     return num*num;
// })
// console.log(newArray);

// 2. Filter method  --> create new array this statement is used for condition
// let num = [1,2,3,4,5,6,7,8,9,10];
// let newArray = num.filter((val) => {
//     // console.log(val);
//     // return val%2 === 0;  --> even
//     // return val%2 !== 0;  --> odd
//     return val > 3;
// })
// console.log(newArray);

// 3. Reduce method  --> perform some operation and return a single value
// let num = [1,2,3,4,5,6,33,7,8,9,10];
// const output = num.reduce((prev, next)=> {
//     // return prev + next; --> add all numbers
//     return prev > next ? prev : next;
// })
// console.log(output);

// Q1 --> We are given an array of marks student. find out the marks of students that scored 90+
// let marks = [89,90,98,97,92,87,98,100];
// const students = marks.filter((bef, aft) => {
//     return (bef || aft) > 90? bef: aft;
// })
// console.log(students);

// Q2 --> take a number as an input from user and create an array of 1 to n.
// . use the reduce method to calculate sum of all number in an array
// . use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter the number");
let arr = [];
for (let i=1; i<=n; i++) {
    arr[i] = i;
}
console.log(arr);

let sum = arr.reduce((n,m)=> {
    return n+m;
})
console.log("sum =", sum);

let fact = arr.reduce((n,m) => {
    return n*m;
})
console.log("factorial =", fact);