let a = [10, 43, 53, 23, 6, 51];
let greatest = 0;
let secondgreatest = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i] > greatest) {
        secondgreatest = greatest; //0
        greatest = a[i] // 10
    }
    else if (a[i] > secondgreatest && a[i] != greatest) {
        secondgreatest = a[i];
    }
}
console.log(secondgreatest);