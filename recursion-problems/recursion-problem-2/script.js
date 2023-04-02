/* Write a JavaScript function to compute the sum of an array of integers.
1. I would declare my function and give or a parameter called array.
2. I would then write a base condition stating if the array length is equal to 0 then a value of 0 should
be returned hence stopping the recursive function.
3. I would then use the pop() method on my array to pop the last element off of my array I will 
then call on my function and every time the function is called on each integer that is popped off
will be summed up until the total is reached.

*/

let arrayOfIntegers = [1, 2, 3, 4, 5];

function sumOfIntegers(array) {
  if(array.length === 0) {
    return 0;
  }
  return array.pop() + sumOfIntegers(array);
}

console.log(sumOfIntegers(arrayOfNumbers));