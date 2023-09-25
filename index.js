// Write your solution here!
var cats = ["Milo", "Otis", "Garfield"];

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

// Example usage:
destructivelyAppendCat("Whiskers");
console.log(cats); // Output: ["Milo", "Otis", "Garfield", "Whiskers"]

var cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastCat() {
  cats.pop();
}
var cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Example usage:
destructivelyRemoveFirstCat();
console.log(cats); // Output: ["Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
  // Create a new array by concatenating the original cats array with the new cat
  var newCatsArray = cats.concat(name);
  return newCatsArray;
}
var cats = ["Milo", "Otis", "Garfield"];

function prependCat(name) {
  // Create a new array by combining the new cat name with the original cats array
  var newCatsArray = [name].concat(cats);
  return newCatsArray;
}

// Example usage:
var newCats = prependCat("Whiskers");
console.log(newCats); // Output: ["Whiskers", "Milo", "Otis", "Garfield"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]

var cats = ["Milo", "Otis", "Garfield"];

function removeLastCat() {
  // Create a new array by slicing the original cats array to exclude the last element
  var newCatsArray = cats.slice(0, -1);
  return newCatsArray;
}

// Example usage:
var newCats = removeLastCat();
console.log(newCats); // Output: ["Milo", "Otis"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"];

function removeFirstCat() {
  // Create a new array by slicing the original cats array to exclude the first element
  var newCatsArray = cats.slice(1);
  return newCatsArray;
}

// Example usage:
var newCats = removeFirstCat();
console.log(newCats); // Output: ["Otis", "Garfield"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]
var cats = ["Milo", "Otis", "Garfield"];

function removeFirstCat() {
  // Create a new array by slicing the original cats array to exclude the first element
  var newCatsArray = cats.slice(1);
  return newCatsArray;
}

// Example usage:
var newCats = removeFirstCat();
console.log(newCats); // Output: ["Otis", "Garfield"]
console.log(cats); // Output: ["Milo", "Otis", "Garfield"]


