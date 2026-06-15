let config = {};
config.browser = "Chrome";
config.run = 3000;
config.testName = "loginTest";

if (config.browser === "Chrome") {
    console.log(`I am running my code on ${config.browser}`);
}

delete config.browser;

let property = Object.getOwnPropertyDescriptor(config, "run");
console.log(property);