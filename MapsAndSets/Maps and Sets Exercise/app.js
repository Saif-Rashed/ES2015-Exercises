// *************
// hasDuplicate
// *************

/* Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false */

function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// --------------------------------------------------------------------------------------------------------

// ***********
// vowelCount
// ***********

/* Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 } */

function vowelCount(str) {
  const vowels = "aeiouAEIOU";
  const vowelCounts = new Map();

  for (const char of str) {
    if (vowels.includes(char)) {
      if (vowelCounts.has(char)) {
        vowelCounts.set(char, vowelCounts.get(char) + 1);
      } else {
        vowelCounts.set(char, 1);
      }
    }
  }

  return vowelCounts;
}
