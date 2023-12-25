/*
spread operator expand all the elements (in array) or all properties (in object literal)
all the characters (in string) all at once.

spread operator works in all iterable( array, string, map, set) and even in object from 2018.

        Object.keys(objectName) -->return array and we know how to use spread op in array
        Object.values(objectName) -->return array and we know how to use spread op in array
        Object.entries(objectName) -->return array of array, here also we can use spread op
                        

spread operator is used while builing an array, passing function as an argument same for all iterables
*/
const arr = [1, 3, 4];

console.log(...arr); // 1 3 4
console.log(arr); // [1,3,4]

// -------------------------------------------->adding old array element in an new array using spread op
const arr1 = [10, 20, 30];
const badArr = [12, arr1[0], arr1[1], arr1[2]];
console.log(badArr);

//----------------------------------better way to do -->
const arr2 = [12, ...arr1];
console.log(arr2); // no change in arr1

//----------------------------------> not same as
// const arr2 = [12,arr1]; --> [12,[10,20,30]]

//------------------------------------------------>copy an array (deepcopy)
const heroes = ["saktiman", "junior-g"];
const heroesCopy = [...heroes];
console.log(heroes);
console.log(heroesCopy);

heroesCopy.push("minal-murli");
console.log(heroes); // no change in heroes array
console.log(heroesCopy);

//----------------------------------------------> merging more than one array

const marvelHeroes = ["iron-man", "spiderman"];
const dcHeroes = ["batman", "superman"];
const allHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes);

//---------------------------------------------> spread in string

const str = "John";
const character = [...str, "'", "S"];
console.log(character);
console.log(...str); // each character is individual element

//------------------------------------------------> spread op to build array and passs to function

const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },
};
/*
 const str = "John";
const character = [...str, "'", "S"];

// calling function
const ingredients = [
    prompt("let make pasta ingredient 1"),
    prompt("ingredient 2"),
    prompt("ingredient3"),
];
restaurant.orderPasta(...ingredients); // in function parameter it will be individual element store in variable.
will work in browser 
*/

//--------------------------------------> spread op in object

//-------------------------------------> to build new object

const newRestaurant = { ...restaurant, founder: "cod1ng byte aka rajiv" };
console.log(newRestaurant);
console.log(restaurant);

//if we are using any non primitive type as key then it is shallow copy not deep copy
newRestaurant.categories.push("Indian");
// categories is updated in both object rest and newrest
console.log(restaurant);
console.log(newRestaurant);

//------------------------------------> to copy object (deep copy if no non-primitive is used as key else shallow copy) and merge

const restaurantCopy = { ...restaurant };
console.log(restaurant.name);
console.log(restaurantCopy.name);

//----------------------------------=>
