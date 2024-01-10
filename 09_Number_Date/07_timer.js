/*
setTimeout(callbackfun, time in millis,param1,param2,)

we can use the setTimeout() to execute the call back function once after certain amount of time mentioned in milli


if you want to run the code only once after certain amount of time, we  can use setTimeout();
eg: when we order food, it take some time to prepare and then we get the food

-----------------------------------------------------------------------------------------------------------
setInterval(callbackfun, time in milli, param1, param2,)

we can use the setInterval() to execute the call back function again and again after certain amount of time mentioned in milli



*/
//-----------------------------------------setTimeout()---------------------------------------------------

// setTimeout(() => console.log("here is your food"), 3000);
// console.log("waiting for food..");

//---------------------------------- passing parameter to call back function
/*
setTimeout(
    (ing1, ing2) => console.log(`here is your food with ${ing1} and ${ing2}`),
    3000,
    "cheese",
    "sausage"
);
console.log("waiting for food..");
*/

//--------------------------cancelling the order using clearTimeout()----------------------------------

const ingredients = ["cheese", "sausage"];
const timer = setTimeout(
    (ing1, ing2) => console.log(`here is your food with ${ing1} and ${ing2}`),
    3000,
    ...ingredients
);
if (ingredients.includes("sausage")) {
    clearTimeout(timer);
}

console.log("waiting for food");

//------------------------------------------------------------------------------------------------------

//setInterval()

// setInterval(function () {
//     console.log(new Date());
// }, 1000);
