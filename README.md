# unit-testing-walkthrough

test("It should return true when called with an even number", () => {
  expect(isEven(2)).toBe(true);
});

- test()
    - This function takes two required arguments:
        1. The name of the test (this is how we will see the output of the test in our console)
        2. An anonymous arrow function where we perform the test
- expect()
    - The expect function takes one argument:
        - `The value that your code produces.`
            - For our Unit Tests, this will always be a call to the function we are testing with specific arguments
- toBe()
    - The toBe() function takes one argument:
        - The value that we expect should be returned by the code inside our expect() function