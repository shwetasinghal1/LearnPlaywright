//console.log(a); // reference error because of temporal dead zone
let a = 10;
console.log(a); // Output: 10

//TDZ (Temperoal dead zone), it is the time when the scope of a variable starts and when variable is declared.
//in this time variable exists in memory but marked as uninitialized.

//TDZ is with Let and Const only

let b;
console.log(b); // Output: undefined, because variable is declared but not initialized, so it gives undefined

let c = "null";
console.log(c); // Output: null, because variable is declared and initialized with null, so it gives null