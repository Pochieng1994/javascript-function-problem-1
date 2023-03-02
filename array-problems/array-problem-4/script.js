/* Write a JavaScript function to remove duplicate numbers from an array of numbers.

1. I would define my function and name it removeDupicateNumbers.
2. I would then utilize the filter method to and pass in a callback function/test that loops through the
 array and ensures that all duplicate numbers from the array are removed I would do this by
 using the indexOf()method.
*/

function removeDuplicateNumbers(array) {
  return array.filter((val, index) => array.indexOf(val) === index);
}