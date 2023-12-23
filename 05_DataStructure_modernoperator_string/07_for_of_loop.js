/*
     for-of loop : at each iteration it will give access to current element which will store it item variable
*/

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
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
//------------------------------------->using for loop
console.log("-------------------using for loop---------------");
for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    console.log(item);
}

//------------------------------------->using for-of loop
console.log("-------------------using for-of loop----------------");
for (let item of menu) {
    console.log(item);
}

//------------------------------------>menu.entries()  : array element and index both

// console.log(...menu.entries()); // array element itself is an array

// [[index,element],[index,element],[index,element]];
/*
for (let item of menu.entries()) {
    //     console.log(item); // [index,element],[index,element], and so on
    console.log(`index : ${item[0]}, element : ${item[1]} `);
}
*/
//-----------------------------------> better to use destruct in array of array

for (let [index, element] of menu.entries()) {
    console.log(index, element);
}
