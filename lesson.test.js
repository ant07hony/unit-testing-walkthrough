//import our functions from main.js
const modules = require('./main')
//console.log(modules)
const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

//This is where all of our test cases belong

//----------This is the test case for is Even------------
test("It should return true when called with an even number", () => {
    expect(isEven(4)).toBe(true)
})

//---------------test case for divide-------------------
test("It should return a number when called ", () => {
    //if b is 0, the return value would be infinity. Infinity is still considered a number. Thus, passing the test.
    expect(typeof divide(4,2)).toBe("number")
})

test("It should return true when passed a positive number and 0", () => {
    //base case: where a number is true
    expect(isPositive(3)).toBe(true);
    //Edge case: consider 0 as true
    expect(isPositive(0)).toBe(true)
  });

  test("It should return false when passed a negative number", () => {
    //added return false to make test pass
    expect(isPositive(-3)).toBe(false)
  })