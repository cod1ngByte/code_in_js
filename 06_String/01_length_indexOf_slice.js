/*
     String is primitive type so any changes is string will not effect the original string,
     i.e string is immutable, each string method applied, result will be stored in new string, no changes is original string
     
*/

const airline = "TAP Air Portugal";
const plane = "A320";

//-------------------> we can access character the way we access array element

console.log(plane[0]); //A
console.log(airline[2]); // P
console.log(plane[2]); //2
console.log("javascript"[4]); //s

//zero based like array index also zero based

//----------------------------------> length prop

console.log(airline.length); // 16 (no of character in airline string literal )
console.log("javascript".length); //10

//------------------------------------------------->method : indexOf()
/*
//return the index of first occurance,
// if not found return -1

//indexOf(character)
//indexOf(character,fromIndex)  : fromIndex is optional

               formIndex  :
                    // 1. if fromIndex is not present, search from zero index
                    // 2. if fromIndex < str.length , search from front to back from index mentioned in fromIndex
                    // 3. if fromIndex >= str.length, return -1
                    // 4. if formIndex is -ve, counts back from the string literal but search from front to back only
                    // 5. if fromIndex < -str.length, return -1
                     
// same for lastIndexOf() but it will return the last occurence.


     eg : const array = [2, 9, 9];
          array.indexOf(2); // 0
          array.indexOf(7); // -1
          array.indexOf(9, 2); // 2
          array.indexOf(2, -1); // -1
          array.indexOf(2, -3); // 0

*/

console.log(airline.indexOf("r")); //6
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("portugal")); // -1 (case sensitive)
console.log(airline.indexOf("Portugal")); //8

//------------------------------------------------------->method slice()
/*

slice() method takes index as argument and indexOf() returns index so we  can use indexOf() in slice()

//slice() : everything in string is extracted if used
//slice(startIndex) 
//slice(startIndex,endIndex) : startIndex is included but endIndex is not included

     startIndex : (optional)
          //1. statIndex < str.length :- normal 
          //2. if startIndex  is -ve :- count from back but extract is from front to back
          //3 . if startIndex < -str.length :- extract from zero index
          //4. if startIndex >= str.length :- nothing is extracted

     endIndex : (optional)  | not included 
          //1. endindex < str.length : normal 
          //2. endIndex is -ve :- count from back but extract is from front to back
          //3. endIndex < -str.length :- extract from zero is used
          //4. endIndex >= str.length :- stirng length is used, extracting all elements until the end 

*/
console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //Air
//extracting first word
console.log(airline.slice(0, airline.indexOf(" "))); //TAP
//extracting last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Portugal

//function that receive airline seat adn check whether it is middle seat or not
const checkMiddleSeat = function (airLineSeat) {
    const lastChar = airLineSeat.slice(-1);
    if (lastChar === "B" || lastChar === "E") {
        console.log("middle seat");
    } else {
        console.log("lucky");
    }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

/*
     string is primitve type so how method and prop is used in string literal??
     js convert the primitive type to string object type so that we can use method and prop
     it's called BOXING

     eg. console.log(new String('javascript')); object return 
         console.log(typeof new String('javascript'))  : object type

     and then when method and prop is used it is again converted to primitive type

     eg. console.log(typeof new String('javascript').slice()) : primitive type is returned i.e string
*/
