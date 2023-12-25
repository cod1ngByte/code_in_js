"use strict";

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
    [days[3]]: {
        open: 12,
        close: 22,
    },
    [days[4]]: {
        open: 11,
        close: 23,
    },
    [days[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    // ES6 enhanced object literals
    openingHours,
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

/*
The optional chaining (?.) operator accesses an object's property or calls a function. 
If the object accessed or function called using this operator is undefined or null, 
the expression short circuits and evaluates to undefined instead of throwing an error.

*/

// console.log(restaurant.openingHours.mon.open); // error mon prop doen't exist ie. undefined.anything is error

// we can try if else
if (restaurant.openingHours.mon) {
    console.log(restaurant.mon.open);
}

// or we can use optional chaining

console.log(restaurant.openingHours.mon?.open); // return undefined if mon prop doen't exist else it will access open prop

for (const day of days) {
    //     console.log(day);
    //     console.log(restaurant.openingHours[day]);
    //     console.log(restaurant.openingHours[day]?.open);
    console.log(restaurant.openingHours[day]?.open ?? "close");
}

//--------------------------------------->optional chaining on function

console.log(restaurant.order?.(2, 1) ?? "method doesn't exist"); // method exist

console.log(restaurant.orderResetto?.(2, 1) ?? "method doesn't exist"); //method doesn't exist

//---------------------------------------->optional chaining on array

const users = [
    {
        firstName: "cod1ng",
        email: "134@kfj.com",
    },
];

//check if array exist or not

console.log(users[0]?.firstName ?? "empty array");

const arr = [];
console.log(arr[0]?.firstName ?? "array is empty");

//can be written using if
// if(arr.length > 0){

// }
// else{

// }
