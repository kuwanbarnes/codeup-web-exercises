"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// var color= 'blue';
// color="red";
// alert(analyzeColor("blue"));
   function analyzeColor(color) {

    if (color === "blue" )  {
        return "blue is the color of the sky";
    } else if (color === "red") {
        return "strawberries are red";
    } else{   (color ==="cyan")
        return "I don't know anything about cyan";
    }}
      // console.log(analyzeColor("blue"))

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log("randomColor chosen" + randomColor);
console.log(analyzeColor(randomColor));
//var randomColor =
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor2(color) {
switch(color) {
    case "red":
        return("What a coincidence, that's my favorite!");
        break;
    case "yellow":
        return("really Yellow? Okay...");
        break;
    default:
        return (color + " isn't my favorite!");
        break;}
    }
console.log(analyzeColor2(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColors = prompt("What is your favorite color?");
alert(analyzeColor2(userColors));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//0 === "no discount"
//1 === "10% discount"
//2 === "25%"
//3=== "35% didscount"
//4 === "50% discount"
//5 === "its free"
//function calculateTotal(luckynum,total){
//switch (luckynum){
/*case 0:
/*/
function calculateTotal(luckynum,total){
if(luckynum === 0){
    return "no discount" + total;
}else{
    if (luckynum === 1){
        return "$"+ (.90 * total);}
    else if(luckynum === 2){
        return "$"+ (.75 * total);}
    else if (luckynum === 3){
        return .65 * total;}
    else if(luckynum === 4){
        return .50 * total;}
    else{
        if(luckynum === 5){
           return "its free";
        }

    }
}
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
///Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var totalbill = prompt("total bill");
//converting totalbill to number to use .toFixed
totalbill = parseFloat(totalbill);
alert("your lucky number is" + luckyNumber + ".");
alert("your price before discount was: $"+ totalbill.toFixed(2) + ".");
alert("your price after discount is:" + calculateTotal(luckyNumber,totalbill));





/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var confirm2 =confirm("Would you like to enter a number?");

if(confirm2){
    var response = prompt("Enter number");
    if(typeof parseFloat(response)==="number")
    if(response % 2 === 0) {
      alert(response + "is even")
    }else if(response % 2===1){
        alert(response + "is odd")
    }else{
        alert(response + " is not a number ")
    }

//
   alert(response +++  100);
    if(Math.sign(response)===1){
        alert("your number is Positive")
    }else{
        alert("your number is negative")
    }
  }


var shoppingList=["Milk","Bread","Water","toilet paper","Sugar","flour","cheese","hamburger"];
for(var i=0;i<shoppingList.length;i++)
console.log("Buy: "+shoppingList[i]);




