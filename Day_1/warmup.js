//Add To Zero
//Difficulty
//Easy

//Concepts
//Loops, General


//Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

//For example:

//[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

//[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

//[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
const arr1 = [1, 4, 11, 2, 37, -4]
const arr2 = [0, 21, 33, 6, 0, -9]
const arr3 = [0, 1, 2, 3, 4, 5]
for(i = 0; i < arr1.length; i++) {
    if(arr1 + i === 0 === true) {
    console.log(true) }
    else() {
    console.log(false) }
}