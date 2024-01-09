/*
     numeric separator is used for developer while writing code for better Readability.
     we can use underscore to give meaning  to number since js engine ignore underscore while printing

     we cannot place underscore  (3.1415)
          at begining and ending of number --> _3.1415 | 3.1415_
          in b/w decimal point             --> 3_.1415 | 3._1415
          no two consecutive underscore    --> 3.14__15
     
*/

// 2,87,46,000,000
const diameter = 2_87_46_000_000;
console.log(diameter); //28746000000

const price = 34_599;
console.log(price); //34599

const transferFee1 = 1_500;

const PI = 3.1415;
console.log(PI);

//can not use while converting string to number or parsing to int
console.log(Number("230_000")); //NaN
console.log(parseInt("230_000")); //230
