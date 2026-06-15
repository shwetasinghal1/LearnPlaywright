let a = {
    status: "Pass"
}

//to print the value of key
console.log(a.status);

let b = a;
console.log(b.status);

b.status = "Fail";
console.log(b.status);
console.log(a.status);