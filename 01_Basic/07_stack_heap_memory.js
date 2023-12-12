//Two type of memory is there in javascript to store value.
//1. Stack memory used in primitive type
//              (copy of data is manipulated not the original data ie. call by value)
//2. Heap memory used in reference type or non-primitive type
//              (original data is manipulated ie. call by reference)

//eg of primitive type
let myName = "Rajiv";
let anotherName = myName; // data of myName is copied i.e. 'Rajiv'

console.log(myName); //'Rajiv' --> original value
console.log(anotherName); //'Rajiv' --> copy of original

anotherName = "DeByte"; // copy is changed not the original one
console.log(anotherName); //'DeByte'
console.log(myName); //'Rajiv'

//reference type
let user1 = {
  email: "user1@xyz.com",
  upi: "user1@ybl",
};
let user2 = user1; // reference is copied ie. manipulation will be on original data.

user2.email = "user2@xyz.com";

console.log(user1.email);
console.log(user2.email);
