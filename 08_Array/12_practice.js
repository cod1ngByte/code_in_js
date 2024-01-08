const account1 = {
    owner: "Rahul Sharma",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Shraddha kapoor",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Raj kumar choudhary",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Neha babbar",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];
//1--------------------------calculating the all acounts deposit sum---------------------------------------

const depositSums = accounts
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, curMov) => sum + curMov, 0);
console.log(depositSums);

//reduce and filter in one

// const depositSums = accounts
//     .flatMap((acc) => acc.movements)
//     .reduce((sum, currMov) => (currMov > 0 ? (sum += currMov) : sum), 0);
// console.log(depositSums);

//2.-------------------------------------count number of deposit in all accounts which is greater than 1000

// const numDeposit1000 = accounts
//     .flatMap((acc) => acc.movements)
//     .filter((mov) => mov > 1000).length;

//without using filter only reduce
const numDeposit1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((count, mov) => (mov > 1000 ? ++count : count), 0);

console.log(numDeposit1000);

//3--------------------------------------- returning object using reduce method-----------------------------------------------------------------

console.log(accounts.flatMap((acc) => acc.movements));
const reduceObj = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
        (sum, curr) => {
            curr > 0 ? (sum.deposit += curr) : (sum.withdrawal += curr);
            return sum; // have to return obj not a value sum.deposit or sum.withdrawal
        },
        { deposit: 0, withdrawal: 0 }
    );
console.log(reduceObj);

//4--------------------------------------convert title case--------------------------------------------------

const convertTitlCase = function (str) {
    const exceptions = [
        "a",
        "an",
        "and",
        "the",
        "but",
        "or",
        "an",
        "in",
        "with",
    ];
    const sent = str
        .toLowerCase()
        .split(" ")
        .map((word) =>
            exceptions.includes(word)
                ? word
                : word[0].toUpperCase() + word.slice(1)
        )
        .join(" ");
    return sent;
};

console.log(convertTitlCase("this is a nice title"));
console.log(convertTitlCase("this is a LONG title but not too long"));
console.log(convertTitlCase("and here is another title with an EXAMPLE"));
