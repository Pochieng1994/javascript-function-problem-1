/* Write a JavaScript function to sort the following array of objects by title value.
Hint: Read about the JavaScript sort method.
Example array: [ 

   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},

   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},

   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}

   ];

  1. I would declare a function name it and insert array as a parameter.
  2. I would then apply the sort method to the array passed making sure that I pass in a comparative
  function into the sort method.
  3. I would then write 3 conditional statements the first one checking to see whether the title
  of the first parameter passed in is less than the title of the second parameter passed in in the event
  that this is true then the first parameter should be ordered before the second parameter.
  The second condition would see it the title of the first parameter is greater than the second parameter.
  The last condition would check to see if the value of the first and second parameter are equal to each
  other if this is true then a value of 0 should be returned.
*/

let arrayOfBooks = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    libraryID: 1254,
  },

  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    libraryID: 4264,
  },

  {
    author: 'Suzanne Collins',
    title: 'MockingJay: The Final Book of The Hunger Games',
    libraryID: 3254,
  }
]


function sortByTitle(array) {
  array.sort(function (a, b) {
    if (a.title.toUpperCase() < b.title.toUpperCase()) {
      return -1;
    }
    if(a.title.toUpperCase() > b.title.toUpperCase()) {
      return 1;
    }
    if(a.title.toUpperCase() === b.title.toUpperCase()) {
      return 0;
    }
  })
}

console.log(sortByTitle(arrayOfBooks));

console.log(arrayOfBooks);