var v = 10;
let l = 20;
const c = 30;

//example of redeclaration and reassignment for variable

var browser = "chrome";
var browser = "firefox"; // redeclaration is allowed for var
browser = "safari"; // reassignment is allowed for var

console.log("The value is browser is" + browser);

var i = 0;

//variable is function scoped and can be accessed outside the block
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log("The value of i is " + i); // i is accessible outside the loop