let str = "hello shweta";

//search for substring
let result = str.includes("shweta");
console.log(result);

//starts with and end with
console.log(str.startsWith("h"));
console.log(str.endsWith("a"));

//charAt and indexOf
console.log(str.charAt(0));
console.log(str.indexOf("e"));
console.log(str.lastIndexOf("e"));

//search for regex pattern
console.log(str.search(/sa/)); //it does not include in the string
console.log(str.search(/sh/)); //it includes in the string

//index of N
console.log(str.indexOf("e", 5));

