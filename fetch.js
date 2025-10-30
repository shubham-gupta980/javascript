// https://api.agify.io?name=meelad
// const URL = "  https://api.agify.io?name=meelad  ";
// let promise = fetch(URL);
// console.log(promise);

// using async/await function
const factPara = document.querySelector(".para");
const btnn = document.querySelector("#btn");
const URL = async () => {
    console.log("Getting data");
    let response = await fetch(" https://randomuser.me/api/");
    console.log(response);
    let data = await response.json();
    // console.log(data.results[0].picture);
    // console.log(data.results[0].registered);
    // factPara.innerText = data.results[0].registered;
};

// btnn.addEventListener("click", URL);