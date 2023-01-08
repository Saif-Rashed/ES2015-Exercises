//                       ***************************************
//                       *        Destructuring Exercise       *
//                       ***************************************

// *******************
// ES2015 Refactoring
// *******************

// ********************************************
// ES5 Assigning Variables to Object Properties
// ********************************************

/* var obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

var a = obj.numbers.a;
var b = obj.numbers.b; */

// ***************************
// ES2015 Object Destructuring
// ***************************

const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

// ----------------------------------------------------------------------------------------------------------

// **************
// ES5 Array Swap
// **************

/* var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp; */

// *********************************************
// ES2015 One-Line Array Swap with Destructuring
// *********************************************

[arr[0], arr[1]] = [arr[1], arr[0]];

// ----------------------------------------------------------------------------------------------------------

// *************
// raceResults()
// *************

/* Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, and rest.

* first: the first element in the array
* second: the second element in the array
* third: the third element in the array
* rest: all other elements in the array

Write a one line function to make this work using

* An arrow function
* Destructuring
* ‘Enhanced’ object assignment (same key/value shortcut) */

/* raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
 */

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});
