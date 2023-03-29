// 1. Create a function that takes in a number of two-pointers (shots made that count as 2 points each)
//  and three-pointers (shots made that count as 3 points each) made and returns a basketball team's total score.
//   Invoke the function and console.log the results.
// 2. Create a new file petstore.sql. Create a pet store database, with 2 mySQL tables, pets and owners.
//  Each table should have at least 3 properties. Insert one pet and one owner into appropriate tables.
// 3. Run a query in your terminal to print all of the data in the pets table.


function addPoints (twoPointers, threePointers) {
   return ((twoPointers * 2) + (threePointers * 3) )
}
const blueTeamTwoPointer = 8
const blueTeamThreePointer = 6

console.log(addPoints(blueTeamTwoPointer, blueTeamThreePointer))