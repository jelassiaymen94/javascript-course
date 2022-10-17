// Create an empty object called dog
var dog = {};
// Print the the dog object on the console
/* console.log(dog);
 */ // Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "Rex";
dog.legs = 4;
dog.color = "brown";
dog.age = 5;
dog.bark = function () {
	return "woof woof";
};
// Get name, legs, color, age and bark value from the dog object
/* console.log(dog.name);
 */ /* console.log(dog.legs);
 */ /* console.log(dog.color);
 */ /* console.log(dog.age);
 */ /* console.log(dog.bark());
 */ // Set new properties the dog object: breed, getDogInfo
dog.breed = "Labrador";
dog.getDogInfo = function () {
	return (
		this.name +
		" is a " +
		this.age +
		" years old " +
		this.color +
		" " +
		this.breed
	);
};

const users = {
	Alex: {
		email: "alex@alex.com",
		skills: ["HTML", "CSS", "JavaScript"],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: "asab@asab.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"Redux",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: "daniel@daniel.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: "daniel@alex.com",
		skills: ["HTML", "CSS", "JavaScript", "Python"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: "john@john.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: "thomas@thomas.com",
		skills: ["HTML", "CSS", "JavaScript", "React"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: "paul@paul.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

// Find the person who has many skills in the users object.
let maxSkills = 0;
let maxSkillsUser = "";
for (let user in users) {
	if (users[user].skills.length > maxSkills) {
		maxSkills = users[user].skills.length;
		maxSkillsUser = user;
	}
}

// Count logged in users,count users having greater than equal to 50 points from the following object.
let loggedInUsers = 0;
let usersWith50Points = 0;
for (let user in users) {
	if (users[user].isLoggedIn) {
		loggedInUsers++;
	}
	if (users[user].points >= 50) {
		usersWith50Points++;
	}
}

// Find people who are MERN stack developer from the users object
let mernStackUsers = [];
for (let user in users) {
	if (
		users[user].skills.includes("MongoDB") &&
		users[user].skills.includes("Express") &&
		users[user].skills.includes("React") &&
		users[user].skills.includes("Node")
	) {
		mernStackUsers.push(user);
	}
}

// Set your name in the users object without modifying the original users object
let newUsers = JSON.parse(JSON.stringify(users));
//console.log(newUsers);
newUsers.Aymen = {
	email: "jelassi.aymen94@gmail.com",
	skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
	age: 29,
	isLoggedIn: true,
	points: 50,
};

// Get all keys or properties of users object
let usersKeys = Object.keys(users);

// Get all the values of users object
let usersValues = Object.values(users);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
	Tunisia: {
		capital: "Tunis",
		population: 12,
		languages: ["Arabic", "French"],
	},
	France: {
		capital: "Paris",
		population: 67.39,
		languages: ["French"],
	},
	Algeria: {
		capital: "Algiers",
		population: 43.85,
		languages: ["Arabic", "French"],
	},
};
