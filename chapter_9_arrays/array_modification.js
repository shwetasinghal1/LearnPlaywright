let a1 = [10, 20, 35, 40, 50];

let result = a1.map(number => number % 2 === 0 ? "Even" : "odd");
console.log(result);

//filter method

let result2 = a1.filter(number => number % 2 != 0);
console.log(result2);

//reduce method
let result3 = a1.reduce((a, b) => (a + b), 0);
console.log(result3);

//merge nested arrays
let a2 = [[10, 60], [70, 80]];
console.log(a2.flat());
