/*
falsy value not exactly false but will be false if converted to Boolean.
falsey value ::
            1. false
            2. 0
            3. -0
            4. 0n
            5. ""(empty string)
            6. null
            7. undefined
            8. NaN
            

other than these every other value is truthy value
*/

//all false
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// all true
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function f1() {}));

if (Infinity) {
  console.log("true");
}
if ("false") {
  console.log("true");
}
if (new Date()) {
  console.log("true");
}
if ("0") {
  console.log("true");
}

//----------------------------equallity-------------------
/* 
 1. ==   -->> lose equality operator does coercion
 2. ===  -->> strict equality operator doesn't perform any type conversion

 */
if ("18 " == 18) {
  // '18' is converted to 18 as number and compare.
  console.log("coercion");
}

if ("18" === 18) {
  //
  console.log("");
} else {
  console.log("strict equality no coercion");
}
