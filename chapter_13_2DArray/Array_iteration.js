let matrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 400],
    ["cart", "pass", 180]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

for (let row of matrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");
    }
    console.log("\n");
}

matrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
}
)