//1.
// --------------------------------->old ways to add property in object litarals

const fullName = {
    firstName: "cod1ng",
    lastName: "byte",
};
/*
const jsUser = {
    age: 18,
    email: "akdj@ga.com",
    lastLoggedIn: ["mon", "tues"],
    fulName: fullName,
};

console.log(jsUser);
*/

//--------------------------------> new ways to add property in object literals

const jsUser = {
    age: 18,
    email: "akdj@ga.com",
    lastLoggedIn: ["mon", "tues"],
    fullName,
};
console.log(jsUser);

//2

//-------------------------------------> old ways to write method in object literals

const game = {
    gameName: "contra",
    welcome: function () {
        console.log(`welcome to ${this.gameName} game.`);
    },
};
game.welcome();

//-----------------------------------------> new way to write method in object literals
const game1 = {
    gameName: "mario",
    welcome() {
        console.log(`welcome to ${this.gameName} game`);
    },
};
game1.welcome();

//3

//-------------------------------------------> we can also compute property name.
