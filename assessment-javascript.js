
// Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function demostrateParameter(a, b, operation) {

    return operation(a, b);
}

function add(a, b) {

    return a+b;
}

function subtract(a, b) {

    return a-b;
}

let addition = demostrateParameter(2, 3, add);
let subtraction = demostrateParameter(5, 2, subtract);

console.log(addition);
console.log(subtraction);


// Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments  Roger and Waters, the function returns ‘RW’. Write this function.

let first_second = (first, second) =>
    first.charAt(0) + second.charAt(0);

let ans = first_second("Akash", "Rawat");
console.log(ans);

// Q3 

function getData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
            }, 4000);
    });
}

async function correctFunction() {

    console.log("start");
    let email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

correctFunction(); 