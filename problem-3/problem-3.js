//Create an object with three items in it, then write a JavaScript function 
//that accepts an object and tells you the length (tells you how many items are in it)
//of the object.

/*
Step 1: Create an object with three items in it.   
Step 2: Create a function that takes in the object as a parameter. 
Step 3: Within the function use the .length method and print out the number of items
the passed in object has
*/


const myCar = {
  brand: "Subaru", 
  model: "WRX", 
  year: 2017
};

function objectLengthChecker(object) {
// Object.keys(object) returns enumerable properties as an array. Now being an array, 
//the .length will return the number of elements in the object. 

  let text = "The size of this object is " + Object.keys(object).length;  
  
  return text; 
}

console.log(objectLengthChecker(myCar));

