let a = [10, 30, 20, 10, 30];
let b = new Array();
console.log(b);
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] != b[j]) {
            b[j] = a[i]
        }
        console.log(b[j]);
    }
    console.log(b);
}