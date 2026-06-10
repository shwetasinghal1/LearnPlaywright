let a = [10, 3, 6, 3, 6, 55];
let greatest = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > greatest) {
        greatest = a[i]
    }
}
console.log("The greater number is" + greatest);