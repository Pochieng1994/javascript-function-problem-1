/* Write a Javascript Function that accepts a string as a parameter and finds the longest
word in the string.

1. Define a Javascript function that accepts a string as a parameter. 
2. I would use the split method to split the string passed in as a parameter into an array named
 arrayOfWords.
3. After creating the arrayOfWords array I would then move on to write a for loop statement that
references the array I created named arrayOfWords.
*/

function longestWordInString(myString) {
  let arrayOfWords = myString.split (' ');
  for (let i = 0; i < arrayOfWords.length; i++) {
    console.log('Peter');
  }
}

longestWordInString ('My name is Peter');



