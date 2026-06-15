let a = {
    name: "Shweta",
    age: "34"
};

let b = a;
if (b === a) {
    console.log("b and a both belongs to same reference");
}
else {
    console.log("both are pointing to different reference");
}

let c = {
    name: "Shweta"
};

let d = {
    name: "Shweta"
};

if (c === d) {
    console.log("b and a both belongs to same reference");
}
else {
    console.log("both are pointing to different reference");
}