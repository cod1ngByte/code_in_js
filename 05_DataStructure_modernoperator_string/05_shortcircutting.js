/*

logical OR(||) returns the first truthy value
logical AND(&&) return the first falsy value. (null, undefined,NaN,0,"",false)

*/
//---------------------------------------->Logical OR (true hain? nai aage badho)

console.log(3 || "cod1ng"); // 3
console.log("" || "byte"); //byte
console.log(true || ""); // true
console.log(undefined || null); // null
console.log(undefined || null || "" || "javascript" || NaN); // javascript

// -----------------> setting defualt value using logical OR

const game = {
    gameName: "contra",
    level: 3,
    printScore: function () {
        console.log(`your ${this.gameName} game score is ${this.score}`);
    },
};
game.score = game.score || 50;
// if game.score exist it return the score else it set defualt value of score and store in score property
console.log(game.score);

// ---------------------------------------------->Logical AND (false hain? nai aage badho)

console.log(0 && "cod1ng"); // 0
console.log(7 && "byte"); // byte

console.log("js" && 23 && null && "reactjs"); // null

if (game.score) {
    game.printScore();
}

//same code can wriiten using logical AND

game.score && game.printScore();
