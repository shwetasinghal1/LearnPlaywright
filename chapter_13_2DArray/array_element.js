let element = [
    ["login", "login-confirm", "pass"],
    ["loginnotdone", "login-confirm-notdone", "fail"]
];

element.forEach(row =>
    row.forEach(cell => cell.includes("fail") ? console.log("cell") : console.log(`element not found in ${cell}`))
);