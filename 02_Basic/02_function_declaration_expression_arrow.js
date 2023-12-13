/*
function declaration are hoisted means the enitere function declaratin is move at the top
   of the CONTAINING SCOPE, allowing you to call function before it is actually declared in the code.

function expression involve creating a function and assigning to a variable(since we know
   expression return a value and value must be stored in variable, similarly in function expression.)

function expression often used when we need to create function dynamically.


eg.
---------------------------------------------------------------------------------
var operation = (Math.random() > 0.5) ? 
  function(a, b) { return a + b; } :
  function(a, b) { return a * b; };

console.log(operation(2, 3)); // Result can be addition or multiplication
----------------------------------------------------------------------------------


function executeOperation(a, b, operation) {
  return operation(a, b);
}

var addition = function(a, b) { return a + b; };

console.log(executeOperation(5, 3, addition)); // Outputs 8


function executeOperation(a, b, operation) {
  return operation(a, b);
}

var addition = function(a, b) { return a + b; };

console.log(executeOperation(5, 3, addition)); // Outputs 8

-------------------------------------------------------------------------------------

var greetingFunction;

if (userLoggedIn) {
  greetingFunction = function() {
    console.log("Welcome back!");
  };
} else {
  greetingFunction = function() {
    console.log("Please log in.");
  };
}

greetingFunction(); // Outputs either "Welcome back!" or "Please log in."
------------------------------------------------------------------------------------
*/

// --->funtion declaration--------------------------------------------------------

// const age1 = calcAge1(1999); --> 31 (hoisting in function declaration)

function calcAge1(birthYear) {
  const age = 2030 - birthYear;
  return age;
}
const age1 = calcAge1(1999);
console.log(age1);

// ----> function expression-------------------------------------------------------
// const age2 = age2(1999); // error (no hoisting in function expression)

const calcAge2 = function (birthYear) {
  const age = 2030 - birthYear;
  return age;
};

const age2 = calcAge2(1999);
console.log(age2);

// ---->arrow function -- simplied version of function expression

const calcAge3 = (birthYear) => {
  const age = 2030 - birthYear;
  return age;
};

const age3 = calcAge3(1999);
console.log(age3);

// --->explicit return in arrow function

const addTwo = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
console.log(addTwo(40, 20));

//----> implicit return in arrow function
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(20, 30, 40));

//--> return object using implicit return in arrow funcion

// const user1 = ()=>{username : 'drie', score : 50};

const user1 = () => ({ username: "drie", score: 50 }); // return reference of object.
console.log(user1());
console.log(user1);
