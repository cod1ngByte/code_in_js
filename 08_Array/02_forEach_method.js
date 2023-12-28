/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//using for-of loops for elements in an array
console.log("---------------------------using for-of loop-------------------");
for (const movement of movements) {
    if (movement > 0) {
        console.log(`You depoisted : ${movement}`);
    } else {
        console.log(`You withdrew : ${Math.abs(movement)}`);
    }
}

//------------------------------------------------------>using forEach() method
//--forEach() is higher order function here,
//--call back function parameter order matter's, inside forEach() method 
/* ----arrayName.forEach(function(currValue,index,arrName){
          //
          //   at each iteration forEach() method call this call back function
          //   and call back function execute entire block of code for this one iteration and 
          //   it is repeated again and again till the last element in array
          //
      }) 
*/

/*
console.log("-------------------------using forEach() method---------------");

movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited : ${movement}`);
    } else {
        console.log(`you withdrew : ${Math.abs(movement)}`);
    }
});

*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for-of loop for index, and curValue

// for (const [index, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(` movement : ${index + 1}, deposited : ${movement}`);
//     } else {
//         console.log(
//             ` movement : ${index + 1}, withdrawl : ${Math.abs(movement)}`
//         );
//     }
// }

//forEach()

movements.forEach(function (movement, index, movements) {
    if (movement > 0) {
        console.log(` movement : ${index + 1}, deposited : ${movement}`);
    } else {
        console.log(
            ` movement : ${index + 1}, withdrawl : ${Math.abs(movement)}`
        );
    }
});
