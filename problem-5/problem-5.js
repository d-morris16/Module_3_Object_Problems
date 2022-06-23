//Write a JavaScript function to sort the following array of objects by title value


/*
Step 1: Create a function that accepts an array as a parameter and a property
in the array. 
Step 2: Loop through the array and utilize the sort() method to sort through the array. 
Step 3: Print to the console the sorted array. 
*/

const authorBooks = [

  {author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
  {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
  {author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', 
  libraryID: 3245}
 ];

function titleSort(a, b) {
    if (a.title < b.title) {
      return -1;
    }
  
    else if (a.title > b.title) {
      return 1;
    }
  
    else {
      return 0;
    }
  }

console.log(authorBooks.sort(titleSort));
