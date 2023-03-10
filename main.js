// thsi is where we will have our JS functionality - separate from test cases
function isEven(num) {
  return num % 2 == 0;
}

function divide(a, b) {
    return a / b;
  }

function isPositive(num) {
    if( num >= 0) return true
    return false
}
//module.exports is maintained by node.js
//modue.exports is going to be an object, which exports functions we can access anywhere throughout our project/file structure
//In ths case, we are exporting the refernece to our function isEven, so that we can test within lesson.test.js 
module.exports = {
    isEven,
    divide,
    isPositive
}
