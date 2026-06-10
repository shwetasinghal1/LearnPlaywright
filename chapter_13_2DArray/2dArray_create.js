let a = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(a[i][j]);
    }
}

//to get the row count
console.log(a.length);

//to get column count
console.log(a[0].length);