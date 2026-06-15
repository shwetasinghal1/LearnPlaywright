const a = {
    username: "Test",
    password: "Test"
};

const calculator = {
    //a: 10,
    //b: 5,
    add(a, b) {
        c = a + b;
        console.log(c);
    },

    subtract(a, b) {
        d = a - b;
        console.log(d);
    },

    multiply(a, b) {
        e = a * b;
        console.log(e);
    }
}

calculator.add(10, 5);
calculator.subtract(40, 5);
calculator.multiply(10, 5);