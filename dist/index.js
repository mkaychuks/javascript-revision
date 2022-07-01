"use strict";
let course = "Type script";
let is_published = false;
let courses = course.endsWith("p");
console.log(course.toUpperCase());
console.log(course.length);
console.log(course.slice(3, 12));
console.log(course.trim());
let names = "Typecript";
let surname = " is the new sauce";
let final = names.concat(surname);
console.log(final);
const firstName = "John";
const surName = "Doe";
console.log(`Your fullname is ${firstName} ${surName}`);
let age = 2;
console.log(age.toString());
console.log(age.toExponential(3));
console.log(age.toLocaleString());
const cars = ['Saab', 'volvo', 'mercedes', 'toyota'];
const motor = ['Saab', 123, 'volvo', 1234, true, true, 'Wonderful'];
const bool = [true, false, false, true];
const nums = [1, 2, 3, 4, 5];
cars.push("Hurricane");
console.log(cars);
cars.splice(1, 1);
console.log(cars);
console.log(motor.sort());
console.log(cars[2].toUpperCase());
console.log(motor[1].toString());
let a = cars.toString();
console.log(a);
let b = cars.join(", ");
console.log(b);
function increaseAlpha(letter) {
    return letter.toUpperCase();
}
console.log(cars.map((car) => increaseAlpha(car)));
function startsWithT(m) {
    if (m.charAt(0) === 'S') {
        return m.toUpperCase();
    }
}
console.log(cars.filter((car) => startsWithT(car)));
age = 26;
const voteable = (age <= 18) ? "You are not eligible to vote" : "Go and get your pvc";
console.log(voteable);
if (age <= 18)
    console.log('You are not eligible to vote');
console.log('Go and get your pvc');
if (age <= 18) {
    console.log("You are not eligible to vote");
}
else {
    console.log('Go and get your pvc');
}
for (let i = 0; i < cars.length; i++) {
    let text = " is a car";
    console.log(cars[i].concat(text));
}
for (let i in cars) {
    console.log(cars[i]);
}
cars.forEach((car) => console.log(car.toUpperCase()));
