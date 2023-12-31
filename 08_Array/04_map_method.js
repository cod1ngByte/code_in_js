// similar to forEach() method but map method return a new array forEach() doesn't,
// map() method also take call back function with three parameter currElement, index, and array itself

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//converting euro to USD (not real value)
//call back function

const movementsUSD = movements.map(function (mov) {
    return mov * 1.1;
});

//--------------------------------arrow function as call back function

// const movementsUSD = movements.map((mov) => mov * 1.1);

//---------------------------------using for-of loop

// const movementsUSD = [];
// for (const mov of movements) {
//     movementsUSD.push(mov * 1.1);
// }
console.log(movementsUSD);

//-----------------------------------not storing return array
movements.map((mov, i, arr) => {
    if (mov > 0) {
        console.log(`movements : ${i + 1}, you deposited ${mov}`);
    } else {
        console.log(`movements : ${i + 1}, you withdrew ${Math.abs(mov)}`);
    }
});

//----------------------------------------storing return array

const movementsDescription = movements.map(
    (mov, i, arr) =>
        `movements :${i + 1}, you ${
            mov > 0 ? "deposited" : "withdrew"
        } ${Math.abs(mov)}`
);
console.log(movementsDescription);
