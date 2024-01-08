//sort() method mutate the original array
//sort() method sort based on the string by defualt (convert the element into string and does the sorting)

const owners = ["rajiv", "cod1ng", "Adam", "Martha"];

console.log(owners.sort());
console.log(owners); //mutate the original array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log(movements.sort()); // sort the array a/c to string and mutate the original array

//----------ascending order sorting

// movements.sort((currEle, nextEle) => {
//     if (currEle > nextEle) return 1;
//     if (currEle < nextEle) return -1;
// });

//or

movements.sort((a, b) => a - b);
console.log(movements);

//----------descending order sorting

// movements.sort((curEle, nextElem) => {
//     if (curEle > nextElem) return -1;
//     if (curEle < nextElem) return 1;
// });

//or
movements.sort((a, b) => b - a);
console.log(movements);
