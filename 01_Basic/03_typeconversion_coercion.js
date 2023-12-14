/*
value in JS can be of different type and we want to convert from one type to another for certain operation ie type conversion.
Type conversion can be implicit (auto done during operation by js) or explicit (done by the developer).
Implicit type conversion is also known as Coercion while explicit type conversion is known as Type casting.

in js we can convert to string | number | boolean but we can not convert to null | undefined.
*/

//usually input are in string.

const inputYear = "1991";
console.log(inputYear + 18); //199118 (concatenate)

//conversion of string to number
console.log(Number(inputYear) + 18); // 2009 , no changes in inputYear variable

// converting into number which is not possible to convert in number;

const gameName = "contra";
console.log(Number(gameName)); // NaN( invalid number) typeof NaN is number
console.log(typeof NaN);

// converting to string
console.log(String(1991)); // '1991'

//----------------------------------------------COERCION-----------------------------

console.log("I am " + 18 + " years old"); //convert 18 into string
//whenever there is conversion between string and number with + operator it will auto convert into string.
// but with other operator it will auto convert into number.
// other than + operator every other operator(- | * | / | % | > | >= | < | <= | ==) it auto convert into number.

console.log("23" - 10 - "3"); // 10 as number
console.log("23" + 10 + "3"); // 23103 as string
console.log("23" * 2); // 46 as number
console.log("23" / 2); //11.5

console.log("23" > 18); // true
console.log("23" > "18"); //true

let n = "1" + 1; // 11 as string
n = n - 1; // 11 - 1 = 10
console.log(n); // 10 as number

console.log(2 + 3 + 4 + "5"); //8 + '5' --> 95 as string
console.log("10" - "4" - "3" - 2 + "5"); // 1 + '5' --> 15 as string

//converted to number if + is before variable or value; --> simple number conversion

console.log(+true); // true to number is 1
let isloggedin = true;
console.log(+isloggedin); //1 as number

console.log(+""); // empty string to number is 0;
