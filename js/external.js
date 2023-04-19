// "use strict"
//
//  console.log("Hello from external JavaScript");
//
//  alert("Welcome to my Website");
//
//  var favoriteColor = prompt("What is your favorite color?");
//
//  alert(favoriteColor  + " is my favorite color too!!") ;
//
// //Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
// //
// // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// // Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// // A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.
// // Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
// //
// //     When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// //     Use an alert to show the results of each problem.
// //     Finally, commit the changes to your git repository, and push to GitHub.
//
//  var littleMermaidRented = Number(prompt("How many days have you rented  The little Mermaid?"));
//  var brotherBearRented = Number(prompt("How many days have you rented  The Brother Bear?"));
//  var herculesRented = Number(prompt("How many days have you rented  The Hercules?"));
//  var moviePriceForADay = 3;
//
//  var sum = (littleMermaidRented + brotherBearRented + herculesRented ) * moviePriceForADay;
// alert( "Your amount for the rental is " + sum + " dollars");
//
// var contractForGoogle = Number(prompt("How many hours have you worked for Google")) * 400;
//  var contractForAmazon =  Number(prompt("How many hours have you worked for Amazon")) * 380 ;
//  var contractForFacebook = Number(prompt("How many hours have you worked for Facebook")) * 350;
//
//  var payTotal = contractForGoogle + contractForAmazon + contractForFacebook ;
//
//  alert("You will receive " + payTotal + " this week.");
//
// var studentEnrolled = true;
//     console.log(studentEnrolled);
// var studentNotEnrolled = true
//
// var studentClassScheduleNotFree = false + studentNotEnrolled;
// var studentClassScheduleFree =  true + studentEnrolled;
//
// var classNotFilled = true && studentEnrolled;
//     console.log(classNotFilled);
// var classIsFilled = false && studentNotEnrolled;
// console.log(classIsFilled);
//
//   var isClassFilled = confirm("Is class filled?");
//   console.log(isClassFilled );
//  var isStudentScheduleIsFree = confirm("Is student schedule free?");
//   console.log(isStudentScheduleIsFree);
//
//   alert("Good Luck");
//
//
// var premiumDiscount = confirm( "Are you a premium member?" + " Non Premium members must purchase two items for a product offer");
//     console.log(premiumDiscount);
//     var offerStillValid = confirm ("Is the offer still valid" + " ,Non valid offers will not be applied");
//     console.log(offerStillValid);
//
//
//
//     alert("Thank you for shopping!")

//Write a function that accepts and multiplies 3 numbers and alerts the browser with the result

// function multiplyThreeNumbers(x,y, z){
//     var a = x * y * z ;
//     alert("My result is " + a);
// }
// console.log(multiplyThreeNumbers(2, 3, 4));

var array = ['john','paul','george','ringo','santana'];
console.log(array[2])