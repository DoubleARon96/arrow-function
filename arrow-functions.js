/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a,b) {
    return a+b;
}
    let sum = addTwoNumbers(3,5);
    console.log(sum);


// Arrow Function With Parameters
const addTwoNumbersArrow = (a,b) => {
    //Code block
    return a + b;
}
    let sum2 = addTwoNumbersArrow(3,5);
    console.log(sum2);


// Single Line Arrow Function With Parameters
const addTwoNumbersB = (a,b) => (a + b);

let sumB = addTwoNumbersB(3,5);
    console.log(sumB);
//Both are vaild ways to use 
const addTwoNumbers3 = (a,b) => a + b;

let sum3 = addTwoNumbers3(3,5);
    console.log(sum3);


// Implicit Returns
const saysomthing = message => (message);

    let message = ("Hello world !!!!");
    console.log(message);

const sayhello = () => console.log("Hello");
sayhello(); 

// Returning Multiple Lines

const moreThanOneLine = () => (
    `<p>
        goo
        goo
        gadget
    </p>`
);

console.log(moreThanOneLine());
