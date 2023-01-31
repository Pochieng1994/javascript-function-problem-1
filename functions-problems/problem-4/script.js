/*Write a Javascript function that iterates the integers from 1 to 100. But for multiples of three 
print "Fizz" instead of the number and for multiples of 5 print "Buzz". For numbers that are 
multiples of both three and five print "FizzBuzz".

1.) I would declare a function named fizzBuzz.
2.) I would then proceed to write 3 seperate if else statements  
*/

function fizzBuzz() {
  for (let i = 0; i < 101; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  }
  else {
    console.log(i);
  }
}
  
  for (let i = 0; i < 101; i++) {
    if (i % 5 === 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }

  for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }
    else {
     console.log(i);
}
  }
}

fizzBuzz();