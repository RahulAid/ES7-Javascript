// Array.prototype.include
// Used to determine whether the array contains the specified value, if so, return true; otherwise, return false.

const arr = [1, 2, 3, 4, 5];
// Check if there is the number 3 in the array
arr.include(3); // true

if (arr.include(3)) { 
    console.log('Array contains 3')
 }

arr.indexOf(3); // 2 (return its array position)
