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
