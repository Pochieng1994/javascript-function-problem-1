/* Create a sample object, then write a JavaScript function that deletes the property of an object passed
 to it. Your JavaScript function should take in two parameters, the object and the key/property you want to
 delete.

 1. I would create my sample object.
 2. I would then declare my function giving it two parameters object and property.
 3. I would then write the logic that will delete the specified property in the object
 on the next line I would return the object.
 4. Lastly I would log the new object to the console by passing in my function and entering the values of
 the 2 parameters. 

*/

const thailand = {
  capital: 'Bangkok',
  continent: 'Asia',
  climate: 'Tropical',
  religion: 'Buddhism', 
};

function deleteObjectProperty(object, property) {
  delete object.property;
  return object;
}

console.log(deleteObjectProperty(thailand, religion));