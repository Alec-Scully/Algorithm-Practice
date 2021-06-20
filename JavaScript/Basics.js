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

// return longest string with only 2 unique letters

function string(p1) {
  let string = p1.split("")
  let sub = []
  let sub2 = []
  let count = 0
  for (i = 0; i < string.length; i++) {
      if (!sub.includes(string[i]) && count === 2) {
          if (sub2.length < sub.length) {
              sub2 = sub
          }
          count = 0
          sub = []
          let pos = 1
          let start = string[i - 1]
          for (j = i-1; j > 0; j--) {
              if (string[j] == start) {
                  pos++
              } else {
                  break;
              }
          }
          i = i - pos;
      } else if (sub.includes(string[i])) {
          sub.push(string[i])
      } else if (count < 2) {
          sub.push(string[i])
          count++
      }
  }

  return sub2
}

string("aacacaac")

// should return "aacacaac"

/* ----------------------------------------- */

// adding different values in JavaScript

var a1;
var a2 = "3";
var a3 = 3;

var b1 = a1 + a2;
var b2 = a1 + a3;
var b3 = a2 + a3;

// console.log(b1)
// console.log(b2)
// console.log(b3)

var c1 = b1 + a1
var c2 = b2 + a2
var c3 = b3 + a3

// console.log(c1)
// console.log(c2)
// console.log(c3)


/* ----------------------------------------- */

// take in array of string, return them bumbered
var number=function(array){
  for(i=0; i<array.length; i++){
    array[i] = `${i+1}: ${array[i]}`
  }
  console.log(array)
}

number(["a", "b", "c"])

//best practice
var number = function(array) {
  return array.map(function (line, index) {
    return (index + 1) + ": " + line;
  });
}

/* ----------------------------------------- */

function solution1(S) {
    var occurrences = new Array(26);
    for (var i = 0; i < occurrences.length; i++) {
        occurrences[i] = 0;
    }

    for (var id in S) {
        occurrences[S.charCodeAt(id) - 'a'.charCodeAt(0)]++;
    }

    var best_char = 'a';
    var best_res = 0;

    for (var i = 0; i < 26; i++) {
        if (occurrences[i] > best_res) {
            best_char = String.fromCharCode('a'.charCodeAt(0) + i);
            best_res = occurrences[i];
        }
    }

    return best_char;
}

console.log(solution1("helloaaabbb"))

/* ******************************* */



function solution2(message, K) {
    let a = message.split("")
    if (K > a.length) {
        return message
    } else if (K !== 0) {
        if (a[K] === " " && a[K - 1] !== " ") {
            // console.log(a.slice(0, K).join(""))
            return (a.slice(0, K).join(""))
        } else {
            solution2(message, K - 1)
        }
    } else {
        // console.log("Message too long or does not contain spaces.")
    }
}

// solution2("To crop or not to crop", 21)
// solution2("Codility We test coders", 14) 

/* ******************************* */

function solution3(A) {
    count = 0;
    for (i = 0; i < A.length; i++) {
        if (i + 1 > A.length || i + 2 > A.length) {
        } else if (A[i] - A[i + 1] == A[i + 1] - A[i + 2]) {
            count += 1;

            let newA = A.slice(i + 2)
            let dist = A[i] - A[i + 1]

            for (j = 0; j < newA.length; j++) {
                if (j + 1 >= A.length) {
                    console.log("No more new array!")
                } else if (newA[j] - newA[j + 1] == dist) {
                    count += 1;
                }
            }
        }
    }
    // console.log(count)
}

solution3([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
/* ----------------------------------------- */

//given two strings, determine if the first string ends with the second string

function solution(str, ending){
  return str.endsWith(ending)
}

solution("abc", "bc")
solution("test", "?")


/* ----------------------------------------- */

/* ----------------------------------------- */

/* ----------------------------------------- */