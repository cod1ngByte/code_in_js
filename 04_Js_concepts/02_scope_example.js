"use strict";
function calcAge(birthYear) {
    const age = 2032 - birthYear;
    function printAge() {
        let output = `${firstName}, you are ${age} born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1947) {
            var bornInFreeCountry = true;
            //creating new variable with the same name as outer scope variable
            const firstName = "rajiv";
            //reassigning outerscope variable
            output = `${firstName}, you are born in free country`;
            console.log(output);
            const str = "hello how are you?";
            function greet() {
                console.log("hello");
            }
            greet();
        }
        //    console.log(str) --> not accessible
        console.log(bornInFreeCountry); //--> accessible scope within printAge function scope.
        // console.log(greet()) --> not accessible
        console.log(output); //--> accessible
    }
    printAge(); //--> accessible
}

const firstName = "cod1ng";
calcAge(1947);
// printAge(); -->not accessible
// console.log(age) // not accessible
