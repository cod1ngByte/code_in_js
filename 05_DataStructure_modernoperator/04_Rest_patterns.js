/*
     Rest pattern looks actually same as spread op but it does actually opposite.
     rest pattern used to collect the multiple elemenst and condense into array, objects

     spread used to unpack  <---> rest used to pack

*/
// ------------------------------------------->Destructuring

const arr = [1, 2, 3, 5, 4];
const [a, b, ...others] = arr;
console.log(a, b, others); // a = 1, b= 2, c = [3,4,5].

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    orderPizza: function (mainInc, ...otherInc) {
        console.log(mainInc);
        console.log(otherInc);
    },
};

//------------------------rest
const [pizza, , risetto, ...others1] = [
    ...restaurant.mainMenu, //---------------spread
    ...restaurant.starterMenu, //---------------spread
];

console.log(pizza, risetto, others1);
//--------------rest pattern collect the remaining element into an array at the end, we can not use it in
// between and rest pattern doesn't include any skip element

// ---------------------------------------->Rest in object

// it will collect the remaining property into a object like in array it collect rest element in an array

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//------------------------------------------>rest in function parameter not in argument

const add = function (...numbers) {
    //numbers is an array
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};
//we can pass any number of argument it store all in an array.
add(2, 3);
add(2, 3, 30, 40);
add(2, 3, 5, 6, 7, 8, 9);

//rest is used in function parameter and spread is used in function argument.

const x = [10, 20, 30];
add(...x); // spread -- each individual element is passed to function but at function parameter it packed into an array.

//-------------usind rest in restaurant object
restaurant.orderPizza("mushroom", "onion", "olives", "spinach");
restaurant.orderPizza("mushroom"); // other ingredient will be empty array
