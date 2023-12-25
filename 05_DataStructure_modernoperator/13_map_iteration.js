// console.log(question);

//1--------------------------------------------------> converting object to map
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
};
console.log(Object.entries(restaurant.openingHours)); // [[key,value],[key,value],...]

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//2----------------------------------------------------->map iteraration
const question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C++"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct 🎉"],
    [false, "Try again!"],
]);
console.log(question.get("question"));
for (const [key, value] of question) {
    if (typeof key === "number") {
        console.log(`${key} : ${value}`);
    }
}
// const ansr = Number(prompt("enter the answer"));

// if (!ansr) {
//     console.log("please give the correct value");
// } else {
//     ansr === 3
//         ? console.log(question.get(true))
//         : console.log(question.get(false));
// }

//or
// console.log(question.get(question.get('correct') === ansr));

// ------------------------------------------------------------>map to array
console.log("------------------------------------------------------------");
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
