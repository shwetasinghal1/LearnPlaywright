function print() {
    console.log("Printing first time");
};

setTimeout(function () {
    console.log("printing after some time");
}, 2000);

setTimeout(() => {
    console.log("running after some time");
}, 2000);

print();