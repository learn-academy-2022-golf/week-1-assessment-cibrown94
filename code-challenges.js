// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js
-----------------------------------------------------------------------

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.


// const temp1 = 42
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// // Expected output: "212 is at boiling point"

// -----------------------------------------------------------------------------

// // Describe your process:
// Input: 
// Find a way to destruct the array 
// Create a conditional that will compute any given number
// Since there are 3 variables in the array, there needs to be 3 conditionals
// You the greater than less than symbols which are primitive data types, comparison operators. So we need to use if, if else, and return statements. 




// I made alot of errors so the answer and my explanations are long. 
// Pre coding thought process.
// Create conditionals that will compute the variables
// Input: Any given number
// // You the greater than or less than symbols. One of the primitive data types, formally called comparison operator
// // Use an if statement with a string interplation 
// This is all identifying the necessary actions that go into the function
// I googled how to combine the const (variable line)
// Than start the function

// const [temp1, temp2, temp3] = [42, 350, 212] => {
//     if(temp1 >= 42){
//         return "42 is below boiling point"
//     } else if (temp2 >= 350) {
//         return "350 is above boiling point"
//     } else if (temp3 >= 212)
// {
//         return "212 is at boiling point"
// }

    // if(temp1 >= 42){
    //     return "42 is below boiling point"
    // } 
    // else if (temp2 >= 350)
    // {
    //     return "350 is above boiling point"
//     // } else if (temp3 >= 212){
//     //     return "212 is at boiling point"
//     // }

// //     // )

// // }
// console.log(temp(42))


// const [temp1, temp2, temp3] = [42, 350, 212] => {


    // SyntaxError: Malformed arrow function parameter list

    // I got this error message saying it does not like my arrow function

    // const temp1 = (42)
    // // // Expected output: "42 is below boiling point"
    
    // const temp2 = (350)
    // // // Expected output: "350 is above boiling point"
    
    // const temp3 = (212) => {
    //     if(arg1 >= 42){
    //         return "42 is below boiling point"
    //     } else if (arg2 >= 350) {
    //         return "350 is above boiling point"
    //     } else if (arg3 >= 212)
    // {
    //         return "212 is at boiling point"
    // }

// 
//     /Users/learnacademy/golf/week-1-assessment-Ciani-Brown/code-challenges.js:98
//             return `${nums}` is above boiling point`
//                              ^^

// SyntaxError: Unexpected identifier
//     at Object.compileFunction (node:vm:360:18)
//     at wrapSafe (node:internal/modules/cjs/loader:1078:15)
//     at Module._compile (node:internal/modules/cjs/loader:1113:27)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1203:10)
//     at Module.load (node:internal/modules/cjs/loader:1027:32)
//     at Module._load (node:internal/modules/cjs/loader:868:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

    const temps = (nums) => {

        // const temps = (42, 350, 212) => {
        if (nums < 212){
            return `${nums} is below boiling point`
            // the numbs variable is there because there needs to be something inserted. 
        } 
        else if (nums > 212){
            return `${nums} is above boiling point`
        }
        else if (nums === 212){
            return `${nums} is at boiling point`
        }
             }
        console.log(temps(400))

        // const temps = (42, 350, 212) => {
    // Post coding notes, and reflections

// At first I spent most of my time trying to simply the const variables, until reading over the actual question. The actual question states "any given number". SO than i realized that the const variable needs to be numbs. 
// The arguement at first i put just the indivudal number thinking that the inputted number needs to be compared to the original const degrees, when in actuality I just needed to compare what above and below the correct amount. 
// In addition, after going through the syllabus and my notes, the nums variable, needs a string interplation, which is what i said at first. 
// I realize paying attention to question and pseudo coding will minimize the time i spend on the question, and allow for better troubleshooting. 


-----------------------------------------------------------------------------

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]


const comboArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log (comboArrays.length)
// Expected output: 9

// Since the variables are already defined, so the just the arguements need to be declared
// I need to use the accessors method,  but it be specific the .concat()
// The concat will merge 2 or more arrays to form one array



// console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)) 

// // ouput: [
//   2, 5, 2, 2, 4,
//   6, 3, 5, 3s
// ]


// So now I have to create an arguement to return the length using the const variables 
// After looking over the syllabus, reading i can merge the two variables and create on arguement


// TypeError: padres1984WorldSeriesRuns is not a function
//     at Object.<anonymous> (/Users/learnacademy/golf/week-1-assessment-Ciani-Brown/code-challenges.js:26:21)
//     at Module._compile (node:internal/modules/cjs/loader:1149:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1203:10)
//     at Module.load (node:internal/modules/cjs/loader:1027:32)
//     at Module._load (node:internal/modules/cjs/loader:868:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:23:47

// I got this error code when i typed out a new code vice copy and pasting, and i forgot the .concat. After adding the .concat, than running the arguement with a length property,my code worked. 


//     const comboArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
//  console.log (comboArrays.length)



-----------------------------------------------------------------------------


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:

// Read over question
// Reverse the letters in the string 
// Using the reference problem and looking everything over again. I need to make another variable that will take currentCohort and split it using ""
// Do this splits the letters "G" "O".. like that
// So doing that separated it into thinking they are their own little variables
// Now I use the reverse mutator to reverse the letters which came back with it with backtips 
// So that i used the .join(" "). 

// To complete this i used javascript and the syallbus. 
// I think that the syballus should describe more detail and more examples using numbers, letters and string. I did use the syballus before i hopped on Google for reference. 

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
const students = currentCohort.split("")
// ====> used this as a refernce for this problem // const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
                // const currentCohort = students.reverse()
                // console.log(students.reverse())
console.log(students.reverse())
console.log(students.join(""))


output: 2202 floG
// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
//                 const tems = sanDiegoWinterTemperatures.sort()
//                 console.log(tems.reverse())


-----------------------------------------------------------------------------
// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:

// Notice the 2 variables separate Questions
// Input: 42 and give me the last index of the value from the array. The count starts at 0. 
// Identify that this is an array, so I need to use the correct mutator
// create the arguement using the variable with the mutator.lastIndexOf with the required value in the parenthesis. 

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8


console.log(myNumbers.lastIndexOf(42))
console.log(myNumbers.lastIndexOf(10))

output:  
7 
8


-----------------------------------------------------------------------------

// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Describe your process:

// Create a function with provided variables
// create a new variable with how we want it to looking
// Basically a process to use 2 mutators and one arguement

//                     Create another const, let, or var to bring together the first thing we want it to do 
//                     Than create a argument that will tell it whatt we want it to do after.

                const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
                const temps = sanDiegoSummerTemperatures.sort()
                console.log(temps.reverse())

// Expected output: [82, 80, 79, 77, 76, 73, 72]

                const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
                const tems = sanDiegoWinterTemperatures.sort()
                console.log(tems.reverse())
// Expected output: [68, 67, 66, 66, 62, 59, 59]


// const temps = sanDiegoSummerTemperatures.reverse()
// // // console.log(sanDiegoSummerTemperatures.reverse())
// console.log(sanDiegoSummerTemperatures.sort())

// console.log(sanDiegoWinterTemperatures.sort())
// console.log(sanDiegoWinterTemperatures.reverse())

// **I wasted about 20 minutes because i created a practice page and was running the wrong js file. **

