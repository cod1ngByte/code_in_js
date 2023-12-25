/*
Map is data structure that used to map key to values, just like object is stored in key : value pair.

IN object key is always a string,
but in map key can be of any data type (primitive or non-primitive) even dom element [rest.set(document.querySelector('h1'),'heading')]

while retrieving using key, key with type should be mentioned

*/

const rest = new Map(); //empty map created
//1--------------------------------------------> mapname.set( key ,value)
//set method return the updated map

rest.set("name", "Classico Italiano");
rest.set(1, "Firenz, Italy");
rest.set(2, "Lisbon, Portugal");
console.log(rest);

// {
//      'name' => 'Classico Italiano',
//      1 => 'Firenz, Italy',
//      2 => 'Lisbon, Portugal'
//  }
//2------------------------------------------> set method  chaining

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open :D")
    .set(false, "We are closed ");

//3------------------------------------------->mapname.get(key), key data type should be same while storing in map

// console.log(rest.get(name)); // ref error name is not defined.
console.log(rest.get("name")); //Classico Italiano

console.log(rest.get(true));

//we can also evaluate the get method argument to one the key

const time = 3; // or 21
console.log(rest.get(time > rest.get("open") && time < rest.get("clode")));

//4-------------------------------------------------->mapname.has(key)

console.log(rest.has("categories")); // return true or false

// rest.set([10, 20], "testing");
// console.log(rest.get([10, 20])); //both array are diff since there ref is different this is how non-prim is stored usin ref

const arr = [10, 20];
rest.set(arr, "testing");
console.log(rest.get(arr));

//5--------------------------------------------------------->mapname.delete(key)

console.log(rest.delete(true)); //return true or false

//6---------------------------------------------------------->mapname.size

console.log(rest.size);

//7---------------------------------------------------------->mapname.clear()
// similar to set clear()

////-----------------------------------------------------------------------
