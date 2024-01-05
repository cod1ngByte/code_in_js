/*
     String is primitive type so any changes in string will not effect the original string,
     i.e string is immutable,so if any string method applied,
     result will be stored in new string, no changes is original string
     
*/

const airline = "TAP Air Portugal";
const plane = "A320";

//-------------------> we can access character the way we access array element

console.log(plane[0]); //A
console.log(airline[2]); // P
console.log(plane[2]); //2
console.log(plane[8]); // if index in given to access character is greater than length-1 it will return undefined.
console.log("javascript"[4]); //s

//zero based like array index also zero based

//----------------------------------> length prop

console.log(airline.length); // 16 (no of character in airline string literal )
console.log("javascript".length); //10

//------------------------------------------------->method : indexOf()-------------------------------
/*
string.indexOf(searchString,position)
//position is optional
//return the first occurrence index or return -1
//position > length -1 , return -1
//position < 0 , search from the index zero ie. search entire string
//searchString will be searched from the position mentioned in 2nd arg
//case sensitive
// return position when searching empty string.

'hello world hello'.indexOf('o', -5) returns 4 -- ( search from index zero since p < 0) 
'hello world hello'.indexOf('world', 12) returns -1 -- ( search from index 12, )
'hello world hello'.indexOf('o', 99) returns -1 -- ( p > lenght -1 so return -1)
"hello world".indexOf(""); // returns 0
"hello world".indexOf("", 0); // returns 0
"hello world".indexOf("", 3); // returns 3
"hello world".indexOf("", 99); // returns 99



//-------------------------------------------lastIndexOf(searchString,position)---------------------------
//position is optional
//return index or -1
//if p > length -1 , search from index 0
//if p < 0 , search at index zero or return -1
//searchString will search till the position mentioned in 2nd argument
//case senstive
//for empty string.. 'canal'.lastIndexOf("") //return 5(which is length)
                    //'canal'.lastIndexOf("",3) //return 3(which is 2nd arg)

*/

console.log(airline.indexOf("r")); //6
console.log(airline.lastIndexOf("r")); //10
console.log(airline.indexOf("portugal")); // -1 (case sensitive)
console.log(airline.indexOf("Portugal")); //8

//------------------------------------------------------->method slice()-------------------------------------
/*

slice() method takes index as argument and indexOf() returns index so we  can use indexOf() in slice()

//slice() : everything in string is extracted if used
//slice(startIndex) 
//slice(startIndex,endIndex) : startIndex is included but endIndex is not included
//slice() method returns the substring or else return empty string


     startIndex : (optional)
          //1. statIndex < str.length :- normal 
          //2. if startIndex  is -ve :- count from back but extract is from front to back
          //3 . if startIndex < -str.length and startIndex < 0 :- extract from zero index
          //4. if startIndex >= str.length :- nothing is extracted, return empty string

     endIndex : (optional)  | not included 
          //1. endindex < str.length : normal 
          //2. endIndex is -ve :- count from back but extract is from front to back
          //3. endIndex < -str.length :- extract from zero is used
          //4. endIndex >= str.length :- treat endIndex as zero 

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
