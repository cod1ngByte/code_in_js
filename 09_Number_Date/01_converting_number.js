/*
     Apart from string and array two different way to represent data is number and date.

     In javascript number is represented internally as floating-point numbers.
     eg. console.log(23 === 23.0) --> true

     number are stored in 64 bit

     Every input in HTML element is considered as string type.
     javascript provide parsing method to convert a number string into number,
          numeric string is string which start with a number and  contain string literals, 
          but while converting using parseInt() and parseFloat() method 
          it will convert before the first string character.
*/

console.log(23 === 23.0); //true
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

//---------------------------------------converting string into number using Number()-----------------------

console.log(Number("25"));

//or we can using + op before number
console.log(+"25");
console.log(+"24px"); // NaN

//---------------------------------------parsing-------------------------------------------------------------
//for numeric string

console.log(Number.parseInt("20px")); //20
console.log(Number.parseInt("20abdchldfds")); //20
console.log(Number.parseInt("rajiv20")); //NaN

console.log(Number.parseInt("2.56rem")); //2
console.log(Number.parseFloat("2.56rem")); //2.56

console.log(Number.parseInt("A") + 10); //NaN + 10 = NaN

//-------------------------------------checking value is NaN or not------------------------------------
//isNaN() return true if value is not a number
//        return false if value is number

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN("20")); //false
console.log(Number.isNaN(+"20px")); //true

console.log(Number.isNaN(20.5)); //false
console.log(Number.isNaN(20 / 0)); //false

//-------------------------------------check if value is number or not ---------------------------------

console.log(Number.isFinite("20")); //false
console.log(Number.isFinite(20)); //true

console.log(Number.isFinite(2.5)); //true
console.log(Number.isFinite(+"20.5")); //true
console.log(Number.isFinite(+"20.5px")); //false
console.log(Number.isFinite(20 / 0)); //false
