let str1 = "aaa";
let str2 = "eat";
let count1 = 0;

if (str1.length === str2.length) {
    console.log("As the lenght is same, chekcing for Anagram");
    //logic1 = using inbuilt functions
    // sorting the string alphabetically
    // let sortedStr1 = str1.split("").sort().join("");
    // let sortedStr2 = str2.split("").sort().join("");
    // if (sortedStr1 === sortedStr2) {
    //     console.log("The strings are anagrams.");
    // } else {
    //     console.log("The strings are not anagrams.");
    // }

    //sol2
    //     for (let i = 0; i < str1.length; i++) {
    //         for (let j = 0; j < str2.length; j++) {
    //             if (str2[j].includes(str1.charAt(i))) {
    //                 count++;
    //             }
    //         }
    //     }
    //     console.log(count);
    //     if (count === str1.length && count === str2.length) {
    //         console.log("The strings are anagrams.");
    //     }
    //     else {
    //         console.log("The strings are not anagrams.");
    //     }
}

//sol3
let count = new Array(26);
for (let i = 0; i < str1.length; i++) {
    count[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    count[str2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
}

let isAnagram = true;
for (let i = 0; i < 26; i++) {
    if (count[i] !== 0) {
        isAnagram = false;
        break;
    }
}

if (isAnagram == true) {
    console.log("The strings are anagrams.");
}
else {
    console.log("The strings are not anagrams.");
}