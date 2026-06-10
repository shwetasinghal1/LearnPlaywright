let a = [10, 20, 30, 40, 50];
let a1 = new Array(10, 20, 30, 40, 50);
let a2 = new Array(3);

console.log(a);
console.log(a1);
console.log(a2);

let a3 = Array.of("Apple", "Banana", "Cherry");
console.log(a3);

let a4 = Array.from("Apple");
console.log(a4);

//in case of number
let a5 = Array.from("12345");
console.log(a5);

//creating emptyy array
let a6 = new Array(4);
console.log(a6);
a6[0] = 10;
a6[1] = 20;
a6[2] = 30;
a6[3] = 40;
console.log(a6);

//creatin