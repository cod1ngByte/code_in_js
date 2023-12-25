//----------------------------------------------->split(separator)

// return an Array of strings, split at each point where the separator occurs in the given string

console.log("a+very+nice+string".split("+")); // return an array [ 'a', 'very', 'nice', 'string' ]

const arr = "cod1ng byte".split(" ");
console.log(arr); //[ 'cod1ng', 'byte' ]

//we can destruct this arr

const [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);

//---------------------------------------------join()
/*
join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, 
separated by commas or a specified separator string

join();
join(separator);

*/

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(" ");
    const arr = [];
    for (const word of names) {
        arr.push(word[0].toUpperCase() + word.slice(1));
    }
    return arr.join(" "); //converting array to string separated by comma
};
const str = capitalizeName("cod1ng byte");
console.log(str);

console.log(capitalizeName("the engineer choice"));

//--------------------------------------------------->padStart() and padEnd()

const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "-")); ///here length is after padding

//masking the card number (use of padding and length)

const maskingCard = function (cardNumber) {
    const strCardNumber = String(cardNumber);
    const last4Number = strCardNumber.slice(-4);
    const maskCard = last4Number.padStart(strCardNumber.length, "*");
    return maskCard;
};
const maskCard = maskingCard(43343443241057);
console.log(maskCard);
console.log(maskingCard(234234234234));

//------------------------------------------------repeat(number of times  )

const msg = "Bad weather...All Departures Delayed..! ";
console.log(msg.repeat(3));
