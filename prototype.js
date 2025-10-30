// const student = {
//     fullName: "Shubham gupta", 
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks: ", marks);
//     }
// }

// prototype: It is the special type of object in js which is used to add properties and methods. It takes reference of an object
// const employee = {
//     calcTax1() {
//         console.log("Tax rate is 10%");
//     },
//     calcTax2: function() {
//         console.log("Tax rate is 20%")
//     }
// }

// // __proto__ method
// const employe = {
//     calctaks1() {
//         console.log("Tak rate is 10%")
//     },
// };
// const karanArjun = {
//     // calcTaxe2: function() {
//     //     console.log("Tax rate is 20%");
//     // },
//     calctaks1() {
//         console.log("Tax rate is 20%");
//     },
//     salary: 50000,
// };

// const karanArjun2 = {
//     salary: 50000,
// };
// const karanArjun3 = {
//     salary: 50000,
// };
// const karanArjun4 = {
//     salary: 50000,
// };
// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;

// reference of object
// karanArjun.__proto__ = employee;

// classes --> It is a blueprint and templete for creating an object or create same function using multiple objects
// class ToyotaCar {
//     start() {
//         console.log("Car started");
//     }
//     stop() {
//         console.log("Car stopped");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
//     setModelNum(ModelNum) {
//         this.setModel = ModelNum;
//     }
// }
// let fortuner = new ToyotaCar();
// // fortuner.start();
// fortuner.setBrand("Fortuner");
// fortuner.setModelNum("2021");
// let tesla = new ToyotaCar();
// tesla.setBrand("Tesla");
// tesla.setModelNum("2025");

// constructor in classes
// class ToyotaCar {
//     constructor(brand, modelNum) {  // create a constructor and pass parameters
//         this.brand = brand;
//         this.modelNum = modelNum;
//     }
//     start() {
//         console.log("Car started");
//     }
//     stop() {
//         console.log("Car stopped");
//     }
// }
// let fortuner = new ToyotaCar("Fortuner", "2021")
// console.log(fortuner);
// let luxes = new ToyotaCar("Luxes", "2020");
// console.log(luxes);

// inheritence in classes
// class teacher {
//     teach() {
//         console.log("Teaching");
//     }
//     eat() {
//         console.log("Eating");
//         }
// }
// class student extends teacher {
//     study() {
//         console.log("Studying");
//     }
//     play() {
//         console.log("Playing");
//     }
// }
// let shubham = new student();
// shubham.teach();
// shubham.study();

// class parent {
//     constructor(name,honor) {
//         console.log("parent constructor entered");
//         this.name = name;
//         this.human = honor;
//     }
//     eat() {
//         console.log("Eating");
//     }
// }
// class child extends parent {
//     constructor(branch)  {
//         console.log("Child constructor entered");
//         super("Subhaam", "Human");
//         this.branch = branch;
//         console.log("Child constructor exited");
//     }
//     work() {
//         super.eat();
//         console.log("Work hard, build your future")
//     }
// }
// let shubhhObj= new child("CSE");  // constructor automatically envoked by new class
// shubhhObj.eat();

// Q1 --> you are creating a website for you college create a class called user with 2 properties name and email and also have a method called viewData() that allow user to view website data

// class user {
//     // name() {
//     //     this.name = name
//     // }
//     // email() {
//     //     this.email = email;
//     // }
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log(`Name : ${this.name}, Email: ${this.email}`);
//     }
// }
// let user1 = new user("Shubham", "sg123456@gmail.com");
// // user1.name = "Shubham Gupta";
// // user1.email = "sg1234567@gmail.com";
// // user1.viewData();

// Q2 --> Create a class called admin which inherit from user add a new mwthod called editData to admin that allows it to edit website data
// let data = "All information is hidden";
// class User {
//          constructor(name, email) {
//          this.name = name;
//          this.email = email;
//      }
//      viewData() {
//         console.log("Data: ", data);
//      }
// }
// class Admin extends User{ 
//     editData() {
//         data = "some new value";
//     }
// }
// let admin = new Admin("Shubham", "email@123")


// Error Handeling
// let a = 10;
// let b = 5;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);
// try{
//     console.log("a + b = ", a + c);
// }
// catch (err) {
//     console.log(err);
// }
// console.log("a + b = ", a + b);
// console.log("a + b = ", a + b);