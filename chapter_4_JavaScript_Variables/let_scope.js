let a = 10;
console.log("The value of a is " + a); // Output: The value of a is 10

function testLet() {
    let a = 20;
    console.log("The value of a inside the function is " + a); // Output: The value of a inside the function is 20
    if (true) {
        let a = 30;
        console.log("The value of a inside the if block is " + a); // Output: The value of a inside the if block is 30
    }
    console.log("The value of a after the if block is " + a); // Output: The value of a after the if block is 20        
}

console.log("The value of a outside the function is " + a); // Output: The value of a outside the function is 10
testLet();  