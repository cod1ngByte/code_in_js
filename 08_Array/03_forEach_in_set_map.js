//map

const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

//set

//in set we can pass any iterable(array,string,set,map).

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);

currenciesUnique.forEach(function (item, index, set) {
    console.log(`${index} : ${item}`); // herer index and item is same since, set doesn't have key/index
});
