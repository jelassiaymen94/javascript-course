//1

/* let score = prompt("Enter your score:");
if (score >= 0 && score < 49) {
	console.log("You got F");
} else if (score >= 50 && score <= 59) {
	console.log("You got D");
} else if (score >= 60 && score <= 69) {
	console.log("You got c");
} else if (score >= 70 && score <= 89) {
	console.log("You got B");
} else if (score >= 80 && score <= 100) {
	console.log("You got F");
}

//2

let month = prompt("Enter a month:");

if (month == "September" || month == "October" || month == "November") {
	console.log("The season is Autumn");
} else if (month == "December" || month == "January" || month == "February") {
	console.log("The season is Winter");
} else if (month == "March" || month == "April" || month == "May") {
	console.log("The season is Spring");
} else if (month == "June" || month == "July" || month == "August") {
	console.log("The season is Summer");
} else console.log("Not a month");

//3

let weekDay = prompt("enter weekDay to check if it's a weekend");
if (weekDay == "saturday" || weekDay == "sunday") {
	console.log(`${weekDay} is a weekend day`);
} else if (
	weekDay == "monday" ||
	weekDay == "tuesday" ||
	weekDay == "wednesday" ||
	weekDay == "thursday" ||
	weekDay == "friday"
) {
	console.log(`${weekDay} is a work day`);
} else {
	console.log("invalid weekDay");
} */

//4

let weeekDay = prompt("enter Day to check if it's a weekend").toLowerCase();

if (weeekDay == "saturday" || weeekDay == "sunday") {
	console.log(`${weeekDay} is a weekend day`);
} else if (
	weeekDay == "monday" ||
	weeekDay == "tuesday" ||
	weeekDay == "wednesday" ||
	weeekDay == "thursday" ||
	weeekDay == "friday"
) {
	console.log(`${weeekDay} is a work day`);
} else {
	console.log("invalid weekDay");
}
