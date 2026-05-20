// == loose comparison
// ==== strict comparison

let a = 10;
let b = "10";
let c = 10;

console.log(a == b); // Output: true (loose comparison)
console.log(a === c); // Output: true (strict comparison)   
console.log(a === b); // Output: false (strict comparison) because a is a number and b is a string

console.log(0 == ""); // Output: true (loose comparison) because both are falsy values
console.log(0 === ""); // Output: false (strict comparison) because 0 is a number and "" is a string

console.log(null == undefined); // Output: true (loose comparison) because both are considered equal in loose comparison
console.log(null === undefined); // Output: false (strict comparison) because null and undefined are different types    

console.log(0 == null); // Output: false (loose comparison) because 0 is a number and null is an object

console.log(true == "2"); // Output: false (loose comparison) because true is converted to 1 and 1 is not equal to 3