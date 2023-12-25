const flight = "LH234";
const jsUser = {
    firstName: "cod1ng",
    passport: 123456789,
};
const checkIN = function (flightNum, passenger) {
    flightNum = "LH888";
    passenger.firstName = "Mr. " + passenger.firstName;
    if (passenger.passenger === 123456789) {
        console.log("checked-in");
    } else {
        console.log("invalid passport");
    }
};

checkIN(flight, jsUser);
console.log(flight); // no change in flight value ,copy of data is passed
console.log(jsUser); // jsUser and passenger both are pointing to same object in heap so, change in one reflected in both .

/*
     javascript only support pass by value (value is copied in function parameter whether it is simple value or ref value)
*/
