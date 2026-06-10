let a = [1, 3, 2, 3, 4, 1, 5, 6]
let b = new Array();
let c = new Array();
for (let size of a) {
    if (b.includes(size)) {
        c.push(size)
    }
    else {
        b.push(size)
    }
}
console.log([...c]);
console.log("only unique  elements are ", b);

//print in sorted order
console.log(b.sort((d, e) => d - e));