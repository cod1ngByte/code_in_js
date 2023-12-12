//datatype are divided according to how data are stored in memory
//and how it accessed.

//1. Primitive type (copy of data is passed not the original data..ie. call by value)

/*              type
1. number       number
2.string        string
3.boolean       boolean
4.null          object
5.undefined     undefined
6.Symbol        Symbol
7.bigInt        bigint

*/

let score = 33;
let name = "rajiv";
let isLoggendIn = true;
let outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // both are diff so false;

let bigNumber = 99999999999999999999n;
console.log(bigNumber);
console.log("bigInt type is: " + typeof bigNumber);

/*Non - Primitive type (reference type)

1. Array
2. Object
3. Function

*/

const nokia = ["5233", "lumia920", "galaxy"];
console.log("array type: " + typeof nokia); //object

const myObj = {
  name: "rajiv",
  score: 33,
};
console.log("object type: " + typeof myObj); // object

const myFun = function () {
  console.log("non-primitive type");
};
console.log("function type: " + typeof myFun); // function object -- > function
