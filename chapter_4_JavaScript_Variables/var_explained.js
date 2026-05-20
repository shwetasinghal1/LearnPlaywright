var a = 10;
console.log("The value of a is " + a); // Output: The value of a is 10

// variable is function scoped

function testVar() {
    var a = 20;
    console.log("The value of inside a is " + a); // Output: The value of inside a is 20
    if (true) {
        var a = 30;
        console.log("The value of inside if block a is " + a); // Output: The value of inside if block a is 30
    }
}

testVar();
console.log("The value of a outside the function is " + a); // Output: The value of a outside the function is 10

