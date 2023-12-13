const superHeroes = ["saktiman", "junior-g", "chitti", "he-man"];

//adding element will return the lenght of an array
superHeroes.push("minal-murli");

console.log(superHeroes.unshift("bhavesh joshi"));
console.log(superHeroes);

//removing element will return the removed element

console.log(superHeroes.pop());
console.log(superHeroes.shift());
console.log(superHeroes);

//indexOf() will return the index of an element if present else -1

console.log(superHeroes.indexOf("chitti")); // index = 2
console.log(superHeroes.indexOf("ironman")); //-1

//includes() will return true if element exist else false
//it do strict equality checking
console.log(superHeroes.includes("chitti"));

superHeroes.push("2");
console.log(superHeroes.includes(2)); // false since '2' === 2
superHeroes.pop();

console.log(superHeroes);
