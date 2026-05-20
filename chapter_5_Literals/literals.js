let name = "Shweta";
console.log(name); // Output: Shweta
console.log(typeof name);

let age = 10;
console.log(age); // Output: 10
console.log(typeof age);

let isStudent = true;
console.log(isStudent); // Output: true
console.log(typeof isStudent);

let personalInfo = {
    name: "Shweta",
    age: 10,
}
console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(typeof personalInfo);
console.log(typeof personalInfo.name);
console.log(typeof personalInfo.age);

let test = null;
console.log(test); // Output: null
console.log(typeof test); // Output: object (this is a known quirk in JavaScript, where null is considered an object)   

let symbol;
console.log(symbol); // Output: undefined
console.log(typeof symbol); // Output: undefined    
console.log(typeof NaN); // Output: number, because NaN is a special value that represents "Not-a-Number" and is of type number in JavaScript.

//typeof is an operator, unary operator that takes only one operand.

