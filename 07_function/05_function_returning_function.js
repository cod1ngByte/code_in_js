const greet = function (str) {
    return function (name) {
        console.log(`${str} : ${name}`);
    };
};
const greeting = greet("hello");
greeting("rajiv");

greet("hi")("rajiv");

//as arrow function

// const f1 = (str) => (name) => console.log(`${str} : ${name}`);
// f1("heY")("rajiv");
