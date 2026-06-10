let a = [] //empty array
let a1 = [1, 2, 3, 4, 5] //array of numbers
//Accessing the elements of an array
console.log(a1[0]) //1
console.log(a1[2]) //3
console.log(a1[4]) //5
console.log(`accessing element out of array ${a1[5]}`) //undefined

//iterating using loop
for (let i = 0; i < a1.length; i++) {
    console.log(`array elements using loop ${a1[i]}`);
}

//In JS, we can have arrays of different data types
let a2 = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]]
console.log(a2[0]) //1
console.log(a2[5]);