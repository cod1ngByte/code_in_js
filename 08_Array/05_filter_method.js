const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov, i, arr) {
    return mov > 0; // which ever element satisfy this condition, that element will be stored in deposit array
});

//---------------------------------------using arrow function

// const deposit = movements.filter((mov) => mov > 0);

console.log(deposits);

const withdrawals = movements.filter(function (mov, i, arr) {
    return mov < 0; //which ever element satisfy the condition,that element will be stored in withdrawl array
});

//---------------------------------------using arrow

// const withdrawls = movements.filter((mov) => mov < 0);
console.log(withdrawals);
