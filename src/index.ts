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
let age: number = 2

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