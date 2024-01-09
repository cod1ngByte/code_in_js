console.log(-5 % 2); //-1
console.log(5 % -2); // 1
console.log(-5 % -2); //-1
console.log(5.2 % 2); //1.2000000000000002
console.log(5.2 % 2.2); //0.7999999999999998

console.log(5 % 2); //1
console.log(5 / 2); // 2.5

console.log(8 % 3); //2
console.log(8 / 3); //2.6666666666666665

console.log(6 % 2); //0
console.log(6 / 2); //3

console.log(7 % 2); //1
console.log(7 / 2); // 3.5

const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); //true
console.log(isEven(23)); //false
console.log(isEven(514)); //true
/*
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

*/
