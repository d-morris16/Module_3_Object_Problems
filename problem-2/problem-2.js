//Create an array of people objects with first name, last name, and age, 
//then write a JavaScript function that takes in an array and console logs
//the first and last names of all the people.


/*
step 1: create people objects that include first name, last name, and age. 
step 2: create an array that holds the people objects within itself 
step 3: create a function that takes in the array as a parameter and will loop through
the array of objects. 
step 4: console.log the first and last names within each object in the array.
*/


const person1 = {
  firstName: "John", 
  lastName: "Deer", 
  age: 35
};

const person2 = {
  firstName: "Jane", 
  lastName: "Doe", 
  age: 34
};

const person3 = {
  firstName: "Fawn", 
  lastName: "Dior", 
  age: 6
};

const arrayOfPeople = [person1, person2, person3];

function nameIdentifier(array) {
  for (let i = 0; i < array.length; i++){
     console.log("First Name: " + array[i].firstName + " Last Name: " + array[i].lastName); 
  }
}
