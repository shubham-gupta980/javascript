// for loops
// let sum = 0;
// for (let i=1; i<=5; i++) {
//     sum += i;
// }
// console.log(sum);

// for (let i=1; i<10000; i++) {
//     console.log("Shubham");
// }
// console.log("Loop has ended")

// for(let i=0; i<=10; i++) {
//     console.log("i =", i)
// }

// while loop
// let i = 0;
// let sum =  0;
// while(i<=10) {
//     sum += i;
//     i++;
// }
// console.log("sum = ", sum);
// console.log("Hello");

// let i =0;
// while(i<10) {
//     console.log(i);
//     i++;
// }

// Do while loop
// let i=1;
// do {
//     console.log("JS!")
//     i++;
// }while(i <= 10);

// for-in and for-of loops ---> used to add String and Arrays
// let str = "Shubham Gupta";
// let count = 0;
// for(let i of str) {
//     console.log("i = ", i);
//     count++;
// }
// console.log("Count = ", count);

// let student = {
//     fullName : "Shubham",
//     age : 21,
//     cpga : 8.31,
//     isPass : true,
// };
// for (let key in student) {
//     console.log("key = ", key, " Value = ",student[key]);
// }

// Q1 WAP to print the even number between (0 to 100)
// for (let count=0; count<=100; count++) {
//     if (count%2 == 0){
//         console.log(count);
//     }
// }

// Q2 WAP to create a game where the user guess the correct number
// let guessNum = 25;
// let userNum = prompt("Enter the number between 1 to 100")
// while(guessNum != userNum) {
//     userNum = prompt("NUmber is wrong try again");
// }
// console.log("Congratulation! you guess the correct number");

let guessNum = 25;
let userNum = prompt("Enter the number between 1 to 100")
while(guessNum != userNum) {
    if(userNum>guessNum) {
        console.log("Enter the smaller number")
        userNum = prompt("NUmber is wrong try again");
    }
    else if(guessNum > userNum) {
        console.log("Enter the larger number");
        userNum = prompt("NUmber is wrong try again");
    }
}
console.log("Congratulation! you guess the correct number");