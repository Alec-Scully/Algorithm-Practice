// Convert a num to a string
function numberToString(num) {
    // Return a string of the number here!
    return num.toString()
}

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