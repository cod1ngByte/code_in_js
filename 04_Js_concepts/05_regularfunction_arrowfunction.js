const user = {
    firstName: "cod1ng",
    age: 18,
    greet: function () {
        console.log("inside method (regular function)");
        console.log(this); //this will point to object from whichever method is called.
        console.log("-------------------------------------------");
    },
    greeting: () => {
        console.log("inside method (arrow function)");
        console.log(this); // arrow function doesn't have its own this
        // inherited from enclosed function here {} as node environment
        // window as global object in browser.
        console.log("----------------------------------");
    },
};

user.greet();
user.greeting();

//---------------------------------------------------------------------------------------------------
/*
const jsUser = {
    firstName: "John",
    year: 1991,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        //    const isMillenial = function () {
        //      console.log(this);
        //      console.log(this.year >= 1981 && this.year <= 1996);
        //    };
        // Solution 1
        // const self = this; // self or that
        // const isMillenial = function () {
        //   console.log(self);
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        // Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
};

jsUser.calcAge();
*/
