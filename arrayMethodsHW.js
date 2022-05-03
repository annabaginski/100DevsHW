// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
  }

// Filter range
// importance: 4
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

 function filterRange(arr, a, b) {
    let newArr = arr.filter(item => (a <= item && item <= b));
    return newArr;
  }

// Filter range "in place"
// importance: 4
// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
  
    for (let i = 0; i < arr.length; i++) {
      let value = arr[i];
  
      if (value < a || value > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  }

// Sort in decreasing order
// importance: 4
// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

arr.sort((a,b) => (b-a));

// Copy and sort array
// importance: 5
// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(array) {
  return array.slice().sort();
}

// Create an extendable calculator
// importance: 5
// Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator() {
  this.calculate = function (str) {
    let split = str.split(" "),
      a = Number(split[0]),
      op = split[1], 
      b = Number(split[2]); 

    return this.methods[op](a, b);
  }

  this.addMethod = function (name, func){
    this.methods[name] = func;
  }

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };
}

// Map to names
// importance: 5
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

let names = users.map( (item) => item.name);

