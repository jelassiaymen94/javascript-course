// 1
let age = prompt("Enter your age:");
if (age < 18) {
	console.log(`You still need ${18 - age} years to drive`);
} else {
	console.log("You are old enough to drive");
}

//2
let myAge = 19;
let yourAge = prompt("Enter your age");
if (myAge > yourAge) {
	console.log(`I'm older than you by ${myAge - yourAge} years`);
} else {
	console.log(`I'm younger than you by ${yourAge - myAge} years`);
}

//3
let a = prompt("enter a");
let b = prompt("enter b");
if (a > b) {
	console.log(`${a} is greater than ${b}`);
} else {
	console.log(`${b} is greater than ${a}`);
}
//ternary
a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4

let n = prompt("Enter a number:");

if (n % 2 == 0) {
	console.log(`${n} is an even number`);
} else {
	console.log(`${n} is an odd number`);
}
