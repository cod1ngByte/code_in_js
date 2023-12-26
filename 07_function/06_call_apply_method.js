"use strict";

const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    //book : function(){}
    book(flightNum, name) {
        //    console.log(this);
        console.log(
            `${name} booked a seat on  ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
        //    console.log(this.bookings);
    },
};

lufthansa.book(123, "Rajiv Ranjan");
lufthansa.book(452, "Cod1ng Byte");

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};
const books = lufthansa.book; // function defination refe is stored in book variable so this is normal function exprsn;
// console.log(books());
// book(237, "rajiv"); // this keyword doesn't work in regular function in strict mode

//---------------------------------------------------->fn.call()

books.call(eurowings, 237, "rahul"); // 1st argum in call method should be the object where this should point to

// console.log(eurowings);

books.call(lufthansa, 785, "Brendon Eich");
// console.log(lufthansa);

const swiss = {
    airline: "Swiss Air Line",
    iataCode: "LX",
    bookings: [],
};
books.call(swiss, 585, "Steel Series");

//----------------------------------------------------->fn.apply()

//apply method 1st arguments is object this keyword should be point to and the other argum should be in array

const flightData = [555, "George Martin"];

books.apply(swiss, flightData);

// console.log(swiss);
// books.call(swiss,...flightData)
