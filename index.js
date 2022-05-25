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