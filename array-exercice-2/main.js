import { countries as countryList } from "./countries.js";
import { webTechs as webTech } from "./web_techs.js";

let text =
	"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.split(/[,\s]+|[\s]/); //remove all the punctuations and change the string to array
console.log(words);
console.log(words.length); // count the number of words in the array

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

for (let i = 0; i < shoppingCart.length; i++) {
	if (shoppingCart[i] == "Meat" || "Sugar") {
	} else {
		shoppingCart.unshift("Meat");
		shoppingCart.push("Sugar");
	}
}

shoppingCart.push("Sugar");

shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";

/* console.log(shoppingCart);
 */
let countryFounded = countryList.find((country) => country == "Ethiopia");
countryFounded
	? console.log(countryFounded.toUpperCase())
	: countryList.push("Ethiopia");

let SASS = webTech.find((tech) => tech == "Sass");
SASS ? console.log("Sass is a CSS preprocess") : webTech.push("Sass");

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let arrayLength = ages.length;

ages.sort();

let min = ages[0];
let max = ages[arrayLength - 1];
console.log(`Min ${min}`);
console.log(`Max ${max}`);

let middle = arrayLength / 2;
arrayLength % 2 == 0
	? console.log(`Middle: ${ages[middle]}`)
	: console.log(`Middles: ${ages[middle]} ${ages[middle + 1]}`);
Math.trunc(ages.reduce((a, b) => a + b) / arrayLength);

console.log(Math.abs(min - ages[middle]) == Math.abs(max - ages[middle]));
