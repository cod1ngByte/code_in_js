/*
In javascript array are resizeable
array element can be of any type ie. Primitive and non-primitive both.
zero based index
javascript array copy operation create shallow copies 

shallow copy --> same reference is shared ie. changed in original array
deep copy --> refenrence is not shared ie. changes doesn't effect original array.

*/

const myArr = [
  10,
  "cod1ngByte",
  false,
  null,
  undefined,
  { username: "drie", score: 55 },
  [1, 2, 3],
  function () {
    console.log("hello world");
  },
];

console.log(myArr);

//accessing element in an array

console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]); //reference is stored
console.log(myArr[6]); //reference is stored
console.log(myArr[7]); // function reference
console.log(myArr[7]()); // function executed and returned undefined

//number of element in an array

console.log(myArr.length);

//last element of an array
console.log(myArr.lenght - 1);

//---------------------------array reference assignment-------------------------
const arr = [1, 2];
// arr = [1, 2]; // assignment to constant not possible since this array reference is different from above array reference

let arr1 = [20, 30];
arr1 = [10]; // now arr1 is assigned to new reference of [10]
console.log(arr1);
