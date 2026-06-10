let str = "madam";
let str1 = "";
for (let i = str.length - 1; i >= 0; i--) {
    str1 = str[i] + str1;
}
if (str === str1) {
    console.log(`The string is a palindrome ${str}`);
}
else {
    console.log(`The string is not a palindrome ${str}`);
}
