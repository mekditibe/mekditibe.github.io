// //Get objects that has properties of name, ‘a’
// // [{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]

// /*

// function getObjectPropertie(array){
//     var variable= '';
//     var vl='';
//     for (var i=0; i<array.length; i++){
//         for (var v of array[i]){
//            // console.log(v);

//           /*
//             if(v == 'a'){
//                 console.log(array[i].key);
//                 variable = variable + array[i];
//             }
            
//         }
       
//     }

//     return variable;
// }

// console.log(getObjectPropertie([{a:1,b:2},{a:2,b:4}]));

// */


// //[06:06 pm] Hiwot Reta Alemayehu
// // var objectEx = {a:1,b:2,c:3};
// // let clone = structuredClone(objectEx);

// // console.log(clone, objectEx);

// console.log("2"*3);//6
// console.log("2"+3);//23
// console.log(3+"2");//32
// console.log("2"-1);//1
// console.log("5"%2);//1

// console.log(parseInt("42 is the answer"));//42
// console.log(parseInt("42 is the answer 12"));//42


// // for (const i=0; i<3; i++){
// //     console.log(i);
// // }


// // (param1, param2, …, paramN) => { statements } // return required for { statements }
// // (param1, param2, …, paramN) => expression // equivalent to: => { return expression; }
// // (singleParam) => { statements }
// // singleParam => { statements } // Parentheses optional when only one parameter
// // // A function with no parameters requires parentheses:
// // () => { statements }


// //Functions can be assigned to variables
// const myfunc = function(a, b) {
//     return a * b;
// };
//     //Functions can be passed as parameters
// function apply(a, b, applyFunc) {
//     const y = applyFunc(a, b);
//     return y;
// }
// const x = apply(2, 3, myfunc); // 6
// //Functions can be return values
// // function getAlert(str) {
// //     return function() { window.alert(str); } 
// // }

// // const whatsUpAlert= getAlert("What's up!");
// // whatsUpAlert(); // “What’s up!”
// // const mottoAlert= getAlert("Knowledge Is Structured in Consciousness");
// // mottoAlert(); // “Knowledge Is Structured in Consciousness

// const multiply0 = function(num1, num2) {
//     return num1 * num2;
// }
// console.log("output: " + multiply0(5,5));
// const multiply = (num1, num2) => num1 * num2;
// console.log("output: " + multiply(5,5));

// //creates new array with results of calling provided function on every element in
// //calling array.

// const atoms0 = [
// "Hydrogen",
// "Helium",
// "Lithium",
// "Beryllium"
// ];
// const atomsLength = atoms0.map(function(s) { return s.length });
// console.log("a2: " + atomsLength);
// const atomsLengthV2 = atoms0.map(s => s.length);
// console.log("a3: " + atomsLengthV2);

// //filter returns Array containing all elements that pass the test. If no elements pass returns empty array.
// const atoms = [
//     "Hydrogen",
//     "Helium",
//     "Lithium",
//     "Beryllium"
//     ];
//     const atomsLong = atoms.filter(function(s) {return s.length > 7 });
//     const atomsLong2 = atoms.filter( s => s.length > 7 );
//     //find returns value of first element that satisfies test. Otherwise undefined is returned.
//     const longAtom = atoms.find( s => s.length > 7 );
//     const longAtom2 = atoms.findIndex( s => s.length > 7 );

// var initialValue = 0;
// var sum = [{x: 1}, {x:2}, {x:3}].reduce(
// function (accumulator, currentValue) {
// return accumulator + currentValue.x;},initialValue);
// console.log(sum); // logs 6


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator +
// currentValue;
// console.log(array1.reduce(reducer));// expected output: 10

// //functional programming: map, filter, reduce can replace many loops
// const a = [1,3,5,3,3];
// //return new array with elements translated/mapped to another set of values
// const b = a.map(function(elem, i, array) {
// return elem + 3;})// [4,6,8,6,6]
// //return new array containing select elements based on a condition
// const c = a.filter(function(elem, i, array){
// return elem !== 3;});//[1,5]
// //find first element or index of first element satisfying condition
// const d = a.find(function(elem) {return elem > 1;}); //3
// const e = a.findIndex(function(elem) {return elem > 1;}); //1
// //accumulate a single value based on elements across the array
// const f = a.reduce(function(accumulator, elem){
// return accumulator + elem;}, 0); //0 is initial value, 15 is sum



// //Function Signature
// function f101(x) {
//     console.log("x: " + x);
// } 
// f101(); //undefined
// f101(1); //1
// f101(2, 3); //2

// //No overloading
// function log() {
//     console.log("No Arguments");
// }
// function log(x) {
//     console.log("1 Argument: " + x);
// }
// function log(x, y) {
//     console.log("2 Arguments: " + x + ", " + y);
// }
// log();
// log(5);
// log(6, 7);

// // Arguments Object
// // The arguments object is an Array-like object corresponding to the arguments passed
// // to a function.
// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// const max1 = findMax(1, 123, 500, 115, 66, 88);
// const max2 = findMax(3, 6, 8);
// //Exercise: write a function that can be called with any number of arguments and
// //returns the sum of the arguments.

// //Rest parameters (ES6)
// // rest parameters are only the ones that haven't been given a separate name, while the arguments
// // object contains all arguments passed to the function
// // ES6 compatible code, then rest parameters should be preferred.
// // Array vs array-like

// function sum101(x, y, ...more) {
// //"more" is array of all extra passed params
//     let total = x + y;
//     if (more.length > 0) {
//         for (let i = 0; i < more.length; i++) {
//             total += more[i];
//         }
//     }
//     console.log("Total: " + total);
//     return total;
// }

// sum101(5, 5, 5);
// sum101(6, 6, 6, 6, 6);


let a01, b01,c01,d01,e01;

a01 = [1,2,3];
b01 = "dog";
c01 = [42, "cat"];
// Using the concat method.
d01 = a01.concat(b01, c01); // [1, 2, 3, “dog”, 42, “cat”]
// Using the spread operator.
e01 = [...a01, b01, ...c01]; // [1, 2, 3, “dog”, 42, “cat”]
f01 = [...c01, ...a01, b01,...e01,"Kucho",...["Buger","choc","kssalkcj"]]; // [1, 2, 3, “dog”, 42, “cat”]


console.log(a01);
console.log(b01);
console.log(c01);
console.log(d01);
console.log(e01);
console.log(f01);


// Spread operator (ES6) (cont)
// The Rest/Spread Properties for ECMAScript proposal (ES2018) added
// spread properties to object literals. It copies own enumerable properties
// from a provided object onto a new object.

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };
const clonedObj = { ...obj1 };
console.log({...obj1});
// Object { foo: "bar", x: 42 }
const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y:13}

console.log({...obj2, ...obj1});


// Destructuring assignment (ES6)
// copy elements/properties from array/object and assign to
// variables

const address = [221, 'Baker Street','London'];
const [ houseNo, , city ] = address;
console.log(houseNo, city)// 221 'London’
const details ={firstName:'Code', lastName:'Burst', age: 22};
const { firstName, age } = details;
console.log(firstName, age);// Code 22

