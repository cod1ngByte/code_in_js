/*
this keyword (a variable how value we can not change) a special type of variable that is created for every 
execution context (every function)

this keyword is not static, it depends on how the function is called and 
its value is only assigned when the function is actually called.

method--------------------> this point to object that that is calling method
simple function call -----> this point to global object window in browser or in {} in nodejs or undefined (in strict mode)
arrow function call  -----> doesn't have its own this, inherited from the enclosed function.
event listener, new, call, apply bind ---> will discuss later.

*/
// "use strict";
console.log(this); // window as global object(in browser) or {} ( in node enviroment)

const greeting = function () {
    console.log("inside function exprsn");
    console.log(this); // global object or window as global object or undefined(strict mode)
    console.log("--------------------------------------");
};
greeting();

const greet = () => {
    console.log("inside arrow function");
    console.log(this); //doesn't have its own this so inherited from enclosed function that is {} in nodejs or window in browser.
    console.log("--------------------------------------");
};
greet();

function greet2() {
    console.log("inside function declaration");
    console.log(this); // global object window or undefined(strict mode) or global object in node enviroment
    console.log("------------------------------------");
}
greet2();
// -----------------------------------------------------------------------------------------------------------
//--> method and this keyword

const user = {
    firstName: "cod1ng",
    hello: function () {
        //    console.log("hello");
        console.log(this);
        console.log(this.firstName);
    },
};

const user2 = {
    firstName: "john",
};
user2.hello = user.hello;

user.hello(); //this point to user object
user2.hello(); //this point to use2 object

const func1 = user.hello; //ref of hello function is assigned to func1
func1(); //this point to global object in node evironment or window global object or undefined(strict mode)
