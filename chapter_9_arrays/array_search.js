let a1 = ["apple", "banana", "cherry", "banana"];
let ind1 = a1.indexOf("banana");
let ind2 = a1.indexOf("grape");
console.log(ind1);
console.log(ind2);

let ind3 = a1.lastIndexOf("banana");
console.log(ind3);

let search1 = a1.includes("cherry");
let search2 = a1.includes("grape");
console.log(search1);
console.log(search2);

//find - returns the first element that satisfies the condition
let a2 = [1, 2, 3, 4, 5];
let found = a2.find(element => element > 5);
console.log(found);

//findindex - returns the index of the first element that satisfies the condition
let foundIndex = a2.findIndex(element => element === 3);
console.log(foundIndex);