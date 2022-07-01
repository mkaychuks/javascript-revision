// built in types in typescript

let course: string= "Type script"
let is_published: boolean = false

// trying out some string methods in typescript
let courses = course.endsWith("p") 
console.log(course.toUpperCase())
console.log(course.length)
console.log(course.slice(3, 12))
console.log(course.trim())

// concat strings
let names: string = "Typecript"
let surname: string = " is the new sauce"

let final = names.concat(surname)
console.log(final)

// string literals
const firstName: string= "John"
const surName: string = "Doe"
console.log(`Your fullname is ${firstName} ${surName}`)


// numbers in typescript
let age = 2

console.log(age.toString())
console.log(age.toExponential(3))
console.log(age.toLocaleString())


// arrays in Typescript
const cars: string[] = ['Saab', 'volvo', 'mercedes', 'toyota'] // this array accepts only strings
const motor: (string | number | boolean )[] = ['Saab', 123, 'volvo', 1234, true, true, 'Wonderful'] // this array accepts either a string, a number or a boolean type of object
const bool: boolean[] = [true, false, false, true] // this array accepts only booleans
const nums: number[] = [1,2,3,4,5] // this array accepts only numbers

// array methods
cars.push("Hurricane")
console.log(cars)

cars.splice(1, 1)
console.log(cars)

console.log(motor.sort())

console.log(cars[2].toUpperCase())
console.log(motor[1].toString())

let a = cars.toString()
console.log(a)
let b = cars.join(", ")
console.log(b)

// map and filter method
function increaseAlpha(letter: any){
    return letter.toUpperCase()
}
console.log(cars.map((car) => increaseAlpha(car)))

function startsWithT(m: any){
    if(m.charAt(0) === 'S'){
        return m.toUpperCase()
    }
}
console.log(cars.filter((car) => startsWithT(car)))

// if-else statements, while, switch statements, ternary operator
age = 26

const voteable = (age <= 18) ? "You are not eligible to vote" : "Go and get your pvc"
console.log(voteable)

// the above can be written as the following
if(age <= 18)
    console.log('You are not eligible to vote')
console.log('Go and get your pvc')

// or
if(age <= 18){
    console.log("You are not eligible to vote")
} else {
    console.log('Go and get your pvc')
}


// for loop (old method--- i guess)
for(let i= 0; i < cars.length; i++){
    let text = " is a car"
    console.log(cars[i].concat(text))
}

// seems better than the previous
for(let i in cars){
    console.log(cars[i])
}

cars.forEach((car) => console.log(car.toUpperCase()))

// while loops
let ndlea = "Drug and Law Enforcers"
let counter = 0

while(ndlea.charAt(0) === 'D' && counter < 6){
    console.log("Infinity stones")
    counter++
}


// functions in typescript
function addTwo(a: number, b: number): number{
    return a + b
}
console.log(addTwo(2,2))

// functions with default values>
function calculateTax(income: number, taxYear: number = 2020): number {
    if(taxYear < 2022){
        return income * 1.2
    }
    return income * 1.3
}
console.log(calculateTax(20_000))

// arrow functions in typescript
const calculateTaxs = (income: number, taxYear: number = 2020) : number => {
    if(taxYear < 2022){
        return income * 1.2
    }
    return income * 1.3
}