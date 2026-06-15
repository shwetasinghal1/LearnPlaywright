const userDetails = {
    name: "Shweta",
    age: 36,
    pnumber: "8130939395"
};

const { name } = userDetails;
console.log(name);

//rename
const { name: username } = userDetails;
console.log(username);

//value change from default
const { newname = "Varun" } = userDetails;
console.log(newname);

console.log(userDetails);