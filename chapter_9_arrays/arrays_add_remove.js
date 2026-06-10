let a = [1, 2, 3, 4, 5];
console.log("Original array is:", a); // Output: [1, 2, 3, 4, 5]

//adding an element to the end of array
a.push("shweta");
console.log("Array after adding element:", a); // Output: [1, 2, 3, 4, 5, "shweta"]

//removing the last element from the array
a.pop();
console.log("Array after removing last element:", a); // Output: [1, 2, 3, 4, 5]

//adding multiple elements to the end of array
a.push(6, 7, 8);
console.log("Array after adding multiple elements:", a); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//adding an element to the beginning of array
let arrayLength = a.unshift(9);
console.log("Array after adding element to the beginning:", a); // Output: [9, 1, 2, 3, 4, 5, 6, 7, 8]  
console.log("New length of the array is:", arrayLength); // Output: 9

// removing first element from array
a.shift();
console.log("Array after removing first element:", a);