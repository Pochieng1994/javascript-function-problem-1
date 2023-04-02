/* Write a JavaScript function to calculate the factorial of a number.
1. I would declare my function.
2. I would set a Basecase inorder to make sure that my recursive function does not loop to the point
that it crashes my browser.
3. I would then return my factorial formula to make sure that I get the factorial of the number that is
called as an argument in my factorial formula.

*/

function getFactorial(num) {
  if(num === 1) {
    return 1;
  }

  return num * getFactorial(num-1);
}

console.log(getFactorial(5));