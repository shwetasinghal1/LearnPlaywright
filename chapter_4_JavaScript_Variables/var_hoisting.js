console.log(a);
var a = 10;
console.log(a); // Output: 10

//the output of line 1 is undefined because of variable hoisting. The declaration of variable a is hoisted to the top of the scope, but its assignment is not. Therefore, when we try to access a before it has been assigned a value, it returns undefined.
//means V8 engine gives the value to a as undefined at line 1 and then at line 2 it is assigned as the given value.
