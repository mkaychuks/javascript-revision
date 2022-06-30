// built in types in typescript

let age: number = 2
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


// if-else statements
names = "Brila FM"

if(names.charAt(3) === 'i'){
    console.log(true)
} else {
    console.log(false)
}