//comparing two value of same type there is no problem
//but comparing two diff type of value result are little weird so better to convert and compare or
//know the result of two diff type of value

console.log("2" > 3); // 2 > 3 --> false
console.log("2" == 2); // 2 == 2 --> true
console.log("02" == 2); // 2 == 2 --> true

console.log(0 == false); // false == false -->true;
console.log("" == false); //    false == false -> true;

console.log(Boolean(0)); // false
console.log(Boolean("0")); //true;

//null and undefined behave diff in comparison and equality check

// null only equals undefiend ie. null == undefined -- > true

//null and undefined convert to 0 and NaN for Math and comparison operation.

console.log(null > 0); // 0 > 0 -->false
console.log(null == 0); // null only equals undefined other are false.
console.log(null >= 0); // 0 >= 0 -->true

console.log(undefined > 0); //NaN > 0 --> false;
console.log(undefined == 0); //undefined only equals null other are false.
console.log(undefined >= 0); // NaN >= 0 --> false;

console.log(null == undefined); //true
console.log(null === undefined); // false
