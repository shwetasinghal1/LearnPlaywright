let browsers = ["Chrome", "Firefox", "Edge", "Safari"];
//accessing elements of array using indexing
//first element
console.log(browsers[0]);

//removing element from last
browsers.pop();
console.log(browsers);

//remove from first
browsers.shift();
console.log(browsers);

//adding at end
browsers.push("opera");
console.log(browsers);

//adding at beginning
browsers.unshift("Brave");
console.log(browsers);

//traversing the array using for loop
for (let i = 0; i < browsers.length; i++) {
    console.log(browsers[i]);
}