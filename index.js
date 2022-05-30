// index of a string (first occurence of an text in a string)

let str = "Please locate where 'the' is located";
console.log(str.indexOf('the'));


// search a string -> returns the 'true' if a string contains a specified value
console.log(str.includes('locate'));


// // search a string -> returns the 'true' if a string startswith a specified value
console.log(str.startsWith('Please'));



// Javascript string literals
let text = `Welcome to the "Home" of the 'Favourites'`;


// string interpolation
let name = "John";
let surName = "Doe";

var fullName = `Your registered name is ${name} ${surName}`;
console.log(fullName);


// Javascript Number
let x = 3.12; // a number with decimals

let y = 1234e2; // exponential numbers


let w = "2";
let v = 2;

console.log(w + w) // returns 22 (adding a string and number results to string concatenation)



//JavaScript will try to convert strings to numbers in all numeric operations:

let a = "100";
let b = "10";

let c = x / y; // returns 10

// js numbers methods
let number = 123

console.log(number.toString()) // changes a number to a string

let alpha = 12;
const beta = alpha.toString()

console.log(typeof(beta)) // checks the typeof


// exponential
let q = 9.656;
console.log(q.toExponential(2))


// js arrays
/* is a special variable which can hold more thatn one value*/
const cars = ['Saab', 'volvo', 'mercedes', 'toyota']

console.log(cars[0]) // returns Saab which is the first element of the array

cars[0] = "mazda" // replaces the item at index 0 with 'mazda'

cars.length // returns the length of the list
cars.sort() // sorts the list alphabetically

let car = cars[cars.length - 1] // returns the last array element
console.log(car)

// looping through an array
let carLength = cars.length

for(i=0; i < carLength; i++){
	console.log(cars[i])
}

// array methods

const alphabets = ['a', 'b', 'c', 'd', 'e']

a = alphabets.toString() 
b = alphabets.join(" * ")
console.log(a) // returns 'a,b,c,d,e' as output
console.log(b) // returns 'a * b * c * d * e' as output


alphabets.pop() // removes last element in an array
alphabets.push('f') // adds a element to an array, at the end


function increaseAlphaSize(q){
	return q.toUpperCase()
}

c = alphabets.map(increaseAlphaSize) // array .map() method
console.log(c)

vowels = ['a','e','i','o','u']

function sortVowels(value){
	if(vowels.includes(value)){
		return value.toUpperCase()
	}
}

d = alphabets.filter(sortVowels)
console.log(d)
// the best method to declare an array is using the 'const' keyword


// javascript date
const date = new Date()
console.log(date)

const dateAndMonth = new Date(1996, 5, 20)
console.log(dateAndMonth)

// date methods

console.log(date.toUTCString())
console.log(date.toDateString())
console.log(date.toISOString())


// javascript math
console.log(Math.round(12.3))


Math.round(x)	// Returns x rounded to its nearest integer
Math.ceil(x)	// Returns x rounded up to its nearest integer
Math.floor(x)	// Returns x rounded down to its nearest integer
Math.trunc(x)	// Returns the integer part of x 

// Ternary operator
age = 12
let voteable = (age < 18) ? "Too young to vote" : "Old enough to vote"

console.log(voteable)


// javascript conditionals
// if statements

let voters = 200

if(voters < 100){
	console.log("Welcome home")
}

const greeting = (voters < 100) ? 'Welcome Home': 'Get your numbers together'
console.log(greeting)


let numbers;
// switch statement
switch(voters){
	case voters < 100:
		numbers = "Under 100";
		break;
	case voters == 100:
		numbers = "Equal numbers";
		break;
	case voters > 200:
		numbers = 'Over 200'
		break;
}


// javascript for-loop
let len = ['a','b','c','d'];

for(let q = 0; q < len.length; q++){
	console.log(len[q])
}


// javascript for-in loop
// this loops through the properties of an object
const person = {
	fname: "John",
	lname: 'Doe',
	age: 25
}

let texts = " ";
for (let x in person){
	console.log(x)
	console.log(texts += person[x])
}

const brila = [45, 4, 9, 16, 25];

let txt = "";
for (let x in brila) {
	console.log(x)
  	console.log(txt += brila[x]);
}

// javascript array.foreach()
const sapientia = [1,2,3,4,5,6,7,8,9];

function myFunction(value){
	console.log(value)
}
sapientia.forEach(myFunction)


// for-of loop
const language = 'Javascript';

for(let x of language){
	console.log(x)
}

const models = ['BMW','Volvo','Toyota']
for(let y of models){
	console.log(y)
}