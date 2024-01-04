//it returns the new array after flatened ie. remove the nested arrray
//flat(1) ---> flatened the one level of nesting in an arary
//flat(2) ---> flatened the two level of nesting
//returns new array

const arr = [[1, 23, 3], [4, 5, 6], 9, 10];

console.log(arr.flat());

const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arr2.flat());
console.log(arr2.flat(2));
