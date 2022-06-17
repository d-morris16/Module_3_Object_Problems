//Create a sample object, then write a JavaScript function that 
//deletes the property of an object passed to it.

/*
Step 1: Define a sample object
Step 2: Define a function that takes in two parameters, the object and property.
Step 3: The function will delete the property out of the object based on what is 
passed in using the "delete" keyword.
*/

const vehicle = {
  brand: "Subaru",
  model: "WRX",
  year: 2017,
  color: "Blue"
};

function propertyRemover(object, property){
  delete object[property];
  
  return object;
}

console.log(propertyRemover(vehicle, "year"));