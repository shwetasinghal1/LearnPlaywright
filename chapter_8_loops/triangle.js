let ab = 5;
let bc = 6;
let ac = 5;
if (ab === bc && bc === ac && ac === ab) {
    console.log("The triangle is equilateral");
}
else if (ab === bc || bc === ac || ac === ab) {
    console.log("The triangle is isosceles");
}
else {
    console.log("The triangle is scalene");
}