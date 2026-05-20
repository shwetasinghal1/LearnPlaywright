let a = 10;
let modOfNumber = a % 2 == 0 ? "Even" : "Odd";
console.log(modOfNumber); // Output: Even   

let responseTime = 850;
let slaResponse = 1000;
let slaStatus = responseTime <= slaResponse ? "SLA Meet" : "SLA Breached";
console.log(`The response time is ${responseTime}`);