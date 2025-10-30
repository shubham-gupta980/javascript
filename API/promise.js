// let promise = new Promise(function(resolve, reject) {  // function with two handler
//     // do async task like db call, cryptography and network
// setTimeout(() => {
//     console.log("Async task is complete")
//     resolve();  // connected with then
// }, 1000);
// });

// promise.then(()=> {   // It is the connection of the resolve handler
//     console.log("Successful");
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async2 is completed");
//         resolve();
//     })
// }).then(() => (console.log("Async2 is resolve")))


// let promise = new Promise(function(resolve, reject) {
//     console.log("Promise compelete");
//     resolve("Successful");
//     reject("reject");
// })

// const dataConsumption = new Promise(function(resolve, reject) {
//     setInterval(function() {
//         resolve(
//             {username: "Shubham", email: "shubham@123", password: "1230432624"} // pass anything like array object function etc.
//         )
//     },1000)
// }).then(function(result) {
//     console.log(result);   
// })


// const rej = new Promise(function(resolve, reject) {
//     let error = true;
//     if (!error) {
//         resolve({username: "Shubham", pass: "12345"})
//     }
//     else {
//         reject("ERROR: Something went wrong")
//     }
// })
// rej.then(function(rev) {
//     console.log(rev);
//     return rev.username  
// }).then((push)=> {
//     console.log(push)
// }).catch(function(myuser) {
//     console.log(myuser)
// }).finally(()=> console.log("The promise is either resolve and rejected"))

// Using Async await
// const rej = new Promise(function(resolve, reject) {
//     let error = true;
//     if (!error) {
//         resolve({username: "Shubham", pass: "12345"})
//     }
//     else {
//         reject("ERROR: Something went wrong")
//     }
// })

// // this is not handles the error directly
// async function consumeRej() {  
//     try {
//         const response = await rej
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumeRej();


// fetch using async await

// async function getAllUser() {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/users')
//     // console.log(promise); 
//     // const data = promise.json();
//     // console.log(data);  // time taken process so this is display pending
//     const data = await promise.json();
//     console.log(data);
// }
// getAllUser();

// same using promises means .then() and .catch()

// const data = fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response) {
//     return response.json()
// }).then(function(data1) {
//     console.log(data1)
// }).catch(function(err) {
//     console.log(err);  
// })

// mdn references
// To experiment with error handling, "threshold" values cause errors randomly
const THRESHOLD_A = 8; // can use zero 0 to guarantee error

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const randomInt = Date.now();
    const value = randomInt % 10;
    if (value < THRESHOLD_A) {
      resolve(value);
    } else {
      reject(new RangeError(`Too large: ${value}`));
    }
  }, 500);
}

function determineParity(value) {
  const isOdd = value % 2 === 1;
  return { value, isOdd };
}

function troubleWithGetNumber(reason) {
  const err = new Error("Trouble getting number", { cause: reason });
  console.error(err);
  throw err;
}

function promiseGetWord(parityInfo) {
  return new Promise((resolve, reject) => {
    const { value, isOdd } = parityInfo;
    if (value >= THRESHOLD_A - 1) {
      reject(new RangeError(`Still too large: ${value}`));
    } else {
      parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
      resolve(parityInfo);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
    return info;
  })
  .catch((reason) => {
    if (reason.cause) {
      console.error("Had previously handled error");
    } else {
      console.error(`Trouble with promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("All done"));