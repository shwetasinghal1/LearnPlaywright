let a = [10, 20, 30, 40, 50];
// accessing the elements of array
console.log("forward traversal");
console.log(a[0]);
console.log(a[1]);

//accessing the element of array from left to right is called forward traversal
//using indexing 0 to array length - 1
console.log(a[2]);

//accessing the element of array from right to left is called backward traversal
//using indexing array last element index is -1, second last -2 and so on
console.log("backward traversal");
console.log(a.at(-1));
console.log(a.at(-2));
