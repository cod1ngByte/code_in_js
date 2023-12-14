/*const value = Infinity;
const typeofValue = typeof value;
const result = Number(value);
const typeofResult = typeof result;

console.log(`
            value -->${value}
            typeofValue --> ${typeofValue}
            result --> ${result}
            typeofResutl --> ${typeofResult}`);

*/
const operation =
  Math.round(Math.random() * 10) > 5
    ? function (num1, num2) {
        console.log("addition");
        return num1 + num2;
      }
    : function (num1, num2) {
        console.log("multiplication");
        return num1 * num2;
      };
console.log(operation(2, 3));

let userLoggedIn = true;
let greetingFunction;
if (userLoggedIn) {
  greetingFunction = function () {
    console.log("Welcome");
  };
} else {
  greetingFunction = function () {
    console.log("user not logged in");
  };
}
greetingFunction();
