function favoriteAnimal(animal) {
    console.log(animal + " is my favorite animal!");
}

favoriteAnimal("Goat");

/* arrow function: */

/* arrow functions are more simple and consise than normal functions*/

 /* example of an arrow function is below: */

let sum = (a, b) => a + b;
let bruh = ( sum(1, 2) );
console.log("a + b = " + bruh);

/* Another example of an arrow function: */

let sum2 = (c, d) => {  //the curly brace opens a multiline function
    let result = c + d;
    return result; // if we use curly braces, then we need to explicit a "return"
};

console.log(sum2(1,2));