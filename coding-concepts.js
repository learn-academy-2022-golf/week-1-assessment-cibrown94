// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

// const cohort = "LEARN 2022"
// console.log(cohort.length)

// // a) Your answer: 10
// // b) Verify and explain: I read this as cohort wanting to be counted
// output: 10

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: synthax error; I believe it to be synthax error because 4 is not a defined 
// // b) Verify and explain: 
// output: o 

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Javascript
// b) Verify and explain: "Ruby", Using index means that the count starts at 0; length starts at 1

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]          WORK ON ANSWER TO THIS ONE
console.log(weekendDays.toUpperCase())

// a) Your answer: SATURDAY SUNDAY
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function. The .toUpperCase with uppercase the letters

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: string
// b) Verify and explain: number; looking it up, i see it describes the type of data type; i.e, boolean, number, undefined, string. characters are also a computing factor in the decision msking of which data type it is describing. 
