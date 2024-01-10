/*
earlier      
const now= new Date(acc.movementsDates[i]);
const day = `${now.getDate()}`.padStart(2, 0);
const month = `${now.getMonth() + 1}`.padStart(2, 0);
const year = now.getFullYear();
const date =  `${day}/${month}/${year}`;


*/

const now = new Date();
const date = new Intl.DateTimeFormat("en-IN").format(now);
console.log(date); //10/1/2024 dd/mm/yyyy

console.log(new Intl.DateTimeFormat("en-US").format(now)); //1/10/2024 mm/dd/yyyy

//we can also display time using option object as 2nd argument

const options = {
    day: "numeric",
    month: "numeric", // can be numeric | long | short | 2-digit
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    hour12: false,
};
//we can also take locale string from browser
// const locale = navigator.language;

console.log(new Intl.DateTimeFormat("en-IN", options).format(now)); //Wednesday, 10/1/2024, 14:31

//---------------------------------Number Format-----------------------------------------------------------

const num = 3884764.23;

console.log(new Intl.NumberFormat("en-IN").format(num)); //38,84,764.23
console.log(new Intl.NumberFormat("en-US").format(num)); //3,884,764.23

const options1 = {
    style: "currency", // 'unit' || 'percent
    unit: "celsius",
    currency: "EUR",
    // useGrouping: false,
};

console.log("US:      ", new Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", new Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria:   ", new Intl.NumberFormat("ar-SY", options).format(num));
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );
