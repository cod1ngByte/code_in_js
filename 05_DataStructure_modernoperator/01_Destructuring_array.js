"use strict";

/*
     Destructuring means means unpacking values from array, object literal and all iterables
     into separate variables.
     ie. breaking the complex ds into simpler ds like variable.

*/

const arr = [10, 20, 30];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//---------------------------------> can be done using destructuring array in simple way

const [x, y, z] = arr; // here x y and z are variable of const
console.log(x);
console.log(y);
console.log(z);
console.log(arr); // no change in original array.

// -------------------------------------------------------------------------------------------------------

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

// const [first, second] = restaurant.categories;
// console.log(first, second);

//---------------------------->skiping element in destructuring array using comma

let [first, , second] = restaurant.categories;
console.log("before swapping");
console.log(first, second);

//---------------------------------->we can also swap the element using destruct array

// let create an array with two element first and second and then use destruct to swap both element
//  swapping first with second                      array with two elements
[first, second] = [second, first];
console.log("after swapping");
console.log(first, second);

// ----------------------------------> destruct array when function return an array.

const [starter, main] = restaurant.order(0, 2); //this function returning an array so it can be destruct
console.log(starter, main);

//------------------------------------> nested destruc
const nested = [2, 4, [20, 40]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//------------------------------------> defualt values in destruct array

const [p, q, r] = [50, 60];
console.log(p, q, r); // r will have undefined

const [f = 1, g = 1, h = 1] = [30, 70];
console.log(f, g, h);
//when we get data it will replace with default value;
