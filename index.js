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