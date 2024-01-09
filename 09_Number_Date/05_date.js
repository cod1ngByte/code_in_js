/*
just like array, object literal and function, Date is also non-primitive type


*/
//4ways to create a date in js, they all use the date constructor but they accept different type of parameter

//1.current date and time
//const now = new Date();
//console.log(now); // current date and time at this very moment -->2024-01-09T09:34:53.441Z (yyyy-mm-ddTHH:mm:ss.sss)
/*
          yyyy - 4 digits for years
          mm - 2 digits for months ( 0 to 11)
          dd - 2 digits for date ( 1 to 31)
          HH - 2 digits for hours (0 to 23)
          mm - 2 digits for minutes ( 0 to 59)  
          ss - 2 digits for second (0 to 59)
          sss - 3 digits for milliseconds ( 0 to 999)       
*/
//console.log(typeof now); // object type
/*
//-------------------------------------------------------------------------------------------------------
//2. pass the date as a date sting

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));

// passing the date from code

// console.log(new Date(account1.movementsDates[0]));

//------------------------------------------------------------------------------------------------------
//3.we can also pass the yyyy mm dd hh mm ss separated by comma

console.log(new Date(2037, 10, 19, 15, 23, 5)); //
console.log(new Date(2037, 10, 31)); //auto correct the day since nov only has 30 days -->2037-11-30T18:30:00.000Z
console.log(new Date(2037, 10, 33)); //2037-12-02T18:30:00.000Z

//---------------------------------------------------------------------------------------------
//4 we can also pass the amount of milliseconds since the since the midnight at the beginning of January 1, 1970, UTC

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days 24 hours 60 minutes 60second 1milliseconds since jan1,1970

//-------------------------------------------- Working with dates--------------------------------------

const future = new Date(2037, 10, 19, 15, 23);
console.log(future); //return in object
console.log(future.getFullYear()); //return in number
console.log(future.getMonth()); //returns the month(0 - 11) in number
console.log(future.getDate()); //returns the day of the month(1 - 31) in number
console.log(future.getDay()); // returns the day of the week (0 - 6) in number
console.log(future.getHours()); //return the hour (0 - 23) in number
console.log(future.getMinutes()); //return the minutes (0 - 59) in number
console.log(future.getSeconds()); //return the seconds ( 0 to 59) in number
console.log(future.toISOString()); // return the standard time in string
console.log(future.getTime()); // return the time stamp in milliseconds since jan 1, 1970 in number

console.log(new Date(2142256980000));

console.log(Date.now()); //return in time stamp in number

//-------------------------------------------------------we can also set the date and time------------------
future.setFullYear(2040);
console.log(future);

*/
//---------------------------------------------------calculating no of days ------------------------------

const date2 = new Date(2037, 10, 19, 15, 23);
console.log(date2); //object

//convert this object in timestamp by simply converting date object into number
console.log(Number(date2));

//we can subtract two date(type coercion into number and then subtraction will take place)
// and we will get timestamp then we will divide by (24*60*60*1000) to get no of days

const calcDaysPassed = function (date1, date2) {
    return Math.abs(date2 - date1) / (24 * 60 * 60 * 1000);
};

const days = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(`no of days: ${days}`);
