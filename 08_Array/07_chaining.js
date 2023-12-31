const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDepositUSD = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * 1.1)
    .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

// we should not chain if array is too large.
//we should not chain if array is mutating.
// forEach(), map(), filter() all take call back function as parameter : function(curVal, index,arr)
//reduce() takes two param, 1st param : function(acc,curVal,index,arr)
//      2nd param : initial value of acc
