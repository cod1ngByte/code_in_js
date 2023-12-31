// reduce() takes two parameter,first parameter is  call back funcion(acc,curvalue,i,arryitself)
//second parameter is acc initial value
//at each iteration call back function calculate the acc value and return and stroed in acc parameter for next iteration calculation

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, mov, i, arr) {
    return acc + mov; // this will return acc value for the next iteration
}, 0);

//----------------------------------------using arrow
// const balance = movements.reduce((acc, mov) => acc + mov, 0);

console.log(balance);

//------------------------------------------using for-of loop
// let balance = 0;
// for (const mov of movements) {
//     balance = balance + mov;
// }
// console.log(balance);

//----------------------------------------finding maximun using reduce() method
const maxValue = movements.reduce((acc, mov) => {
    if (acc > mov) return acc; //for next iteration acc value will be acc
    else return mov; //for next iteration acc value will mov
}, movements[0]);
console.log(maxValue);
