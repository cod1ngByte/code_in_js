// similar to other method, find() method also take call back function(curVAl,ind,arr) as a paramter
// return the first element(element can be any value(primi/non) which satisfy the condition but
//  in filter method it return the new array which contain all element which satisfy the condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

//----------------------------------------------findIndex()

// similar to find() method, findIndex() method returns the index of the first element which satisfy the condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const firstWithdrawalIndex = movements.findIndex((mov) => mov < 0);
console.log(firstWithdrawalIndex);

//we can also use the indexOf() method but for complex calc and while chaining we can use findIndex() method.
