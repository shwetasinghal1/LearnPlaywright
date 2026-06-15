let a = ["test", "pass", "fail"];
a.forEach(function (a, i) {
    console.log("Item#" + (i + 1) + ":" + a);
});

console.log("Total items are" + a.length);