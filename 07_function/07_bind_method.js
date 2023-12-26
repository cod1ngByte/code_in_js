/*
     just like call() method bind() method also used to set this keyword
     but it doesn't call the function immediately instead it returns a new function where this keyword is bind to

*/
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

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};

const swiss = {
    airline: "Swiss Air Line",
    iataCode: "LX",
    bookings: [],
};

const books = lufthansa.book;

const bookEW = books.bind(eurowings);
bookEW(4567, "Kundan"); // behave like normal function call but this keyword(eurowings) is already  bind to bookEW

const bookLH = books.bind(lufthansa);
const bookLX = books.bind(swiss);

//---------------------------------------------------------------------
//   in the bind method we can pass multiple arguments other than this keyword
//  and all of them will be binded whenever called

const bookEW23 = books.bind(eurowings, 23);
bookEW23("ranjan");

//------------------------bind() method is used when we use object method in eventListener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};

lufthansa.buyPlane();

// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);
//IMP!! ---> while using eventlistener this keyword always point to event handler here it is point to button element (buy)

document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));
