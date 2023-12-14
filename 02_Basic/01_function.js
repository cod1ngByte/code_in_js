/*
--> function is a block of code that can be used again and again .
--> by defualt function return undefined.
--> if we console.log(function reference ) it will return function defination
--> if we are not passing argument at the time of calling function, function parameter will
   store undefined value.
--> funcion parameter will be defined once the function is call and block of function is executed.
--> we can pass any value(primitive and non-primitive type) in function.
--> return keyword in function automatically exit the function.
*/
function sayMyName() {
  console.log("c");
  console.log("o");
  console.log("d");
  console.log("1");
  console.log("n");
  console.log("g");
  console.log("B");
  console.log("y");
  console.log("t");
  console.log("e");
}

sayMyName(); // function calling (function block is executed).
// console.log(sayMyName()); function block is executed and function returned undefined.
// console.log(sayMyName); function reference is passed so it will print functin defination , it will not execute the function

function addTwoNumber(num1, num2) {
  //num1 and num2 is parameter
  //we don't need to defined parameter using let/const/var keyword
  //num1 and num2 will be defined once addTwoNumber() is called.
  console.log(num1 + num2);
}
addTwoNumber(); // both parameter will store undefined and Number(undefiend) is NaN, so NaN
addTwoNumber(2, 3); // 5
addTwoNumber(2); // num1 = 2 , num2 = undefined --> 2+Number(undefined) --> 2+ NaN = NaN

const result = addTwoNumber(2 + 3); //function will print NaN and since funtion returned undefined is stored in result variable.
console.log(result); // undefined

function sum(num1, num2) {
  return num1 + num2;
  //console.log('hello'); --> unreachable code since return is used before this line.
}

const sumReturned = sum(2, 5); //-->return the 2+5 stored in sumReturned variable.
console.log(sumReturned); //--> 7

//--> if we don't pass argument the function paramert will stored undefined value.
function loginMsg(username) {
  if (!username) {
    console.log("please mention argument will calling loginMsg function");
  } else {
    console.log(`Welcome ${username} `);
  }
}
loginMsg();
loginMsg("cod1ngByte");

// -->passing object in function.
const gameContra = {
  username: "drie",
  score: 45,
};
function handleObject(obj) {
  console.log(
    `username is ${obj.username} and score is ${obj.score} in Contra game`
  );
}
handleObject(gameContra);

// passing array in function

function firstElementInArray(arr) {
  console.log(arr[0]);
}
firstElementInArray([10, 20]); // we can even pass array reference like object reference in above example.

// using rest parameter in function (used in cart item to add)

function calculateCartPrice(...price) {
  //mulitple value in single array
  console.log(price); // it will print array.
}
calculateCartPrice(10, 20, 30);

/*
console.log() is a function in javascirpt which prints the information in console.

*/
