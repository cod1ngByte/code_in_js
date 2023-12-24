/*
     we can loop over non-iterable like object in a different way
     for of loop can be loop over an iterable like array,string,map, set
     Object.keys(objectname) --> return an array whose element is key of object, so now we can use for-of loop 
     Object.values(objectname) --> return an array whose element is a value of object, we can use for-of loop
     Object.entries(objectname) --> return an array of array which contain [[key,value],[key,value],..]
                                    in each index of array, so we can loop over it using for-of loop
*/

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
};

//--------------------------------->Object.keys(objectName)

// const keys = Object.keys(restaurant.openingHours);
// console.log(keys);
// [ 'thu', 'fri', 'sat' ]

let str = `we are open on ${
    Object.keys(restaurant.openingHours).length
} days, `;
for (const key of Object.keys(restaurant.openingHours)) {
    //     console.log(key);
    //     console.log(typeof key); key is of string type
    str += `${key} `;
}

console.log(str);

//-------------------------------------->Object.values(objectName)

// const values = Object.values(restaurant.openingHours);
// console.log(values);
// [
//      { open: 12, close: 22 },
//      { open: 11, close: 23 },
//      { open: 0, close: 24 }
// ]

for (const { open, close } of values) {
    console.log(open, close);
}

//-------------------------------------->Object.entries(objectName)

// const entries = Object.entries(restaurant.openingHours);
// console.log(entries);
// [
//      [ 'thu', { open: 12, close: 22 } ],
//      [ 'fri', { open: 11, close: 23 } ],
//      [ 'sat', { open: 0, close: 24 } ]
//  ]
//
//value itself is an object so we destruct to get open and close

for (const [key, { open, close }] of Object.entries(restaurant.openingHours)) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
}

/*
    Object.entries(objectName) //     [[key,value],[key,value],[key,value],..] and value can be anything even object

    arrayName.entries() // [[index,element],[index,element],[index,element],..] and element can be anything.
*/
