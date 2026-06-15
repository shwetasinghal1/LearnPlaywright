function cafe(item, callWhenOrderIsReady) {
    console.log(`You order the ${item}`);
    callWhenOrderIsReady();
};

function callWhenOrderIsReady() {
    console.log("My phone number is 8130939353");
};

cafe("Burger", callWhenOrderIsReady);

cafe("Pizza", function () {
    console.log("my alternate number is 3543543543");
});

cafe("fries", () => {
    console.log("another alternative number is 5634535454");
});