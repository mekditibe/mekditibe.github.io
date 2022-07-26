
/*
var x = 5, y = 10, z = 15;

x = y; //x would be 10

x += 1; //x would be 6

x -= 1; //x would be 4

x *= 5; //x would be 25

x /= 5; //x would be 1

x %= 2; //x would be 1

var a = 5, b = 10;

(a != b) && (a < b); // returns true

console.log((a > b) || (a == b)); // returns false

(a < b) || (a == b); // returns true

!(a < b); // returns false

!(a > b); // returns true


var a = 5, b = 10, c = "5";
var x = a;

console.log(a===x); // returns true

a == c; // returns true

a === c; // returns false

a == x; // returns true

a != b; // returns true

a > b; // returns false

a < b; // returns true

a >= b; // returns false

a <= b; // returns true



var myvariable = 1;  // numeric value

myvariable = 'one'; // string value

myvariable = 1.1; // decimal value

myvariable = true; // Boolean value

myvariable = null; // null value


//Object
var person = { 
  firstName: "James", 
  lastName: "Bond", 
  age: 15
}; 

var today = new Date("25 July 2021");

var nums = [1, 2, 3, 4];


var str = 'Hello World';

str[0] // H
str[1] // e
str[2] // l
str[3] // l
str[4] // o

str.length //  11

var str = 'Hello World';

for(var i =0; i< str.length; i++)
  console.log(str[i]);

for(var ch of str){
  console.log(ch);
}
   
*/

var str = 'Hello ' + "World " + 'from ' + 'TutorialsTeacher ';

console.log(str.concat("Meeee"), str);
console.log(str.charAt(0), str);
console.log(str.localeCompare("Me"));

var ar= [1,3,4,5];
console.log(ar.split(4,1));



/*
var str1 = "This is 'simple' string";//This is 'simple' string

var str2 = 'This is "simple" string';//This is "simple" string


var nu= 3;
let nu1=5;

console.log(nu);

const nu3= 12;

var fruits = ['Apple', 'Banana'];
console.log(fruits) // [ 'Apple', 'Banana' ]


var msgArray = [];
msgArray[0] = 'Hello';
console.log(msgArray) //  [ 'Hello' ]


var array = new Array('Hello');
console.log(array) // [ 'Hello' ]


var another = Array.of(1, 2, 3);
console.log(another) // [ 1, 2, 3 ]



var b = arrayMaker({7: 1}, {2: 3});

function arrayMaker(n) {
  console.log(n);
  if (n !== typeof Array) {
    return Array.prototype.slice.call(arguments);
  }
}
 
console.log(b) //  [ { '7': 1 }, { '2': 3 } ]

//Method 1 - The slice method

var array = [1,2,3,4,5,6];

var result = array.slice();  // to copy an array to new array

console.log(array);  // [1,2,3,4,5,6]
console.log(result); // [1,2,3,4,5,6]

//Method 2 - The for loop method

var array = [1, 2, 3, 4, 5, 6];
var array2 = [ ];

for (var i = 0; i < array.length; ++i) {

  array2[i] = array[i];
}
/*
console.log (array2); // [ 1, 2, 3, 4, 5, 6 ]

//Method 1 
//This is only recommended if you don't have any other references
// to this array because it will actually create a new empty array 
//and the other reference will still be available to others in memory.


var array = [1,2,3,4,5];

Array = [ ];
//EXAMPLE
var array = [1,2,3,4,5];
var array2 = array;

array = [ ];

console.log(array);  // [ ];
console.log(array2); // [ 1, 2, 3, 4, 5 ]

//Method 2 
//This even empties to referenced arrays

var array3 = [1,2,3,4,5];
array3.length = 0
console.log(array3);  // [ ];


var array3 = [1,2,3,4,5];
var array4 = array3;
array3.length = 0;
console.log(array3);  // [ ];
console.log(array4);  // [ ];

//Method 3
/**
 * The splice() method is a built-in method for JavaScript Array objects. 
 * It lets you change the content of your array by removing or replacing existing elements with new ones.
This method modifies the original array and returns the removed elements as a new array.
 
var array5 = [1,2,3,4,5];
array5.splice(0,array5.length);
console.log(array5);  // [ ];


//Method 4 
var array6 = [1,2,3,4,5];
console.log(array6);  // [1,2,3,4,5]

function emptyArray(array){
 'use strict';
    while(array.length){
     array6.pop();
     console.log(array6);  

    }
}

emptyArray(array6);  // call function
console.log(array6);  // [ ] ; now empty


var array3 = [1,2,3,4,5];
console.log(typeof(array3));  // Object 


//Method 1

var check = [1, 2, 3];
var a = Array.isArray([1, 2, 3]);
var b = Array.isArray({
  foo: 123
});
var c = Array.isArray('foobar');
var d = Array.isArray(undefined);
var e = Array.isArray(check);

console.log(a); // true
console.log(b); // false
console.log(c); // false
console.log(d); // false
console.log(e); // true

//Method 2
/*
JavaScript is a loosely typed (dynamic) scripting language. If you have
 worked with server side languages like Java or C#, you must be familiar with the strictness of the language.
 For example, you expect the compiler to give an error if you have used a variable before defining it.
JavaScript allows strictness of code using "use strict" with ECMAScript 5 or later.
 Write "use strict" at the top of JavaScript code or in a function.


function checkIfArray(array) {
  'use strict';
  
  if (Object.prototype.toString.call(array) === '[object Array]') {
    console.log('array it is  ');
  } else {
    console.log('array it is Not ');
  }
}

var array2 = 'testing';
checkIfArray(array2);  // array it is Not
var array3 = [1,2,3,4,5];
checkIfArray(array3); //array it is 


console.log(fun1());
//console.log(valuesFun()); // will  Cannot access 'valuesFun' before initialization

function fun1(){
  return 0;
}

let valuesFun= function(){ // function expration
  return 1;
}


console.log(valuesFun());

console.log(valuesFun.name); // show the name of the function valuesFun

let functionWith =()=> console.log("here");

(function square(){
  console.log("Anumomes function")
})();


(function (){
  console.log("Anumomes function 2")
})();

//console.log(square()); //  square is not defined


window.onload = function(){ // Anumomes
  alert("Hello worled");
}

console.log(window.onload()); //  window is not defined

let obj = {a:1, b:"this"};

*/
