function print() {
    console.log("Printing new method of exercise");
};

//callback
function order(item, callback) {
    console.log(`ordered item is ${item}`);
    callback();
};

//Calling the callback function, first way
order("Maggi", function () {
    console.log("This is first way to call");

});

//second way
order("pizza", print);

//third way
order("burger", () => {
    console.log("calling via arrow function");
});