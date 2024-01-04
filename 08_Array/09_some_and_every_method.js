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
