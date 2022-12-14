const empty = []; // Declare an empty array;
const countries = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya",
]; // Declare an array with more than 5 number of elements
const mixedDataTypes = ["string", 26, null, undefined, true, "another", 26];
const itCompanies = [
	"Facebook",
	"Google",
	"Microsoft",
	"Apple",
	"IBM",
	"Oracle",
	"And Amazon",
];

console.log(countries.length); // Find the length of your array
console.log(`
	${countries[0]}\n
	${countries[Math.round((countries.length - 1) / 2)]}\n
	${countries[Math.round(countries.length - 1)]}
  `); // Get the first item, the middle item and the last item of the array

console.log(mixedDataTypes.length); // Find the length of your array

console.log(itCompanies); // Print the array using console.log()

console.log(itCompanies.length + 1); // Print the number of companies in the array

console.log(`
	${itCompanies[0]}\n
	${itCompanies[Math.round((itCompanies.length - 1) / 2)]}\n
	${itCompanies[Math.round(itCompanies.length - 1)]}
  `); // Print the first company, middle and last company

itCompanies.forEach((item) => console.log(item)); //Print out each company

console.log(itCompanies.map((item) => item.toUpperCase())); // Change each company name to uppercase one by one and print them out

console.log(
	itCompanies.toString() + "are big IT companies"
); /* Print the array like as a sentence: Facebook, Google, Microsoft, Apple,
IBM,Oracle and Amazon are big IT companies */

let company;

if (itCompanies.includes(company)) {
	console.log(company);
} else {
	console.log("company is not found");
} /* Check if a certain company exists in the itCompanies array. If it exist return
the company else return a company is not found */

let filtered = [];

console.log(itCompanies);

/* for (let i = 0; i < itCompanies.length; i++) {
	if (itCompanies[i].split("o").length - 1 > 1) {
		console.log(itCompanies[i]);
	}
} */

for (let i = 0; i < itCompanies.length; i++) {
	console.log(itCompanies[i].match(/o+/g));
} /* Filter out companies which have more than one 'o' without the filter method */

console.log(itCompanies.sort()); // Sort the array using sort() method
console.log(itCompanies.reverse()); // Reverse the array using reverse() method
console.log(itCompanies.slice(3)); // Slice out the first 3 companies from the array

/* for (let i = 0; i < 3; i++) {
	itCompanies.pop();
} */

console.log(itCompanies.slice(-3)); // Slice out the last 3 companies from the array

itCompanies.splice(0, 1); // Remove the first IT company from the array
console.log(itCompanies);

itCompanies.splice(itCompanies.length / 2 - 1, 2); // Remove the middle IT company or companies from the array
console.log(itCompanies);

itCompanies.splice(itCompanies.length - 1, 1); // Remove the last IT company from the array
console.log(itCompanies);

itCompanies.splice(0, itCompanies.length); // Remove all IT companies
console.log(itCompanies);
