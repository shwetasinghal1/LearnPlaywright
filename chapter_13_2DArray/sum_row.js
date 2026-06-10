let a = [
    [2, 5, 3],
    [6, 3, 7],
    [4, 4, 2]
];

let rowSums = a.map(row => row.reduce((a, b) => (a + b), 0));
console.log(rowSums);

//to get the sum of all values
let sum = a.map(row => row.reduce((a, b) => (a + b), 0)).reduce((c, d) => (c + d), 0);
console.log(`the final sum of array is ${sum}`);