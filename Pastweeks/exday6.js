// const array = [1, 2, 3];
// const object = { message: 'Hello' };
// const string = 'Hello!';
// const empty = null;
// const number = 5;
// console.log(({}).toString.call(array));    // => '[object Array]'
// console.log(({}).toString.call(object));  // => '[object Object]'
// console.log(({}).toString.call(string));  // => '[object String]'
// console.log(({}).toString.call(empty));   // => '[object Null]'
// console.log(({}).toString.call(number));   // => '[object Number]'

// if('[object Number]' !== (({}).toString.call(number))){
//     console.log("Hello");
// }
// else {
//     console.log("Bay");
// }

// console.log(array  instanceof Array); // => true
// console.log(object instanceof Object); // => true
// console.log(string instanceof String); // => false
// console.log(empty  instanceof Array); // => false
// console.log(number  instanceof Number); // => false

// console.log(array.constructor === Array); // => true
// console.log(object.constructor === Object); // => true
// console.log(string.constructor === String); // => true
// console.log(number.constructor === Number); // => true


// const helloWorldObject = { hello: "world" }
// console.log(typeof helloWorldObject) // 'object'
// // use Array.isArray or Object.prototype.toString.call
// // to differentiate regular objects from arrays
// const fibonacciArray = [1, 1, 2, 3, 5, 8]
// console.log(typeof fibonacciArray) // 'object'
// console.log(Array.isArray(helloWorldObject)) // false
// console.log(Array.isArray(fibonacciArray)) // true

// // There is another helper function, though it is a bit long:
// console.log(Object.prototype.toString.call(helloWorldObject)) // [object Object]
// console.log(Object.prototype.toString.call(fibonacciArray)) // [object Array]

// // Regular expression have their own native object, RegExp
// const myRegExp = /search/
// console.log(typeof myRegExp) // 'object'
// console.log(myRegExp instanceof RegExp) // true
// console.log(Object.prototype.toString.call(myRegExp)) // [object RegExp]

// // The Date native object is built-in to JavaScript
// const emptyDate = new Date()
// const invalidDate = new Date("fail")
// console.log(typeof emptyDate) // 'object'
// console.log(typeof invalidDate) // 'object'
// // Checking for a date is a little trickier
// console.log(emptyDate instanceof Date)
// console.log(invalidDate instanceof Date)
// console.log(Object.prototype.toString.call(invalidDate)) // [object Date]
// // Reliable date checking requires a NaN check by checking for NaN:
// console.log(invalidDate instanceof Date && !Number.isNaN(invalidDate.valueOf())) // true


// convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
//     => [a1,b12,cstring,dx1,dy2]

// var a={a:1,b:[1,2],c:"string",d:{x:1,y:2}};
// console.log(Object.entries(a));

// console.log(convertObjectToArray({a:1,b:[1,2],c:"string",d:{x:1,y:2}}));

// function convertObjectToArray(m){
//     var arrayOut=[];
//     var oj= Object.entries(m);
//     for(let j=0; j < oj.length; j++){
       
//     }
//     return arrayOut;
// }


//Method 5 

// var b = arrayMaker({7: 1}, {2: 3});

// function arrayMaker(n) {
//   console.log(n);
//   if (n !== typeof Array) {
//     return Array.prototype.slice.call(arguments);
//   }
// }
 
// console.log(b) //  [ { '7': 1 }, { '2': 3 } ]

//Method 1 - The slice method

// var array = [8,11,27,34,56,9,46,23,45];

// var result = array.slice(3,5);  // to copy an array to new array

// console.log(array);  // [1,2,3,4,5,6]
// console.log(result); // [1,2,3,4,5,6]

//EXAMPLE
// var array = [1,2,3,4,5];
// var array2 = array;

// array = [ ];

// console.log(array);  // [ ];
// console.log(array2); // [ 1, 2, 3, 4, 5 ]

// //Method 2 
// var array3 = [1,2,3,4,5];
// array3.length = 0
// console.log(array3);  // [ ];

// var array3 = [1,2,3,4,5];
// var array4 = array3;
// array3.length = 0;
// console.log(array3);  // [ ];
// console.log(array4);  // [ ];

// var array3 = [1,2,3,4,5];
// var array4 = array3;
// array3[3] = 0;
// console.log(array3);  // [ 1, 2, 3, 0, 5 ];
// console.log(array4);  // [ 1, 2, 3, 0, 5 ];

// var array3 = [1,2,3,4,5];
// var array4 = array3.slice();
// array3[3] = 0;
// console.log(array3);  // [ 1, 2, 3, 0, 5 ];
// console.log(array4);  // [ 1, 2, 3, 4, 5 ];

//Method 3
// var array5 = [1,2,3,4,5];
// array5.splice(0,array5.length);
// console.log(array5);  // [ ];

// var array5 = [1,2,3,4,5];

// array5.splice(1,0,"Good");
// console.log(array5);  // [ 1, 'Good', 2, 3, 4, 5 ]

//Method 4 
// var array6 = [1,2,3,4,5];
// console.log(array6);  // [1,2,3,4,5]

// function emptyArray(array){
//   'use strict';
//     while(array.length){
//         console.log(array6);
//         array6.pop();
//     }
// }

// emptyArray(array6);  // call function
// console.log(array6);  // [ ] ; now empty

// var array3 = [1,2,3,4,5];
// console.log(typeof(array3));  // Object 
// console.log(Array.isArray(array3));  // true 
// console.log(array3 instanceof Array); // true
// console.log(({}).toString.call(array3) === '[object Array]'); // true


// var array4 = {k:2,v:4,y:8};
// console.log(typeof(array4));  // Object 
// console.log(array4.constructor === Object);  // true 
// console.log(({}).toString.call(array4) === '[object Object]');  // true 
// console.log(array4 instanceof Object);// true


//Method 3 

// var array = [1, 2, 3, 4, 5];

// function checkIfArray(n) {
//   'use strict';
//   if (typeof n === 'string') {
//     console.log('array it is NOT ');
//   } else {
//     console.log('array it is ');
//   }
// }

// checkIfArray(array);  //array it is
// checkIfArray('stringInput');  //array it is


// // Method 1 
// var array = ['a','b','c'];

// array.push('d');
// console.log(array); // [ 'a', 'b', 'c', 'd' ]

// // Method 2
// array[array.length] = 'e';
// console.log(array); // [ 'a', 'b', 'c', 'd', 'e' ]


// #Question 7 ##Find the index position of d in this array var arr= ['a','b','c','d'];
// #Question 8 ##What will be returned if you look for the index of something that does not exist?

// var arr= ['a','b','d','c','d','y','i','l']; 
// console.log(arr.indexOf('d')); // 3
// console.log(arr.indexOf('f')); // -1 === does not exist

// #Question 9 ##Write a function to check if milk exists in your array var items = ['milk', 'bread', 'sugar'];

// Answer

// var items = ['milk', 'bread', 'sugar'];

// function checkForProduct(item){
   
//     if (items.indexOf(item) === -1) {
//         console.log('item does not exist');
//     } else {
//         console.log('item is in your list');
//     }
// }

// checkForProduct('socks'); //item does not exist
// checkForProduct('milk'); //item is in your list

//#Question 10 ##Now you've found milk exists add some code to find the index of milk and remove that item.

// var items = ['pin','jam','Sok','milk', 'bread', 'sugar','milk'];

// //find index of item if it exists
// var a = items.indexOf('milk');
// console.log(a); // 0

// //remove that index from array 
// var newItem = items.slice(0,6);// ['pin','jam','Sok','milk', 'bread', 'sugar'];
// items.splice(a,1);
// console.log("it Copying of array: ");
// console.log(newItem);
// console.log("it is removing single value or multiple values, you can also replace the or add multiple value : "); // [ 'bread', 'sugar']
// console.log(items);

// #Question 11 ##List the ways to loop over an array.

// For Each

// For in

// For loop

// #Question 12 ##Write some code to put these numbers in order var numbers = [1, 12, 2 ,23,77,7,33,5,99,234,];

// var numbers2 = [1, 12, 2 ,23,77,7,33,5,99,234];
// var numbers3 = numbers2.sort((a, b) => {
//    return a - b;
// });

// console.log("natural order.");
// console.log(numbers3); // [ 1, 2, 5, 7, 12, 23, 33, 77, 99, 234 ]

// console.log("in the revers order. ");
// console.log(numbers2.sort((a,b)=>b-a));


//#Question 13 ##Write some code to place this list in alphabetical order var p = ['a','z','e','y'];

// var p = ['a','z','e','y'];
// p.sort();
// console.log(p); // [ 'a', 'e', 'y', 'z' ]
// #Question 14 ##What is the length of these arrays

// A. var arr1 = [,,,]; 

// B. var arr2 = new Array(3)

// C. var arr3 = [1,2,3,4,5]

// D. var array = [ [1,2,3], [4,5,6]  ];

// E. var array[0].length = [ [1,2,3], [4,5,6]  ];

// Results

// A. arr1.length = 3
// B. arr2.length = 3
// C. arr3.length = 5
// D. array.length = 2    counts the number of internal array
// E. array[0].length = 3 first internal array within the outer array
// #Question 15 ##What are the results of these splice and slice methods

// var a = ['zero', 'one', 'two', 'three'];
// var names = ['jason', 'john', 'peter', 'karen'];

// var sliced = a.slice(1, 3);
// var spliced = names.splice(1,3);


// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

// console.log(sliced); // creates a new array ['one', 'two'] 
// console.log(a); // main array remains untouched 

// The splice() method changes the content of an array by removing existing elements and/or adding new elements.

// console.log(spliced); // it returns  [ 'john', 'peter', 'karen' ] 
// console.log(names); // however the array only contains jason now

// #Question 16 ##What are the console logs of these shift and unshift methods

// Var a = [ ] ; 

// We take an empty array and 

// a.unshift(1);
// var a = console.log(a)
// a.unshift(22);
// var b = console.log(a)
// a.shift(); 
// var c = console.log(a)
// a.unshift(3,[4,5]); 
// var d = console.log(a)
// a.shift(); 
// var e = console.log(a)
// a.shift();
// var f = console.log(a)
// a.shift();
// var g = console.log(a)
// Results

// Var a = [ 1 ]       // we a.unshift(1) so added 1 to front

// Var b = [ 22, 1 ]   // we a.unshift(22) so added 22 to front

// Var c = [ 1 ]       // we a.shift() so removed the first element

// Var d = [ 3, [ 4, 5 ], 1 ]   // we a.unshift(3,[4,5]) so added  
//                                 these to front
// Var e = [ [ 4, 5 ], 1 ]   // we a.shift() so remove first element

// Var f = [ 1 ]   // we a.shift() so remove first element

// Var g = [ ]   // we a.shift() so remove first element leaving it
//                  empty        
// #Question 17

// ##Using reduce add all these numbers var numbers = [1, 2, 3, 4, 5, 6];

// var numbers = [1, 2, 3, 4, 5, 6];

// var total = numbers.reduce((a, b) => {
//   return a + b;
// });

// console.log(total);
// console.log(total); // Total returned is : 21
// #Question 18 ##Flatten this array to one single array using reduce Var array = [[0, 1], [2, 3], [4, 5]];

// var array =  [[0, 1], [2, 3], [4, 5]];

// var flattened = array.reduce(function(a, b) {
//     return a.concat(b);
// },[ ]);

// console.log(flattened);

// var arrayString = [["gh","hj"],["cool","notcool"],["ty","ui"]];

// var joinIt= arrayString.reduce((a,b)=> a + ','+b);
// var joinConcate= arrayString.reduce((a,b)=> a.concat(b));

// console.log(joinConcate);

// console.log(flattened); // [ 0, 1, 2, 3, 4, 5 ]
// #Question 19 ##Filter this array to return just the dogs

// var animals = [
//     { name: "Jason", species:"rabbit"},
//     { name: "Jessica", species:"dog"},
//     { name: "Jacky", species:"owl"},
//     { name: "Luke", species:"fish"},
//     { name: "Junior", species:"rat"},
//     { name: "Thomas", species:"cat"},
//     { name: "jim", species:"dog"}
// ]

// animals.filter((a=>a.species !== 'dog')).forEach(b=>console.log(b.name + ' is not '+ b.species));
// // Answer

// /******************************************
//    filter method with callback function
// ******************************************/

// var dogs = animals.filter(function(animals){
//     return animals.species === "dog";
// });

// console.log(dogs);

// Returns

// [ { name: 'Jessica', species: 'dog' }]

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// #Question 20 ##Using array in question 19 use map function to return all the species

// var types = animals.map(function(animals){
//     return animals.species;
// });
// console.log(types); // [ 'rabbit', 'dog', 'owl', 'fish', 'rat', 'cat' ]

// animals.map((a)=>a.species + ' maping it to ' + a.name).forEach(c=>console.log(c));

// Create Array empty/some elements,
// let array = [];
// let array2 = [{a:1},"string",34];
// let obj = array2[0];
// obj.a = 10;
// 6. Length of array
// console.log(array2.length)
// console.log(array2)

// let obj = {a:1};
// let obj1 = obj;
// obj1.a= 10;
// console.log(obj)


// let arrayOfSingleType = ["apple","banana","pear"];
// // 2. Update Array - change the value of element at nth position,
//  array2[2]="Updated String";
// console.log(array2);
// //Find Index of element
// console.log(array2.indexOf("string"));
// //Find if an element exists or not
// console.log(array2.indexOf("hello")>=0);
// 3. Delete Item/items - remove the element at nth position
// array2[1]=null;//Not this
// console.log(array2,array2[0],delete array2[0],array2[0]=5);
// console.log(array2,array2.length);
// array2.splice(1,1);//delete One element
// console.log(array2,array2.length)
// //Insert element/elements at nth position -- Splice
// array2.splice(1,0,[1,2],[3,4]);
// console.log(array2, array2.length);
// // 4. Delete Array/Empty Array/Copy Array/Clone Array( Both arrays
// // should be changed independently without changing the Others)
// let copyArray = array2;
// console.log(copyArray);

// // 5. Get subset of array
// array2.push("x");
// array2.push("y");
// let slicedArray = array2.slice(1,3);
// console.log("Sliced Array ",array2,slicedArray);
// // // 7. Splice/slice/concat
// let newArray = [1,2];
// let mergedArray = array2.concat(newArray);
// console.log("Concatened Array ", array2.length,newArray.length,mergedArray.length);
// //Determine whether the variable is of array or not
// console.log(Array.isArray(newArray));


// let objArray =[{name:"a",age:20},{name:"b",age:14},{name:"c",age:40}];

// console.log(objArray.map(a=>a.age).reduce((a,b)=>a+b,0));
// // Sum up the ages 
// console.log(objArray.reduce(function (accumulator,element,index,array){
//     // console.log(accumulator, element,index);
//     return accumulator+element.age;//return gets into accumulator
// },0));
// let array = [];
// console.log(array.push("hello"));

// // return array of names
// console.log(objArray.reduce(function (accumulator,element,index,array){
//     accumulator.push(element.name);
//     console.log(index);
//     console.log(array);
//     return  accumulator;
// },[]));

//getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

// [50,"apple",{a:1}].map((a)=>typeof(a)).forEach(b=>console.log(b));

// var getTypes = function(m){
//     var result=[];
//     for(let i of m){
//         result.push(typeof(i));
//     }
//     return result;
// }

// console.log(getTypes([50,"apple",{a:1}]));


/* <typeof the element>+index
destructureArray([50,”apple”,{a:1}])=>
{number0:50,string1:”apple”,object2:{a:1}}  */


// console.log([50,"apple",{a:1}].map((a,index)=>typeof(a)+""+index+":"+a));

// function destructureArray(m){
//     var result = new Object();
//     for(let i =0; i<m.length;i++){
//         result[typeof(m[i]) + i]= m[i];
//     }
//     return result;
// }

// console.log(destructureArray([50,"apple",{a:1}]));

//Find Index of first odd number - (using array method and also not
//using array methods)

// var myArray= [2,8,18,22,42,66,26,32,10,14,12];

// function indexFirstOdd(m){
//     for(let i =0; i<m.length;i++){
//         if(m[i]%2 !== 0)
//             return i;
//     }
//     return null;
// }

// console.log(indexFirstOdd(myArray));
// console.log(myArray.findIndex((a)=>a%2 !== 0));

//Convert string to array and array to string. don’t use split() and
//toString()]

// function convertStringArrayAndVS(m){
//     var result = [];
//     var resultS = '';
//     if(m.constructor === String){
//         for(let i =0; i<m.length;i++){
//             result.push(m[i]);
//         }
//     }else if(m.constructor === Array){
//         for(let i =0; i<m.length;i++){
//             resultS +=m[i];
//         }
//     }
    
//     if(m.constructor === String)
//         return result;
//     else
//         return resultS;
// }

// var myArray= [2,8,18,22,42,66,26,32,10,14,12];
// console.log(convertStringArrayAndVS("myArray"));

// 1. Array – Find array of Odd/Even/Numbers divisible by 4

// function divisibleBy4(m){
//     var result = [];
//     for(let i=0; i<m.length;i++){
//         if(m[i] % 4 !== 0){
//             result.push(m[i]);
//         }
//     }
//     return result;
// }

// console.log(divisibleBy4(myArray));

// var myObj= {key1:2,key2:7,key3:3,key4:9,key5:8};
// function getKeyByValue(object, value) {
//     return Object.keys(object).find(key => object[key] === value);
// }
// console.log(getKeyByValue(myObj,3));


//convert two-dimensional array into an object
/**
 * Input: [
         ["John", 12],
         ["Jack", 13],
         ["Matt", 14],
         ["Maxx", 15]
       ]

Output: {
          "John": 12,
          "Jack": 13,
          "Matt": 14,
          "Maxx": 15
        }
 */
// input = [["John", 12],["Jack", 13],["Matt", 14],["Maxx", 15]];

// function arrayToObject(m){
//     var obj = {};
//     m.forEach((a)=>{
//         let key = a[0];
//         let val= a[1];
//         obj[key] = val;
//     });
//     return obj;

// }
// console.log(arrayToObject(input));

//create an object from two arrays

// function convertToObj(a,b){
//     var obj = {};
//     if(a.length === b.length){
//         for(let i=0; i<a.length; i++){
//             obj[a[i]]= b[i];
//         }
//     }
//     return obj;
// }

// function convertToObj1(a,b){
//     var obj = {};
//     if(a.length === b.length){
//         a.forEach((k, i) => {obj[k] = b[i]});
//     }
//     return obj;
// }

// let a = [1, 2, 3, 4];
// let b = ["ram", "shyam", "sita", "gita"];

// console.log(convertToObj(a,b));
// console.log(convertToObj1(a,b));



// 2. Caluculate Sum of all Odd/Even/Numbers divisible by 4


// 3. Find Unique Numbers in the Array

// function findIfExist(m,a){
//     for(let i of m){
//         if(i===a)
//             return true;
//     }
//     return false;
// }
// function uniqueNumbers(m){
//     var result = [];
//     for(let i of m){
//         if(!(findIfExist(result,i))){
//             result.push(i);
//         }
//     }
//     return result;
// }

//console.log(uniqueNumbers(myArray));

// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
// }
  
//   const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
//   const uniqueAges = ages.filter(unique)
  
//   console.log(uniqueAges);

//   Array.prototype.unique = function() {
//     var arr = [];
//     for(var i = 0; i < this.length; i++) {
//         if(!arr.includes(this[i])) {
//             arr.push(this[i]);
//         }
//     }
//     return arr; 
//   }

// var myArray= [2,8,32,22,42,66,2,32,10,8,42];

// function uniqueNumber1(m){
//     var result=[];
//     for(let i of m){
//         let count=0;
//         for(let j of m){
//             if(j === i && count < 1){
//                 count++;
//             }else if(count > 0)
//                 break;
//         }
//     }
//     return result;
// }

// console.log(uniqueNumber1(myArray));



// Create /Delete Object
// let obj = {a:1};
//Empty Object
// let obj = {};
// //Delete
// obj = null;
// // 2. Update Properties of Object
// obj.a = 2;
// //Find value of given property
// let key = "a";
// obj[key]= 2;
// obj["a"] = 2;
// // 3. Remove Properties from the object
// delete obj.a;
// console.log(obj);
// obj.a = null//a is assigned to null;
// // 4. Copy/Clone Object
// let obj1 = obj;
// let newObject = {a:1, b:"string",c:[1,2], d:{a:1,b:2}}
// //Clone object
// //for(let key in obj){
//     key=>key
//     value=>obj[key]
//}
// Find if this particular "value" exists in the object -> "sdfsdf"
// let newObject = {a:1, b:"string",c:[1,2] }

// function convertObjectToObj(m){
//     var result ={};
//     var keys = Object.keys(m);
//     for(let i=0; i<keys.length; i++){
//         result[keys[i]+i] = m[keys[i]];
//     }
//     return result;
// }

//convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}})
//=> [a1,b12,cstring,dx1,dy2]

function convertObjectToArray(m){
    var result =[];
    var keys = Object.keys(m);
    for(let i=0; i<keys.length; i++){
        if(m[keys[i]].constructor === Object){
            let value= m[keys[i]];
            for(let l in value){
                result.push(keys[i]+ l + value[l]);
            }
        }else if(m[keys[i]].constructor === Array){
            let value= m[keys[i]];
            let co= '';
            for(let i of value){
                co+=i;
            }
            result.push(keys[i]+ co);
        }else{
            result.push(keys[i]+m[keys[i]])
        }
    }
    return result;
}

console.log(convertObjectToArray({a:1,b:[1,2],c:'string',d:{x:1,y:2}}));

//[{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]
function Minify(m){
    var oj= [];
    ;
    for (var i in m){
        if(m.hasOwnProperty('a')){
            var o={};
            o['a'] = m.a;
            oj.push(o);
        }
    }
    return oj;
}

console.log(Minify({a:1,b:2},{a:2,b:4}));


















