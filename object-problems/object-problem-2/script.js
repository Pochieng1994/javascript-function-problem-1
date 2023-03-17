/* Create an array of people objects with first name, last name, and age, then write a JavaScript
 function that takes in an array and console logs the first and last names of all the people.
1. I would create an array that consists of objects with key names firstName, lastName, and age.
2. I would declare a function that has a parameter of array.
3. I would then use a for loop to loop through my array of objects inorder to grab the first and last
names of the people in my object and log the values of these 2 keys to the console.
*/


let people = [
  {
    firstName: 'Peter',
    lastName: 'Ochieng',
    age: 28,
  },
  {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
  },
  {
    firstName: 'Jeffrey',
    lastName: 'Jones',
    age: 25,
  }
    
];

function firstAndLastName(array) {
  for (let i = 0; i < array.length; i++){
    console.log(array[i].firstName + ' ' + array[i].lastName)
  }
};

console.log(firstAndLastName(people));
