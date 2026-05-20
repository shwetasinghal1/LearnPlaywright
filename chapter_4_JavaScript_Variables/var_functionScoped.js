var a = 10;
console.log("The value of a is " + a); // Output: The value of a is 10

// variable is function scoped
function hello() {
    var a = 20;
    console.log("The value of a inside the function is " + a);
    if (true) {
        var a = 30;
        console.log("The value of a inside the if block is " + a);
    }
    console.log("The value of a after the if block is " + a);
}

hello();
console.log("The value of a outside the function is " + a); // Output: The value of a outside the function is 10
