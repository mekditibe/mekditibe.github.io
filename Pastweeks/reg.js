let emailMatch0 = new RegExp("^Mart.+Stepp$");

let emailMatch1 = new RegExp("^[a-zA-Z_\-]+@(([a-zA-Z_\-])+\.)+[a-zA-Z]{2,}$");
let emailMatch2 = /^[a-zA-Z_-]+@(([a-zA-Z_-])+\.)+[a-zA-Z]{2,}$/;

//console.log("mzijlstra@miu.edu".match(emailMatch2)); // boolean value
console.log(emailMatch1.test("mzijlstra@miu.edu")); // same boolean value
console.log(emailMatch0.test('MartStepp'));

// var jo;
// console.log(jo)


// var jo=11;

// console.log(jo)
// jo="http";
// console.log(jo)


