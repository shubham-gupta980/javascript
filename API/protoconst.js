// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
    
//     // return this
// }
// const userOne =new User("anshul", 26, 22);
// const userTwo =new User("shourya", 32, 22);
// console.log(userOne);
// console.log(userOne.constructor);
// console.log(userTwo);

// function multiplyBynum(num) {
//     return num*5;
// }
// multiplyBynum.power = 2;
// console.log(multiplyBynum(5));
// console.log(multiplyBynum(multiplyBynum.power));
// console.log(multiplyBynum(multiplyBynum.prototype));


// function createUser(username, score) {
//     this.username = username;
//     this.score = score;
// }
// createUser.prototype.increment = function() {  // cretae a prototype and adds some value(function)
//     this.score++;
// }
// createUser.prototype.printMe = function() {
//     console.log(`price is ${score}`);   
// }

// const chai = new createUser("Chai", 25); // Additional properties are injected compeletely inside the function but when we store into a variable the variable does not known (ussko btana padega) then we can use the (new) keyword
// const coffee = createUser("Coffee", 100);
// chai.printMe()

// Here what happens behind the scene when the new keyword is used: 

// A new keyword is created: The new keyword initiates the creation if the new js Object

// A prototype is linked: the newly created object is linked to the prototype properties of the constructor function. This means that it has access to properties and method defined on the constructor prototype

// The constructor is called: The constructor function is called with the specified argument and this is bound to be the newly creates object if no explicitely return value is specified from the constructor. Javascript assumed this, the newly creates object, to be the intended return value

// The new object is returned: After the constructor function has been called if it does not return the premitive value (object, array, function etc) the newly created object is reture.

// let heros = ["thor", "spiderman"];
// let heropower = {
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderpower: function() {
//         console.log(`spidy power is ${this.spiderman}`); 
//     }
// }

// Object.prototype.shubham = function() {
//     console.log(`shubham is present in all object`);
    
// }
// Array.prototype.heyShubham = function() {
//     console.log(`hello shubham is present in this array`)
// }
// heropower.shubham()
// heros.shubham()    // accessible bcoz you can create a object prototype and object prototype call everywhere
// heropower.heyShubham();   // not accessible bcoz you can create array prototype and call the object function
// heros.heyShubham()  

// Prototypel Inheritance: kessi or ke property ko access kr lena
// const user = {
//     name: "username",
//     email: "username@gmail.com",
// }
// const Teacher = {
//     makeVideo: true
// }
// const TeachingSupport = {
//     isAvailable: true
// }
// const TAsupport = {
//     makeAssignment: "js Assignment",
//     filltime: true,
//     __proto__: TeachingSupport,  // prototype reference to the teaching support
// }
// Teacher.__proto__ = user

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher);
// let anotherUsername = "ChaiorCode      ";
// String.prototype.trueLength = function() {
//     console.log(`${this}`)
//     // console.log(`${this.name}`)
//     console.log(`True length is ${this.trim().length}`);
// }
// anotherUsername.trueLength();
// "shubham".trueLength();
// "IceCream".trueLength();


// Call and This in javascript
function setUsername(username) {
    this.username = username  
    console.log("Working");
}
function createUser(username, email, password) {
    // this.username = username
    // setUsername(username)
    setUsername.call(this, username)  // technically in js this function pass reference but also called function the error gives bcoz of execuation context
    // call :- holds the reference
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@gmail.com", "chai@123");
console.log(chai);
