// Create a script with two variables, each assigned to a number. Add them together and output the result to the console.
var num1 = 5;
var num2 = 7;
console.log("The sum of the two variables is " +(num1+num2));

//Now do the same with two strings.
var string1 = "Hello";
var string2 = "Mudda";
console.log(string1 + " " + string2);

// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.
var vegetables=[["broccoli","cauliflower","brussle sprouts"],["spinach","kale","chard"],["beet","turnip","radish"]];
console.log(vegetables[0][2]);
console.log(vegetables[2][1]);

//Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.
function lessThanCent(num) {
	if (num < 100) {
		alert("The number "+num+" is less than 100!")
	} else {
		alert("The number "+num+" is NOT less than 100!")
	}
}

// Try running the script and then changing the variable's value to see how this affects the program's output.
lessThanCent(101);
lessThanCent(15);

// Write a similar script to check if a string stored in a variable is the same as another string.
function sameStringAs(string1,string2) {
	if (string1==string2) {
		alert("Both strings are the same! They read: "+string1);
	} else {
		alert("These strings are different, fool! The first one is \""+string1+"\" and the second one is \""+string2+"\"!");
	}
}

sameStringAs("hello","goodbye");
sameStringAs("water","water");

//Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.
var myName="Waterbee"
function tellsYourName(name) {
	console.log("Your name is "+name);
}

tellsYourName(myName);

//Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.
function saysStuff() {
	console.log("Blah blah blah, ok? Happy?")
}

saysStuff();

//Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors. 
function montyHall(num) {
	if (num==1) {
		console.log("You chose door 1. Great choice! You got a goat. Goats are cool, but you lose.");
	} else if (num==2) {
		console.log("You chose door 2. You get a car not a goat. I guess you win.");
	} else if (num==3) {
		console.log("You chose door 3. Great choice! You got a goat. Goats are cool, but you lose.");
	} else {
		console.log("There is no door "+num+", ok? Play better.")
	}
}

montyHall(1);
montyHall(2);
montyHall(3);
montyHall(6);