/*
     set is collection of unique value ( means no duplicate value in set unlike array)

     set is used in all iterable.
     set  : unique value                     |         array : duplicate value
            order doesn't matter             |                 order does matter
            no index to retrieve value       |                 indexes to retrieve element, arr[index]
            setname.add(value)               |                 arrayname.push(element), arrayname.unshift(element)
            setname.delete(value)            |                 arrayname.pop(), arrayname.shift()
            setname.has(value)               |                 arrayname.includes(element)
            setname.size                     |                 arrayname.length
 
*/
//we can have any iterable inside set

const orderSet = new Set([
    "pasta",
    "pizza",
    "pizza",
    "risetto",
    "pasta",
    "Pizza",
]);
console.log(orderSet); // pizza and Pizza both are two diff value.
//  { 'pasta', 'pizza', 'risetto', 'Pizza' }

//string are also iterable.
console.log(new Set("missipi")); // {'m','i','s','p'}

// in set

console.log(orderSet.size);
console.log(orderSet.has("Bread")); //false
console.log(orderSet.has("pasta")); //true
console.log(orderSet.add("garlic bread")); //Set(5) { 'pasta', 'pizza', 'risetto', 'Pizza', 'garlic bread' }
console.log(orderSet.delete("resetto")); //false
console.log(orderSet.delete("risetto")); //true

// delete all elements from set using clear()

// console.log(orderSet.clear());
// console.log(orderSet);

// for-of loop can be used in all iterable and set is also iterable.

for (const order of orderSet) {
    console.log(order);
}

//------------------------------->remove duplicate from array using set

const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const uniqueStaff = new Set(staff); // pass array ref or array itslef
console.log(uniqueStaff);

//--------------------------------> convert set into an array using spread op
// const staffUniqueArr = [...new Set([staff])] create set then use spread to convert in an array
const staffUniqueArr = [...uniqueStaff];
console.log(staffUniqueArr);

//--------------------------------->checking unique element in array //pass to set then use size prop

console.log(new Set([1, 2, 4, 2, 1, 5, 2, 1]).size);

//--------------------------------> number of different character in string

console.log(new Set("missipii").size);
