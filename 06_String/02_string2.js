// toLowerCase();
//toUpperCase();

const airline = "TAP Air portugal";
console.log(airline.toLowerCase());
console.log("javascript".toUpperCase()); // we can even pass string literal

//------------------------------------------------fixing capitalization in word.

const fixCapital = function (str) {
    const strLower = str.toLowerCase();
    const fix = strLower[0].toUpperCase() + strLower.slice(1);
    return fix;
};

console.log(fixCapital("jAvascript"));
console.log(fixCapital("javascript"));

//-------------------------------------------------compare email

const email = "hello@google.com";

const emailFromInput = "   helLo@gOOgle.com  \n";

//1.convert to lowercase
//2.trim() will remove space from start and end, and newline
//2.then compare

const emailCorrect = emailFromInput.toLowerCase().trim();
//emailFromInput.toLowerCase() returns a new string call str1
//str1.trim() return a new string stored in emailCorrect
console.log(email === emailCorrect); //true

//-------------------------------------------replace part of string using replace( ,)
//replace() method replace only first occurence

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

//priceGB.replace("£", "$") returns a string call str1
// str1.replace(",", ".") return a string a stored in priceUS
console.log(priceUS);

const announcement =
    "All Passesngers come to boarding door 23, Boarding door 23!";

//changin door to gate.

console.log(announcement.replaceAll("door", "gate"));

//---------------------------------------------includes() return true or false

const plane = "A320neo";
console.log(plane.includes("A")); //true
console.log(plane.includes("Boeing")); //false

//--------------------------------------------startsWith() return true or false

const plane1 = "Airbus A320neo";
console.log(plane1.startsWith("Air")); //true
console.log(plane1.startsWith("AirBus")); //false casesensitive

//---------------------------------------------endsWith() return true or false

if (plane1.startsWith("Air") && plane1.endsWith("neo")) {
    console.log("part of the new airbus family");
}

//-------------------------------------example
const checkBaggage = function (items) {
    // 1. convert to lowercase and then compare
    const baggage = items.toLowerCase();
    if (
        baggage.includes("knife") ||
        baggage.includes("gun") ||
        baggage.includes("lighter")
    ) {
        console.log("You are not allowed on board");
    } else {
        console.log("welcome aboard");
    }
};

checkBaggage("I have a laptop, some food items and a pocket Knife");
checkBaggage("camera and clothes");
