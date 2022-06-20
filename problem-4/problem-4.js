//Create an object, then write a JavaScript function that checks whether an 
//object contains the specified key.

/*
Step 1: Create an object map variable.
Step 2: Create a function that takes in two parameters, the object map variable and
a specified key value. 
Step 3: Use the Map.has() method in the function to check if the variable passed in 
the first parameter contains the specified key that was passed in the second parameter.
*/

const vacationDestinations = new Map([
  ["Moroco", 500],
  ["Mykonos", 840],
  ["Brazil", 675], 
  ["Ecuador", 925]
]);

function vacationDestinationChecker(vacationPackage, location) {
  let text = "Does this Package contain " + location + "? " + vacationPackage.has(location);
  
  return text;
}

console.log(vacationDestinationChecker(vacationDestinations, "Brazil"));