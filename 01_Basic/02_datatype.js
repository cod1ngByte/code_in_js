/*
In js value can be :--
                     1. Primitive type
                     2. Non-Primitive type(Object type)

Primitive Type -->
   1. number(Decimal,integer)    ---> 123 | 123.45
   2. string (sequence of character)--->can be used in single quote | double quote but not both at same time | backtick
   3. boolean                    ---> true | false
   4. undefined ( when we declare the variable but not assign any value to it not even null and try to access it)
   5. null (means empty value that doesn't mean 0 or ""(empty string))
   6. symbol (value that is unique and cannot be changed)
   7. bigint (larger integer value than number type can't hold )

*/

let score = 33;
let gameName = "contra";
let isLoggedInd = true;
let state = "";
console.log("state : " + state); //empty string
let temp = 0;
console.log("temp :" + temp); //0
console.log("assigning null to state and temp");
state = null;
console.log("state : " + state);
temp = null;
console.log("temp :" + temp);

/*
   JS is dynamic type means we do not have to specify the data type to variable it is going
   to stored it unlike in C++ or java
   eg. let x = 16;  --> x is of number type
         x = 'contra' --> here x is of string type
   
   with the help of typeof operator we can check the type of value the variable is holding 
   or directly we can check the typeof value.

*/
let firstName;

console.log("typeof --->");
console.log(typeof 34); //---> number
console.log(typeof 3.14); //--->number
console.log(typeof score); //---> number
console.log(typeof gameName); //-->string
console.log(typeof isLoggedInd); //---> boolean
console.log(typeof undefined); //---> undefined
console.log(typeof firstName); //---> undefined
console.log(typeof null); //---> object
console.log(typeof NaN); //---> number
