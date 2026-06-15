let results = ["pass", "fail", "pass", "skip"];
results.forEach(function (status, index) {
    console.log("Test" + index + " = " + status)
    if (status === "skip") {
        console.log("this test case is marked as skip" + " = " + status);
    }
});