// Here’s the homework for tonight :sparkling_heart:
// Remember, practice practice practice.
//  Please create a file named weekOneDayThree.js in your homework folder, complete the following exercises, and push your solutions to Github! :blush:
// Write a function that multiplies two numbers. Invoke the function.
// 2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
// Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
// Invoke that function for a few different scores and log the result to make sure it works for each case.
// 3. Write an array containing items of the same data type.
// 4. Write a function to get the first element in an array. Invoke the function.


// function multiply2(num1, num2) {
//     const total = num1 * num2
//     return total
// }
// // invoke the function

// console.log(multiply2(2, 3))


// if the score is >= 90 then the grade is A
// if the score is >= 80 then the grade is B
// if the score is >= 70 then the grade is C 
// if the score is >= 60 then the grade is D
// if the score is <= 59 then the grade is F
// function assignGrade(score) {
//     if (score >= 90) {
//         return "A"
//     } else if (score >= 80) {
//         return "B"
//     } else if (score >= 70) {
//         return "C"
//     } else if (score >= 60) {
//         return "D"
//     } else if (score <= 59) {
//         return "F"
//     }
// }

// invoke
// assignGrade(90)

// console.log(assignGrade(75))


//

const makeupproducts = [
    "foundation",
    "concealer",
    "highlighter",
    "blush",
    "powder"
]

console.log(makeupproducts)


function firstItem(itemOne) {
 return itemOne
}

// argument
console.log(firstItem(makeupproducts[0]))

