// Destructure Array
// From the given array, build an object that has array elements as
// properties. The name of the property is
// <typeof the element>+index
// destructureArray([50,”apple”,{a:1}])=>
// {number0:50,string1:”apple”,object2:{a:1}} 

// function destructureArray(array) {
//     let obj = {};
//     for (let i = 0; i < array.length; i++) {
//         obj[typeof array[i] + i] = array[i]
//     }
//     return obj;

// }
// console.log(destructureArray([50, "apple", { a: 1 }]));

// Transform Array to print the type of elements in the Array 
// getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”]

// function getTypes(array) {
//     let newArray = [];
//     for (let ele of array) {
//         newArray.push(typeof ele)
//     }
//     return newArray;

// }
// console.log(getTypes([50, "apple", { a: 1 }]))

// // convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
// // => [a1,b12,cstring,dx1,dy2]

// function convertObjectToArray(obj) {
//     let newArray = [];
//     for (let key in obj) {
//         if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
//             let value = obj[key];
//             console.log(value)
//             for(let key1 in value){
//                 newArray.push(key+key1 +value[key1])
//             }
//         } else if (Array.isArray(obj[key])) {
//             let string ='';
//             for(let element of obj[key]){
//                 string+=element;
//             }
//             newArray.push(key+string)
//         } else {
//             newArray.push(key + obj[key])
//         }

//     }
//     return newArray;
// }
//     // console.log(convertObjectToArray({ a: 1, b: [1, 2], c: "string", 
    // d: { x: 1, y: 2 } }));


//     // findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>
// // {name:’Lakshman’,age:15}
// function findYounger(array){
//     for(let ele of array){
//         if(ele.age>=13 && ele.age<=17)
//             return ele;
//     }
//     return null;
// }
// console.log(findYounger([{name:'Ram',age:20},{name:'Lakshman',age:15}]))
// //findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15
// function findYoungerAge(array){
//     let min = array[0].age;
//     for(let ele of array){
//         if(ele.age<min)
//             min = ele.age;
//     }
//     return min;
// }
// console.log(findYoungerAge([{name:'Ram',age:20},{name:'Lakshman',age:15}]))

// function findYoungerPerson(array){
//     let min = array[0].age;
//     let name = "";
//     for(let ele of array){
//         if(ele.age<min){
//             min = ele.age;
//             name = ele.name
//         }
            
//     }
//     return name;
// }

// console.log(findYoungerPerson([{name:'Ram',age:20},{name:'Lakshman',age:15}]))


// // convertObjectToArray({a:1,b:[1,2],c:”string”,d:{x:1,y:2}}
// // => [a1,b12,cstring,dx1,dy2]

// function convertObjectToArrayMekdes(m){
//     let result=[];

//     for(let obj in m){
//         if(m[obj].constructor === Object){
//             let objects=m[obj]; 
//             for(let i in objects){
//                 result.push(obj+i+ objects[i]);
//             }
//         }else if(m[obj].constructor === Array){
//             result.push(obj+ m[obj].join());
//         }else{
//             result.push(obj+m[obj]);
//         }
//     }
//     return result;

// }

//console.log(convertObjectToArrayMekdes({ a: 1, b: [1, 2], c: "string", d: { x: 1, y: 2 } }));

//     // findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>
// // {name:’Lakshman’,age:15}

// var findYounger= [{name:'Ram',age:20},{name:'Lakshman',age:15}];

//console.log(findYounger.find((a)=>a.age<b.age));


// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//       console.log(name);
//     }

//     return displayName;
//   }
  
//   const myFunc = makeFunc();
//   myFunc();


// const counter = (function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
  
//     return {
//         increment() {
//             changeBy(1);//1
//         },
    
//         decrement() {
//             changeBy(-1);//-1
//         },
//         value() {
//             return privateCounter;
//         },
//     };

// })();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.

//Sample Comments

// function main() {//var x;
//     console.log("x1 is:" + x);
//     x = 20;
//     console.log("x2 is:" + x);
//     if (x > 0) {
//         var x = 30;//
//         console.log("x3 is:" + x);
//     }
//     console.log("x4 is:" + x);
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x);
//     };
//     f(50);
//     console.log("x6 is:" + x);
// }
// main();
// console.log("x7 is:" + x);


// 1. 
// let grapes = "green"; 

  

// function fruits(){ 

//     return function(message){ 

//         return grapes; 

//     } 

// } 

// console.log(fruits()()); 


// 2. 
// let x = 10; 

// function globalVar(){ 

//     return function(){ 

//        return x; 

//     } 

// } 

// x = 20; 

// let fn = globalVar(); 

// console.log(fn()); 



 

// 3. 
// function sport(message){ 

//     message = "Hi"; 

//     return function(message){ 

//         return message; 

//     } 

// } 

// let sportFn = sport("Hello"); 

// console.log(sportFn()); 



 

// // 4. 
// function test(x){ 

//     x = 10; 

//     x++; 

//     return function(){ 

//         return x++; 

//     } 

// } 

// console.log(test(2)()) 
 
 

// // 5.
// function car(){ 

//     let color = "white"; 

//     function seat(){ 

//         let color = "brown"; 
//         console.log(color)//______brown_____

//     } 

//     console.log(color)//______white_____

// } 

// car("black") ;



// 6. 
// function department(){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments);
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language)

//     } 

//     console.log(language) 

// } 

// department() 



 

// // 7. 
// function department(language){ 

//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments)
//     function software(){ 

//         let language = "javascript"; 
//         console.log(language);

//     } 

//     console.log(language) 

// } 

// department("java"); 


//Read value from global scope, reassign the value inside function changes the global scope variable.
// let x = 1;
// function a(){
//     console.log(x);//1
//     x=2;
//     console.log(x);//2
// }
// a();
// console.log(x);//2 


//Object reassigned inside function, doesnt change the outside object
// let x = {a:1};
// function a(x){
//     x={a:4}
//     console.log(x.a);//4
// }
// a(x);
// console.log(x.a);//1


//local variable x is changed, doesnt affect the global variable
// let x = 1;
// function a(){
//     let x=2;
//     console.log(x);//2
// }
// a();
// console.log(x);//1


//parameter x is changed, doesnt affect the global variable
// let x = 1;
// function a(x){
//     x = 4;
//     console.log(x);//4
// }
// a();
// console.log(x);//1


//Declare new variable after changing the global variable, local variable is created, global
//variable remains unchanged. 
// let x = 1;
// function a(){
//     console.log(x);//undefined
//     x=2;
//     console.log(x);//2
//     var x = 4;
// }
// a();
// console.log(x);//1 


//Object pass by reference
// let x = {a:1};
// function a(x){
//     x.a = 4;
//     console.log(x.a);//4
// }
// a(x);
// console.log(x.a);//4

let arr1= [1,2,3];
let j= arr1;
j[0] = 7;
console.log(arr1);
console.log(j);