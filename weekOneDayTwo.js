// // 1.Write a switch statement that takes an animal and logs the sound 
// that animal makes to the console. 
// // Include at least 3 animals.
// // // 2.   Write a function that takes the name of a fruit and
//  logs the color of that fruit to the console.
// //  Use an if-else statement. Include at least 4 fruit options. 
//  Invoke the function.
// // // 3.   Write a function that adds two numbers together. 
//  Invoke the function. (edited)

// function animalList (animals) {
//     switch(animals) {
//         case dog :
//             console.log("woof")
//         break;
//         case cat :
//             console.log ("meow")
//         break;
//         case cow :
//             console.log ("moo")
//     } // code block

// }

// let dog = "woof"
// let cat = "meow"
// let cow = "moo"
// animalList(cat)

// function fruits() {
//     let fruitList = [apple, orange, grapes, kiwi]
//     if (apple)
//       else } {
//     (orange)
// } {
//     (grapes)
//     (kiwi)

// }

// const apple = "green"
// const orange = ("yellow")
// const kiwi = ("grey")
// const grapes = ("purple")


// console.log()

function logFruitColor(fruitName) {
  if (fruitName === 'apple') {
    console.log('Apples are usually red or green.');
  } else if (fruitName === 'banana') {
    console.log('Bananas are usually yellow or green.');
  } else if (fruitName === 'orange') {
    console.log('Oranges are usually orange.');
  } else if (fruitName === 'grape') {
    console.log('Grapes can be red, green, or purple.');
  } else {
    console.log('Sorry, I don\'t know the color of that fruit.');
  }
}

// Example usage:
logFruitColor('apple');
logFruitColor('banana');
logFruitColor('orange');
logFruitColor('grape');
logFruitColor('watermelon');

