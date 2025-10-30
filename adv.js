// synchronous --> means the code in a particular sequence of instruction
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);
// setTimeout("Hello", 2000);


// Asynchronous --> means the code is not in particuler instruction
// console.log("One");
// console.log("Two");
// setTimeout(() => {
//     console.log("Hello");
// }, 2000);
// console.log("three");
// console.log("Four");


// synchronous programming callback
// function sum(a,b) {
//     console.log(a+b);
// }
// function calculator(a,b,sumCallBack) {
//     sum(a,b);
// }
// // calculator(1,2,sum);
// calculator(1,2, (a,b) => {
//     console.log(a+b);
// })


// Asynchronous programming callback
// const hello = () => {
//     console.log("Hello");
// }
// setTimeout(hello, 3000);


// Callback Hell --> Nested callback stacked below one another forming a pyramid structure.
// Database type
// function getData(dataid) {
//     setTimeout(() => {
//         console.log("data", dataid);
//     }, 3000);
// }
// getData(1); getData(2); getData(3);


// username or password
// function getData(Dataid, nextId) {
//     setTimeout(() => {
//         console.log("data", Dataid);
//         if(nextId) {
//             nextId();
//         }
//     }, 2000);
// }
// getData(1, () => {
//     console.log("Getting data 2....")
//     getData(2, () => {
//         console.log("Getting data 3....")
//         getData(3, () => {
//             console.log("Getting data 4....")
//             getData(4);
//         });
//     });
// });



// promises --> It is a solution for callback hell
// let promises = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("successful");
//     reject("Some error occured");
// });

// function getData(dataId, nextDataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("Data", dataId);
//             // resolve("successful");
//             reject("some error");
//             if(nextDataId) {
//                 nextDataId();
//             }
//         },3000);
//     });
// }
// let pro = getData(123);



// .then and .catch promise .then for resolve promise and .catch for reject promise
// Synchronous 
// function getPromise() {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // resolve("Successful");
//         reject("Gives some error");
//     });
// };
// let promise = getPromise();
// // promise.then(() => {
// //     console.log("Promise successful");
// // })
// promise.catch(() => {
//     console.log("Promise unresolve");
// })



// Asynchronous 
// function asynFun() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data");
//             resolve("success");
//         }, 3000);
//     });
// }
// function asynFun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Some data");
//             resolve("Data received");
//         }, 3000);
//     });
// }
// 1st way to call promise
// asynFun().then((data) => {
//     console.log(data);
//     asynFun().then((data) => {
//         console.log(data);
//     })
// })



// 2nd way to call promise
// let p1 = asynFun1();
// p1.then((res) => {
//     console.log(res);
// })

// let p2 = asynFun2();
// p1.then((ans) => {
//     console.log(ans);
// })



// 3rd way to call Promise
// console.log("Fetching data1...");
// let p1 = asynFun();
// p1.then((res) => {
//     console.log("Fetching data2...");
//     // console.log(res);
//     let p2  = asynFun();
//     p2.then((res) => {
//         console.log("Fetching data3...");
//         // console.log(res);
//         let p3 = asynFun();
//         p3.then((res) => {
//             console.log(res);
//         })
//     })
// })



// previous callback hell converted into promise
// function getData(Dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", Dataid);
//         resolve("success");
//     }, 2000);
//     });
// }
// getData(1).then((res) => {
//     return getData(2);
// })
// .then((res) => {
//     console.log(res);
// })



// Async-Await --> always return a promise, pause the execuation of the surrounding async function until the promise is settled
// function upi() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             console.log("UPI payment done");
//             resolve("UPI payment successful");
//         }, 3000);
//     });
// };
// async function getpayment() {
//     await upi();
//     await upi();
// }

// function getData(Dataid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         console.log("data", Dataid);
//         resolve("success");
//     }, 2000);
//     });
// }
// // async function getAllData() {
// //     await getData(1);
// //     await getData(2);
// //     await getData(3);
// //     await getData(4);
// //     await getData(5);
// // }
// (async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// })();