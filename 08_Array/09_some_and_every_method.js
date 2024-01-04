//if atleast one (or any) of the condition is true in an array it will return true else false
//includes() used to do equality check
//some() check the condition which ever u pass in call back function

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//equality check
console.log(movements.includes(-300)); // true or false

//condition check

console.log(movements.some((mov) => mov > 500));
//if atleast any one element satisfy the condition it returns true else false.

console.log(movements.some((mov) => mov === -130));
// we can also do equality check

//-------------------------------------------------------------------------------------------------------------
//------------------------------------------every()---------------------------------------------------------

//returns true if all the elements in an array satisfy the condition else false

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements1.every((mov) => mov > 0)); //false

const movements2 = [200, 450, 400, 3000, 650, 130, 70, 1300];

console.log(movements2.every((mov) => mov > 0)); // true

const movements3 = [-200, -450, -400, -3000, -650, -130, -70, -1300];
console.log(movements3.every((mov) => mov < 0)); // true

// Separate callback
const deposit = (mov) => mov > 0;
console.log(movements1.some(deposit));
console.log(movements1.every(deposit));
console.log(movements1.filter(deposit));
