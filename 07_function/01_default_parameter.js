const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
    //new way to assign value at function parameter

    //old way to set defualt parameter
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
        //ES6 way to define prop and their value from outer variable
    };
    console.log(booking);
    bookings.push(booking); //passing booking object into an array
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);
console.log(bookings); // array of object

//1. in default parameter we can use any expression(which returns value)
// we can pass varaible that are used before in parameter too
// eg const createBooking = function (flightNum, numPassengers = 1, price = 199*numPassengers)

//2. we can not skip parameter when calling the function
// if we want to skip pass undefined to it will take parameter defualt value if set.

createBooking("LH1234", undefined, 1000);
console.log(bookings);
