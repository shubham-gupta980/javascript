// Array is the collection of items (Mutable).

// let herios = ["Batman", "Spiderman", "Ironman", "Hanuman"];
// console.log(herios);
// console.log(herios[0]);
// console.log(herios[1]);
// console.log(herios[2]);
// console.log(herios[3]);

// let num = [22,33,44,55,66,77,88,100];
// console.log(num);

// Looping in arrays
// for (let i=0; i<herios.length; i++) {
//     console.log("Herios ${i} = ", herios[i]);
// }

// let cities = ["Mumbai", "Delhi", "Lucknow", "Varanashi", "Ballia", "Ghazipur"];
// for (let city of cities) {   // this loop is use to print the actual value
//     console.log(city.toUpperCase());
// }

// for (let city in cities) {
//     console.log(city);    // this loop is use to print to idex if the iteams
// }

// for (let items of herios) {
//     console.log(items);
// }


// Q1 WAP to print the average class of the student using an array
// let num = [85,97,44,37,76,60];
// let sum = 0;
// for (let i=0; i<num.length; i++) {
//     sum += num[i];
// }
// let avg = sum/num.length;
// // console.log("The average of the numbers is: ", avg);
// console.log(`avg marks of the class = ${avg}`);

// Q2 for a given array with prices of 5 items {array}. All items have an offer of 10% off of them 
// let price = [250, 645, 300, 900, 60];
// console.log("Original price", price);
// for (let i=0; i<price.length; i++) {
//     let offer;
//     offer = price[i]/10;
//     price[i] = price[i] - offer;
// }
// console.log("After discount", price);


// Using for of loop 
// let price = [250, 645, 300, 900, 60];
// let i=0;
// for(let items of price) {
//     console.log("Original price", items);
//     let offer = items/10;
//     price[i] = price[i] - offer;
//     console.log("After discount ", price);
//     i++;
// }


// Arrays methods  --> jo original code per work krte hai
let cities = ["Delhi", "Lucknow", "Panjab", "Haryana", "Gurgoan", "Varanashi", "Ghazipur"]
let cities2= ["Chappra", "Sarnath", "Janupur"];
let cities3 = ["Gola", "Gonda"];
// cities.push("Ballia");
// cities.pop(8);
// cities.toString();
// cities.concat(cities2, cities3);
// cities.unshift("Rambhag");
// cities.shift();
// cities.splice(2,4);
// cities.splice(2,2,"Agra");
// cities.splice(2,0,101);  ---> Add Element
// cities.splice(0,3,1);  --> Remove element
// cities.splice(3,1,101);  ---> Replace element
