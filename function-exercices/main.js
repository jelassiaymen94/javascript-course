// Declare a function fullName and it print out your full name
function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
	return firstName + " " + lastName;
}

//Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(num1, num2) {
	return num1 + num2;
}

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
	return length * width;
}

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width) {
	return 2 * (length + width);
}

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length, width, height) {
	return length * width * height;
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(radius) {
	return Math.PI * radius * radius;
}

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(radius) {
	return 2 * Math.PI * radius;
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
	return mass / volume;
}

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, time) {
	return distance / time;
}

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
	return mass * gravity;
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.

function convertCelciusToFahrenheit(celcius) {
	return (celcius * 9) / 5 + 32;
}

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.

function bmi(weight, height) {
	return weight / (height * height);
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
	switch (month) {
		case "December":
		case "January":
		case "February":
			return "Winter";
		case "March":
		case "April":
		case "May":
			return "Spring";
		case "June":
		case "July":
		case "August":
			return "Summer";
		case "September":
		case "October":
		case "November":
			return "Autumn";
	}
}

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function findMax(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
	return a * x + b * y + c;
}

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadEquation(a, b, c) {
	let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
	return [x1, x2];
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
function printArray(arr) {
	arr.forEach((element) => {
		console.log(element);
	});
}

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
	let date = new Date();
	return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
}

// Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
	let temp = x;
	x = y;
	y = temp;
	return [x, y];
}

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
	let newArr = [];
	for (let i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i]);
	}
	return newArr;
}

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
function capitalizeArray(arr) {
	let newArr = [];
	arr.forEach((element) => {
		newArr.push(element.toUpperCase());
	});
	return newArr;
}

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(arr, item) {
	arr.push(item);
	return arr;
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item.
function removeItem(arr, index) {
	arr.splice(index, 1);
	return arr;
}

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		sum += i;
	}
	return sum;
}

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
function sumOfOdds(num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		if (i % 2 !== 0) {
			sum += i;
		}
	}
	return sum;
}

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
function sumOfEven(num) {
	let sum = 0;
	for (let i = 0; i <= num; i++) {
		if (i % 2 === 0) {
			sum += i;
		}
	}
	return sum;
}

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
function evensAndOdds(num) {
	if (num < 0) {
		return "Please enter a positive integer";
	}
	let even = 0;
	let odd = 0;
	let numArr = num.toString().split("");
	console.log(numArr);
	numArr.forEach((element) => {
		if (element % 2 === 0) {
			even++;
		} else {
			odd++;
		}
	});
	return `Even: ${even}, Odd: ${odd}`;
}

// Write a function which takes any number of arguments and return the sum of the arguments
function sumOfArguments() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

// Write a function which generates a randomUserIp.
function randomUserIp() {
	let ip = "";
	for (let i = 0; i < 4; i++) {
		ip += Math.floor(Math.random() * 256);
		if (i < 3) {
			ip += ".";
		}
	}
	return ip;
}

// Write a function which generates a randomMacAddress
function randomMacAddress() {
	let mac = "";
	for (let i = 0; i < 6; i++) {
		mac += Math.floor(Math.random() * 16).toString(16);
		if (i < 5) {
			mac += ":";
		}
	}
	return mac;
}

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
function randomHexaNumberGenerator() {
	return Math.floor(Math.random() * 16777215).toString(16);
}

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
function userIdGenerator() {
	let id = "";
	for (let i = 0; i < 7; i++) {
		id += Math.floor(Math.random() * 10);
	}
	return id;
}

