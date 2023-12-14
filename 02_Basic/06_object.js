/*

   object in js is key value pair where key is of type string and value can of any type(
      primitive or non-primitive type)
   if we try to access property of object which is not defined it will return undefined
   accesing object value using dot notaion and bracket notation
   while using bracket notation make sure it is in string.-->jsUser['firstName']
*/

const jsUser = {
  firstName: "cod1ng",
  lastName: "Byte",
  age: 18,
  location: "Bokaro",
  email: "abc@xyz.com",
  lastLoginDay: ["mon", "tues"],
  greeting: function () {
    console.log("hello");
  },
};

console.log(jsUser);

//--> accesing object value using dot notaion and bracket notation

console.log(jsUser.firstName);
console.log(jsUser["lastName"]); // while using bracket notation make sure it is in string.
//we can put any expression inside bracket which will result as one of the property of object

const nameKey = "Name";
console.log(jsUser["first" + nameKey]);
console.log(jsUser[`last${nameKey}`]);

//--> we can use expression in dot notaion
// console.log(jsUser.'first'+nameKey);//error unexpected string

//--> if we try to access property of object which is not defined it will return undefined.
console.log(jsUser.friends); //-- undefined
console.log(jsUser["friends"]); //--undefined

//--> adding property in object

jsUser.job = "s/w developer";
jsUser["friends"] = ["a", "b", "c"];

console.log(jsUser);

console.log(
  `${jsUser.firstName}${jsUser.lastName} has ${jsUser.friends.length} friends and his best friends is ${jsUser.friends[1]}`
);

//-- dot has more precedence than [], so first dot got access than [] in jsUser.friends[1]

//--dot has left to right associativity, so jsUser.friend got access which array then array.length got access.

///--> accessing method from object

console.log(jsUser.greeting); // it print reference of function
console.log(jsUser.greeting()); // now method of object is executed and method return undefined.
