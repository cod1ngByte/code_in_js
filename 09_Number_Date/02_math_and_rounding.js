/*
     Math works with the number type only not with BigInt
     All properties and method of Math are static.
     it does type coercion

*/
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //2 --> only way to find cuberoot

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, "23", 11, 2)); //23  -->type coercion
console.log(Math.max(5, 18, "23px", 11, 2)); //doesnt do parsing --->NaN

console.log(Math.min(5, 18, 23, 11, 2)); //2

//finding area of circle

console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.trunc(Math.random() * 6)); // -->[0,1)
console.log(Math.trunc(Math.random() * 6) + 1); // -->[0,1]

const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0...(max - min) -> min...(max-min) --> min....max
// Math.trunc() simply remove any decimal part
console.log(randomInt(10, 20)); //-->[10,20]

//------------------------------- ----Rounding integers-----------------------------------------
//Math.round() --> round to nearest number
console.log(Math.round(23.3)); //23
console.log(Math.round(23.4)); //23
console.log(Math.round(23.5)); //24
console.log(Math.round(23.9)); //24

console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24

console.log(Math.floor(23.3)); //23
console.log(Math.floor("23.9")); //23 -->does type coercion too

console.log(Math.trunc(23.3)); //23

//---------------------------------------Math.trunc() and Math.floor()--------------------------------------

console.log(Math.trunc(-23.3)); //-23
console.log(Math.floor(-23.3)); //-24

//always use Math.floor() since it deal with -ve and +ve number

//------------------------------------------- Rounding decimals-------------------------------------------
//toFixed() return the number in string
console.log((2.7).toFixed(0)); //result in string
console.log((2.7).toFixed(3)); //result in string
console.log((2.345).toFixed(2)); //result in string
console.log(+(2.345).toFixed(2)); // result in number after converting
