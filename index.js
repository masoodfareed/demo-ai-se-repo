/**
 * Checks if a given value is an even number.
 * @param {number} number - The value to be checked.
 * @returns {boolean} - Returns true if even, false otherwise.
 */
function isEven(number) {
  // Use the modulo operator (%) to find the remainder when divided by 2
  // If the remainder is exactly 0, the number is even
  return number % 2 === 0; 
}

//console.log(1);


// syntax error

// if (x > 5) {
//    console.log("Hello");
// }

// runtime error

// logical errors

function add(a , b)
{
    return a - b;
}

function greet(name)
{
   console.log(name.toUpperCase());
}

greet('masood');
greet('true');


