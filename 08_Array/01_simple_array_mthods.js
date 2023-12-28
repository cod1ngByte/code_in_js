const arr = ["a", "b", "c", "d", "e"];

// ----------------------------------------------------------slice(startIndex,endIndex) endIndex not included
// similar to string slice() method
// return a new array
// no changes in original array

console.log(arr.slice(2)); //["c", "d", "e"];
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr.slice(-3));
console.log(arr.slice(-1)); //last element of array
console.log(arr.slice(1, -2));

//-----------copy array using slice()
console.log(arr.slice()); //
//we can even use spread op to copy
console.log([...arr]);
// in both no changes in original array

console.log(arr);

//-----------------------------------------------splice(startIndex,deleteCount)
//return a sub array from original array
//changes in original array

const orgArr = [10, 20, 30, 40, 50, 60];
const subArr = orgArr.splice(2);
console.log(orgArr); //changes in original array
console.log(subArr); // return the subarray

//---------remove the last element by using splice()
const orgArr1 = [10, 20, 30, 40, 50, 60];
console.log(orgArr1.splice(-1));
console.log(orgArr1); //last element is removed

//-------------------------------------------------reverse()
//orginal array is changed

const arr1 = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];

console.log(arr2.reverse());
console.log(arr2); //changes is in original array

//----------------------------------------------------concat()
//no changes in any array return a new array

const letters = arr1.concat(arr2);
console.log(letters);

// we can also use spread op to merge array
console.log([...arr1, ...arr2]);

//----------------------------------------------------join(separator)
//return a string sperated by separator

console.log(letters.join(","));

//push()
//unshift()
//pop()
// shift()
// includes()
