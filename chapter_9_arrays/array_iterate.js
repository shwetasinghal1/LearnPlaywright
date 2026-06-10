let a1 = ["apple", "banana", "cherry"];
for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
}

console.log("------------------------");

//for of loop
for (let fruits of a1) {
    console.log(fruits);
}

console.log("------------------------");

//foreach loop
a1.forEach((fruit, index) => {
    console.log(`${fruit} with index of ${index}`);
});

console.log("------------------------");

//another way to use forEach loop without index
a1.forEach((fruit) => console.log(fruit));

console.log("------------------------");

//for in loop
for (let i in a1) {
    console.log(a1[i]);
}
console.log("------------------------");
//for in loop with index
for (let i in a1) {
    console.log(`${a1[i]} with index of ${i}`);
}

console.log("------------------------");
// for in with another representation
for (let i in a1) {
    console.log(i, "->", a1[i]);
}