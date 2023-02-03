/*Write a Javascript function that accepts two arguments, a string and a letter and the function will count the
number of occurrences of the specified letter within the string.

1. I would define a Javascript function that takes in 2 parameters. 
2. Define create a letterCount variable inside of the function and set it equal to 0.
3. I would then create an array and save the array in a variable.
4. I would then proceed to write my for loop with its condition and logic.
5. I would return the letterCount 
6. I would console.log the function and input the 2 parameters in.
*/

function numberOfOccurrences (string, letter) {
  let letters = string.toLowerCase().split('');
  let letterCount = 0;
  
  for (let i = 0; i < letters.length; i++) {
    if (letters [i] === letter) {
      letterCount += 1;
    }
  }
  
  return letterCount;
  
}

console.log(numberOfOccurrences('Peter', 'e'));



