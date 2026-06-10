let a = [1, 2, 3, 4, 5];
let b = a.splice(2, 3, "Shweta");
console.log(b);
console.log(a);

//add the element in middle of the array using splice method
a.splice(3, 0, "Singhal");
console.log(a);

//replace the element in middle of array
a.splice(0, 2, "Varun", "Gupta");
console.log(a);