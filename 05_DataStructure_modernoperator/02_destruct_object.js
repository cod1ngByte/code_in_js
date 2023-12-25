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
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery({
        starterIndex = 1,
        mainIndex = 0,
        time = "20:00",
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },
};

/*
we use cruly braces to destruct object like we used square bracket to destruct array
we need to write the same name as varaiable name as property name while destruct object but
order doesn't matter in object unlike in array (no skipping element using comma here)

*/

const { name, openingHours, categories } = restaurant;
//created three variables as const same as property name of restaurant object
console.log(name, openingHours, categories);

//-------------------------------------> changing variabel name while destruct object

const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//----------------------------------->defualt value while destruct object in case property undefined

//restaurant.menu = undefined

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); //menu property doesn't exist so it will have defualt value
// starterMenu property exist so no defualt value printed.

//------------------------------------> mutating variables while destruct object
let a = 111;
let b = 222;

const obj = {
    a: 10,
    b: 20,
    c: 30,
};
// const {a,b} = obj  ---> a and b variable already defined as a =111 and b = 222 so we can not redeclare
// let {a,b} = obj

// {a,b} = obj; -->error unexpected token = : { } is a code block and we can not assign it

({ a, b } = obj);
console.log(a, b); //--> a = 111 changed to a = 10 and b = 222 changed to b = 20

//------------------------------------------->nested destruc object
const { fri } = openingHours;
console.log(fri); // is an object with two prop open and close

const {
    fri: { open, close },
} = openingHours;
console.log(open, close);

//---------------------------------------->passing object to function as an argument and destruct object in function parameter
//function calling
restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
});
