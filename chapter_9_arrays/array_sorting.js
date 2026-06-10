let a1 = [10, 2, 1, 20, 4, 43];
a1.sort();
console.log(a1);

//here the sort method is sorting the array in lexicographical order, as it is treating the numbers as strings. To sort the array in numerical order, we can pass a compare function to the sort method.

// for proper sorting in numerical order we should compare the numbers

a1.sort((a, b) => a - b);
console.log(a1);

//for sorting in descending order
a1.sort((a, b) => b - a);
console.log(a1);

//sorting without sort method
for (let i = 0; i < a1.length - 1; i++) {
    for (let j = 0; j < a1.length - i - 1; j++) {
        if (a1[j] > a1[j + 1]) {
            //swap
            let temp = a1[j];
            a1[j] = a1[j + 1];
            a1[j + 1] = temp;
        }
    }
}
console.log(a1);