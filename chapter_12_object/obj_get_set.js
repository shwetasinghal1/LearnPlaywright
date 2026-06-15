const user = {
    firstname: "Shweta",
    lastname: "singhal",
    get fullName() {
        return this.firstname + this.lastname;
    },
    set fullName(value) {
        this.firstname, this.lastname = value.split(" ");
    }
}

console.log(user.fullName);

//print key and value
console.log(Object.keys(user));

//for in loop
for (const key in user) {
    console.log(`${key}: ${user[key]}`)
}