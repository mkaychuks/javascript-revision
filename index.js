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