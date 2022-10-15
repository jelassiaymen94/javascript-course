//1

/* Write a program which tells the number of days in a month. */
// Enter a month: January
// January has 31 days.

// Enter a month: JANUARY
// January has 31 days.

// Enter a month: February
// February has 28 days.

// Enter a month: FEbruary
// February has 28 days.

// Enter a month: test
// test is not a valid month!

let month = prompt("Enter a month: ");
month = month.toLowerCase();
if (
	month === "january" ||
	month === "march" ||
	month === "may" ||
	month === "july" ||
	month === "august" ||
	month === "october" ||
	month === "december"
) {
	console.log(`${month} has 31 days.`);
} else if (
	month === "april" ||
	month === "june" ||
	month === "september" ||
	month === "november"
) {
	console.log(`${month} has 30 days.`);
} else if (month === "february") {
	console.log(`${month} has 28 days.`);
} else {
	console.log(`${month} is not a valid month!`);
}

//2

/* Write a program which tells the number of days in a month, now consider leap year. */
