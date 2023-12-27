/*
     closure :  function always has access to the Execution Context of the function from where it has been created,
     even its EC is pop out from stack

     or we can say that closure gives a function access to all the variable of its parent function,
     even after the parent function has returned.

*/

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount}: passengers`);
    };
};

const booking = secureBooking();
booking();
booking();

console.dir(booking); // see in browser console --> display information about function booking,its method, its closure, its scope

//-----------------------------------------------------------------------------------
// closure is also used where we don't return any inner function

let f;
const g = function () {
    const a = 12;
    f = function () {
        console.log(a * 3);
    };
};

g();
f();
console.dir(f); // here closure is a of outer function g

//re-assigning the inner function to f variable like we reassign the variable

const h = function () {
    const c = 13;
    f = function () {
        console.log(c * 3);
    };
};

h();
f();
console.log(f); //here closure is c of outer function h

//----------------------------------------------------------------------------
//closure also include the parameter

// setTimeout(arg1,arg2) --> arg1 : call back function
//   --> arg2 : after how many milisecond arg1 will be executed;
//here setTimeout() function is higher order function

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    setTimeout(function () {
        console.log(`we are now boarding all ${n} passengers`);
        console.log(`there are 3  groups, each with ${perGroup} passengers`);
    }, wait * 1000);
    // this function will execute after wait seconds, till then boardPassenger() function EC will be pop out,
    // but becoz of closure we can still access n , wait and perGroup variable from outer function.

    console.log(`We will start boarding in ${wait} seconds`);
};
const perGroup = 500; // --> this will not be access from setTimeout function becoz priority is given to outer function variable then global variable
// if perGroup is not defined in outer function then this variable is accessed.
boardPassengers(270, 4);
