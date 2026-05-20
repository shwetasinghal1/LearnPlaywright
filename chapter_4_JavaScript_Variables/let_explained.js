let a = 10;
console.log("The value of a is " + a); // Output: The value of a is 10

//reassignment is allowed for let
a = a + 1;
a = a + 2;
console.log("The value of a after increment is " + a); // Output: The value of a is 4

a = 30;
console.log("The value of a after reassignment is " + a); // Output: The value of a is 30

//variable is block scoped
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//console.log("The value of i is " + i); // ReferenceError: i is not defined