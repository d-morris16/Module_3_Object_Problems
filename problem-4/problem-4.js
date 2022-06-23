
//Create an object, then write a JavaScript function that checks whether an 
//object contains the specified key.

/*
Step 1: Create an object.
Step 2: Create a function that takes in two parameters, the object and
a specified key value. 
Step 3: Using the hasOwnProperty will check to see if the passed in string key value is
within the object passed in. 
*/


const myObject = {
  firstName: "Dominique", 
  lastName: "Morris", 
  age: 26
};

function objectKeyChecker(obj, key) {
  return obj.hasOwnProperty(key);
}

console.log(objectKeyChecker(myObject, "last"));
