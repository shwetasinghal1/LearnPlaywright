const test = "New";
console.log(test); // Output: New

//test = "Updated"; // TypeError: Assignment to constant variable.

//const test = "Another"; // SyntaxError: Identifier 'test' has already been declared

{
    const test = "Block scope constant";
    console.log(test); // Output: Block scope constant
}

console.log(test); // Output: New