// Implement your own version of the built-in array map function.
// It should take in two arguments.
// The first will be an array to map
// The second will be a callback function.
//The function will return a new array based on the results of the callback function.

var names = ["ground", "control", "to", "major", "tom"];


// Map function with 2 parameters: array.names and callbackfunction
function myMap(names, cb) {
  // New empty array to store the output
  var results = [];
  // Loops through the array
  for (var i = 0; i < names.length; i++) {
    // New variable is defined as the callback function taking the item from the loop
    var result = cb(names[i]);
    // Push the item to the empty array
    results.push(result);
  }
// Return the results array
  return results;
}

// Call back functions taking 2 parameters: array.names and another callback function with the item as parameter
var wordLength = myMap(names, function callback(name) {
  // Returns length of the name
  return name.length;
});

var upperCase = myMap(names, function callback(name) {
  // Returns the name in upppercase
  return name.toUpperCase();
});

var wordReverse = myMap(names, function callback(name) {
  // New variable will store the modified word
  var splitWord = name.split("").reverse().join("");
  return splitWord;
});

console.log(wordLength);
console.log(upperCase);
console.log(wordReverse);

// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]
