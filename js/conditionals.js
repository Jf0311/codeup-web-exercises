// // "use strict";
// //
// // /* ########################################################################## */
// //
// // /**
// //  * TODO:
// //  * Create a function named `analyzeColor` that accepts a string that is a color
// //  * name as input. This function should return a message which relates to the
// //  * color stated in the argument of the function. For colors you do not have
// //  * responses written for, return a string stating so
// //  *
// //  * Example:
// //  *  > analyzeColor('blue') // returns "blue is the color of the sky"
// //  *  > analyzeColor('red') // returns "Strawberries are red"
// //  *
// //  *
// //  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// //  *
// //  * You should use an if-else-if-else block to return different messages.
// //  *
// //  * Test your function by passing various string literals to it and
// //  * console.logging the function's return value
// //  */
//     function analyzeColor(color){
//         if (color === 'blue'){
//             return 'blue is the color of the ocean';
//         } else if (color === 'yellow'){
//             return 'yellow is the color of cheese';
//         } else if (color === 'pink'){
//             return 'pink is the best starburst color';
//         } else {
//              return " No one likes that color";
//         }
// }
// console.log(analyzeColor('red'));
// //
// // // Don't change the next two lines!
// // // These lines create two variables for you:
// // // - `colors`: a list of the colors of the rainbow
// // // - `randomColor`: contains a single random color value from the list (this
// // //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// // /**
// //  * TODO:
// //  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
// //  * You should see a different message every time you refresh the page
// //  */
// // console.log(analyzeColor(randomColor));
// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
//  function  analyzeColor(color){
//     switch(color.toLowerCase()) {
//         case "red":
//             return (" Red \, What a coincidence, that's my favorite color!");
//
//         case "green":
//            return ( " Green \, That is the hulk\'s favorite color");
//
//         default:
//             return (color + " That a nice color");
//
// }
//  }
// console.log(analyzeColor(randomColor));
// //
// // /**
// //  * TODO:
// //  * Prompt the user for a color when the page loads, and pass the input from the
// //  * user to your `analyzeColor` function. Alert the return value from your
// //  * function to show it to the user.
// //  */
// var colorInput = prompt("Enter your favorite color");
// console.log(colorInput);
// console.log(analyzeColor(colorInput));
// alert(analyzeColor(colorInput));
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * everything for free!.
//  *
//  * Write a function named `calculateTotal` which accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */
//  function calculateTotal (luckyNumber, totalAmount){
//      if (luckyNumber === 0){
//          return totalAmount;
//      } else if(luckyNumber === 1){
//          var discount = totalAmount * .1
//          return totalAmount - discount;
//      } else if (luckyNumber === 2){
//           discount = totalAmount * .25
//          return totalAmount - discount;
//      } else if (luckyNumber ===3){
//          discount = totalAmount * .35
//          return totalAmount - discount;
//      } else if (luckyNumber === 4){
//          discount = totalAmount * .50
//          return totalAmount - discount;
//      } else if (luckyNumber === 5){
//           return totalAmount * 0;
//      }
//
// }
//
// console.log(calculateTotal(0,100));
// console.log(calculateTotal(3,100));
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
//
//  var totalBill = prompt('How much was your total ')
//  var calBill = calculateTotal(luckyNumber, totalBill)
// alert("The lucky was: " + luckyNumber + " the total before was: " + totalBill + " the total after is : " + calBill);
//  console.log(luckyNumber, totalBill, calBill);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */
//
// var evenOrOdd = function aSpecificNumber (number) {
//     if (number % 2 === 0) {
//         alert(+number+ ' is even');
//     } else if (number % 2 !== 0){
//         alert(+number+ ' is odd');
//     }
// }
//
//
// var numberPlusAHundred = function aSpecificNumber(number){
//     var addAHundred = number + 100;
//     alert("This number plus 100 is : " + addAHundred );
// }
//
//
// var isPositiveOrNegative = function(number) {
//     if (number > 0) {
//         alert('The number ' +number+ ' is positive')
//     } else {
//         alert('The number ' +number+ ' is negative')
//     }
// }
//
// var iWantToEnterANumber = confirm( 'Would you like to enter a number ?')
//     if (iWantToEnterANumber) {
//      var enteringANumber = +prompt('Please Enter a Number')
//       evenOrOdd(enteringANumber)
//         numberPlusAHundred(enteringANumber)
//         isPositiveOrNegative(enteringANumber)
// } else {
//         alert("Have a great day");
//         }

// function calculateTotal (luckyNumber, totalAmount){
//     switch(luckyNumber){
//         case 0:
//             return totalAmount;
//         case 1:
//             return totalAmount * .1;
//         case 2:
//             return totalAmount * .25;
//         case 3:
//             return totalAmount * .35;
//         case 4:
//             return totalAmount * .50;
//         case 5:
//             return totalAmount * 0;
//
//
//     }
// }
var movie = "";

switch(movie) {
    case "Die Hard" :
    case  "The Expendables":
    case  "Crank" :
        console.log(' This is a classic movie');
        break;
    case "Breaking Bad":
    case "Better Call Saul":
        console.log('Not a movie , but a Awesome TV show');
        break;
    default :
        console.log(" You need to watch more TV and movies");
}


