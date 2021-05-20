// Convert a num to a string
function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
}

/* ----------------------------------------- */

// Remove first and last character
function removeChar(str) {
    //You got this!
    let arr = str.split('')
    arr.pop()
    arr.shift()
    let s = arr.join('')
    return s
};

    //Best practice
function removeChar(str) {
    return str.slice(1, -1);
}

/* ----------------------------------------- */

// Add all index of an array
function positiveSum(arr) {
    let sum = 0
    arr.map( num => num > 0 ? sum += num : null)
    return sum
  }

  // Common response:
  function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }

 /* ----------------------------------------- */

 // Make negative
 function makeNegative(num) {
    if (num > 0) {
      return num * -1
    } else {
      return num
    }
  }

  //Common response:
  function makeNegative(num) {
    return -Math.abs(num);
  }

/* ----------------------------------------- */

// Mathematical Operations
// Take three values (operator as a string, num1, num2) return the result
function basicOp(operation, value1, value2)
{
  if (operation == '+') {
      return value1 + value2
  } else if (operation == '-') {
      return value1 - value2
  } else if (operation == '*') {
      return value1 * value2
  } else if (operation == '/') {
      return value1 / value2
  }
}

// Other solutions:
function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}

function basicOp(operation, value1, value2)
{
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2
  };
  return cases[operation]
}

/* ----------------------------------------- */

//Take array of binary, return number 

//NOT SOLVED, but here are the solutions:
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

/* ----------------------------------------- */

// Basic Hello World function

function greet(){
  return "hello world!"
}

/* ----------------------------------------- */

// Convert string to number

var stringToNumber = function(str){
  let num = str * 1;
  return num;
}

// Most popular
var stringToNumber = function(str){
  return parseInt(str);
}

/* ----------------------------------------- */

//Check to see if number is even or odd

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  } else {
    return "Odd"
  }
}

// Most Popular

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

/* ----------------------------------------- */
//given camelCasing string, return with spaces

function solution(string) {
  let arr = string.split('')
  let arr2 = []
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].toUpperCase()) {
      arr2.push(' ', arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
console.log(arr2.join(""))
}

solution('camelCasing')
solution('thisIsATest')

//most popular
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
//
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
/* ----------------------------------------- */



/* ----------------------------------------- */



/* ----------------------------------------- */
