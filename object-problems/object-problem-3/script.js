/* Create an object with three items in it, then write a JavaScript function that accepts 
an object and tells you the length (tells you how many items are in it) of the object.

1. I would create an Object
2. I would declare a function and give it a parameter of object and inside the function I would
create an array that contains all of the objects keys using the Object.keys method and then I would
use the array length property to let me know how many properties are actually in the object.
*/

const items = {
  tool: 'Screwdriver',
  sneaker: 'Jordan',
  fruit: 'Orange',
}

function numberOfItems(object) {
  let array = Object.keys(object);
  return array.length;
}

console.log(numberOfItems(items));