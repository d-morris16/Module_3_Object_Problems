//Create an object with three items in it, then write a JavaScript function 
//that accepts an object and tells you the length (tells you how many items are in it)
//of the object.

/*
Step 1: Create an object map with three items in it.   
Step 2: Create a function that takes in the object map as a parameter. 
Step 3: Within the function use the size method to return the number of map elements
in the object. 
*/


const person = new Map([
  ["firstName", "Dominique"],
  ["lastName", "Morris"],
  ["age", 26]
]);

function objectLengthChecker(object) {
  let text = "The number length of this object is " + object.size;
  
  return text;
}

console.log(objectLengthChecker(person));