import { countries as countryList } from "./countries.js";
import { webTechs } from "./web_techs.js";

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
console.log(shoppingCart);
