let a = 12;
let b = 11;
let max_number = a > b ? "max number is a" : "max number is b";
console.log(`max_number in 2 numbers is ${a}`);

let c = 15;
let max_number_in_three = a > b && a > c ? "max number is a" :
    b > c && b > a ? "max number is b" : "max number is c";
console.log(max_number_in_three);