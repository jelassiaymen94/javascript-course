// ------------------- Exercices: level 1 ----------------------- //

// 1 - Explain the difference between forEach, map, filter, and reduce.
/* Foreach takes a callback function and run that callback function on each element of array one by one.
/* Map takes a callback function and run that callback function on each element of array one by one and return a new array with the result of each callback function.
/* Filter takes a callback function and run that callback function on each element of array one by one and return a new array with the elements that return true in the callback function.
/* Reduce takes a callback function and run that callback function on each element of array one by one and return a single value.
*/

//2 - What is a callback function?
/* A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
/* For example:
/* function sayHello(name) {
/* 	console.log(`Hello ${name}`);
/* }
/* function greeting(name, callback) {
/* 	callback(name);
/* }
/* greeting("John", sayHello);
*/

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
	{ product: "banana", price: 3 },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: 8 },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];

// 3 - Use forEach to console.log each country in the countries array.
countries.forEach((elem) => {
	console.log(`${elem}`);
});
// 4 - Use forEach to console.log each name in the names array.
names.forEach((elem) => {
	console.log(`${elem}`);
});

// 5 - Use forEach to console.log each number in the numbers array.
numbers.forEach((elem) => {
	console.log(`${elem}`);
});

// 6 - Use map to create a new array by changing each country to uppercase in the countries array.
const upperCountries = countries.map((elem) => elem.toUpperCase());
console.log(upperCountries);

// 7 - Use map to create an array of countries length from countries array
const countriesLength = countries.map((elem) => elem.length);
console.log(countriesLength);

// 8 - Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((elem) => elem * elem);
console.log(squareNumbers);

// 9 - Use map to change to each name to uppercase in the names array
const upperNames = names.map((elem) => elem.toUpperCase());
console.log(upperNames);

// 10 - Use map to map the products array to its corresponding prices
const prices = products.map((elem) => elem.price);

console.log(prices);

// 11 - Use filter to filter out countries containing land
const land = countries.filter((elem) => elem.includes("land"));

console.log(land);

// 12 - Use filter to filter out countries having six character
const sixCharacters = countries.filter((elem) => elem.length == 6);
console.log(sixCharacters);

// 13 - Use filter to filter out countries containing six letters and more in the country array.
const sixMoreCharacters = countries.filter((elem) => elem.length >= 6);
console.log(sixMoreCharacters);

// 14 - Use filter to filter out country start with 'E'
const eCountries = countries.filter((elem) => elem.startsWith("E"));
console.log(eCountries);

// 15 - Use filter to filter out only prices with values
const productsPrices = products.filter(
	(elem) => typeof elem.price === "number"
);
console.log(productsPrices);

// 16 - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let arr = [12, "A", 25, true, "BH"];
const getStringLists = arr.filter((elem) => typeof elem === "string");
console.log(getStringLists);

// 17 - Use reduce to sum all the numbers in the numbers array.
const sum = numbers.reduce((a, b) => a + b);
console.log(sum);
// 18 - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concat = countries.reduce((word, nextWord) => word + "," + nextWord);
console.log(concat);

// 19 - Explain the difference between some and every
/* Some checks if at least one element of the array satisfies the condition and returns true or false.
/* Every checks if all the elements of the array satisfies the condition and returns true or false.
*/

// 20 - Use some to check if some names' length greater than seven in names array
const greaterSevenNames = names.some((word) => word.length >= 7);
console.log(greaterSevenNames);

// 21 - Use every to check if all the countries contain the word land
const landCountries = countries.every((word) => word.includes("land"));
console.log(landCountries);

// 22 - Explain the difference between find and findIndex.
/* Find returns the first element of the array that satisfies the condition and returns undefined if no element satisfies the condition.
/* FindIndex returns the index of the first element of the array that satisfies the condition and returns -1 if no element satisfies the condition.
*/

// 23 - Use find to find the first country containing only six letters in the countries array

const sixLettersCountry = countries.find((word) => word.length == 6);
console.log(sixLettersCountry);

// 24 - Use findIndex to find the position of the first country containing only six letters in the countries array
const sixLettersCountryIndex = countries.findIndex((elem) => elem.length == 6);
console.log(sixLettersCountryIndex);

// 25 - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const findNorway = countries.findIndex((elem) => elem.includes("Norway"));
console.log(findNorway);

// 26 - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const findRussia = countries.findIndex((elem) => elem.includes("Russia"));
console.log(findRussia);

// ------------------- Exercices: level 2 ----------------------- //
// 1 - Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const totalPrice = products
	.filter((elem) => typeof elem.price === "number")
	.reduce((elem, index) => elem + index.price, 0);

console.log(totalPrice);

// 2 - Find the sum of price of products using only reduce reduce(callback))
