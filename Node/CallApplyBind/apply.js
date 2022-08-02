//this.xVal = 9;    // 'this' refers to the global object (e.g. 'window') in non-strict mode



// var func = function() {
//     console.log(this)
// }.bind(1);

// func();


// var func = function() {
//     console.log(this)
// }.bind(1);
 
//  var obj = {
//     callFun : func()
//  }
// obj.callFun;


// var func = function() {
//     console.log(this)
// }.bind(1);
 
//  var obj = {
//     callFun : func
//  }
// obj.callFun.func();

//  var obj = {
//     callFun : func,
//    print: function print(){ console.log("here")}
//  }
// obj.callFun(obj,11);

// var func = function(val) {
//     console.log(this, val)
// }.bind({id:1,age:12});
// let k= func;
// //what is the output
// k(22)//....?





// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.call(1,2,3,4);

// function checkFun(a, b, c){
//     console.log(this);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// checkFun.apply(1,[2,3,4]);


// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers(1,2,3);
// console.log(sum);

// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers.call(null,1,2,3);
// console.log(sum);

// var updateZipCode = function (newzipcode,country) {
//     console.log("print it here",this);
//     this.zip=newzipcode;
//     this.country=country;
//     console.log("here we gp",newzipcode + ' ' + country);

// };
// var zipCode = {
//     zip: '11787'
// };
// updateZipCode.call(zipCode,'22321',"US");
// console.log(zipCode);

// function arg(){
//     console.log(arguments);
// }

// arg(1,2,3,4,5);

// function mor(...more){
//     console.log(more);
// }

// mor(1,2,3,4,5);

// spread operstion 
// [...z]
//{...obj}

// let city=["farfiled"]
// let u= [...city];
// let oj ={};
// oj['H']= {...city};
// u.push("KK");
// console.log(u);
// oj.l=23;
// console.log(oj);


// var obj = { num: 2 };

// function add(a, b){
//   return this.num + a + b;
// }

// const resultCall  = add.call(obj, 3, 5);
// const resultApply = add.apply(obj, [3, 5]);
// const funcBind    = add.bind(obj, 3, 5)
// const resultBind  = funcBind();

// console.log(resultCall, resultApply, resultBind);


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var self= this;
//         (function name(param) {
//             self.nickname=param;
//             console.log(arguments);
//         })("Jon","new parameter");
//         var fullname = 'FirstName: ' +this.firstname + ' lastName: ' + this.lastname+ ' and We also have nickname: ' + this.nickname;
//         return fullname;
//     }
// };

// var pokemonName = function() {
//     console.log(this.getPokeName() + ' I choose you!');
// };

// var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon(); // 'Pika Chu I choose you!'


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby,x,y) {
//     console.log(this.getPokeName() + 'I choose you!');
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// var logPokemon = pokemonName.bind(pokemon,"you","Mam"); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

// logPokemon('sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms

//  var result = pokemonName.bind(pokemon,'sushi', 'java');
// //var result = pokemonName.bind(pokemon);
// result("you","Mam");


// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms

// const moduleObj = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };

//   console.log(moduleObj)
  
// const unboundGetX = moduleObj.getX;
// console.log("here",unboundGetX()); // The function gets invoked at the global scope
// // expected output: undefined


// const boundGetX = moduleObj.getX.bind(moduleObj);
// console.log(boundGetX());
// // expected output: 42

// const moduleOjMy = {
//   xVal: 81,
//   getX() { return this.xVal; }
// };
// console.log(moduleOjMy);
// console.log('call the property: ',moduleOjMy.getX());
// //  returns 81

// const retrieveX = moduleOjMy.getX;
// console.log('global "retrieveX" is invoked: ',retrieveX());
// //  returns 9; the function gets invoked at the global scope

// //  Create a new function with 'this' bound to module
// //  New programmers might confuse the
// //  global variable 'x' with module's property 'x'
// const boundGetX = retrieveX.bind(moduleOjMy);
// console.log('using bind with object of "moduleOjMy" : ',boundGetX());
//  returns 81

// console.log(this);

// function list() {
//     return Array.prototype.slice.call(arguments);
//   }

// //   function list(arg1) {
// //     return Array.prototype.slice.call(arg1);
// //   }
  
//   function addArguments(arg1, arg2) {
//     return arg1 + arg2;
//   }
  
//   const list1 = list(1, 2, 3);
//   //  [1, 2, 3]
//   console.log(list1);

// //   const list1 = list([1, 2, 3]);
// //   //  [1, 2, 3]
// //   console.log(list1);
  
//   const result1 = addArguments(1, 2);
//   //  3
//   console.log(result1);
  
//   // Create a function with a preset leading argument
//   const leadingThirtySevenList = list.bind(null, 37);
  
//   // Create a function with a preset first argument.
//   const addThirtySeven = addArguments.bind(null, 37);
  
//   const list2 = leadingThirtySevenList();
//   console.log(list2);
//   //  [37]
  
//   const list3 = leadingThirtySevenList(1, 2, 3);
//   console.log(list3);
//   //  [37, 1, 2, 3]

//   const list31 = leadingThirtySevenList(9,7,8);
//   console.log(list31);
//   //  [37, 9, 7, 8]
  
  
//   const result2 = addThirtySeven(5);
//   console.log(result2);
//   //  37 + 5 = 42
  
//   const result3 = addThirtySeven(5, 10);
//   console.log(result3);
//   //  37 + 5 = 42
//   //  (the second argument is ignored)


// class LateBloomer {
//     constructor() {
//         this.petalCount = Math.floor(Math.random() * 12) + 1;
//     }
//     // Declare bloom after a delay of 1 second
//     bloom() {
//         setTimeout(this.declare.bind(this), 1000);
//     }
//     declare() {
//         console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
//     }
// }
  
  
  
//   const flower = new LateBloomer();
//   flower.bloom();
  //  after 1 second, calls 'flower.declare()'



//   function LateBloomer() {
//     this.petalCount = Math.floor(Math.random() * 12) + 1;
//   }
  
//   // Declare bloom after a delay of 1 second
//   LateBloomer.prototype.bloom = function() {
//     console.log('1: ',this);
//      setTimeout(this.declare.bind(this), 1000);
//   };
  
//   LateBloomer.prototype.declare = function() {
//     console.log('2: ',this);
//     console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
//   };
  
//   const flower = new LateBloomer();
//   flower.bloom();
//   //  after 1 second, calls 'flower.declare()'
  
    // var self= {'x':4,'y':5};
    // function toString() {
    //     return `this is : ${this.x},${this.y}`;
    // };

    // var z= toString();
    // return z;

// function Point(x,y) {
//     this.x = x;
//     this.y = y;
//     console.log("out in class : ",this.x + this.y);
//     // var self = this;
//     //  (function toString(self) {
//     //     console.log( `this is : ${self.x},${self.y}`);
//     //  }
//     //  )(self);

//      return 0;
//   }

// //   console.log(Point());
  

//   Point.prototype.toString = function(self) {
//     return `this is : ${this.x},${this.y}`;
//   };
//   var result= Point.bind({});
//   console.log(result(1,2));

//   const p = new Point(1, 2);
// var withBind= p.toString.bind({'x':"nameX","y":"namey"});
// console.log(withBind());
//   p.toString();
//   // '1,2'
//   console.log(p);
  
  //  not supported in the polyfill below,
  
  //  works fine with native bind:
  
//   const YAxisPoint = Point.bind(null, 0/*x*/);
//   console.log(YAxisPoint);

//   console.log(p.toString());

  
//   const emptyObj = {};
//   const YAxisPoint = Point.bind(emptyObj);
//   console.log(YAxisPoint.toString());

//   const axisPoint = new YAxisPoint(1,5);
//   axisPoint.toString();                    // '1,5'
  
//   console.log(axisPoint.toString());

//   axisPoint instanceof Point;              // true
//   axisPoint instanceof YAxisPoint;         // true
//   new YAxisPoint(17, 42) instanceof Point; // true
  

// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var numbers = [1,2,3];
// var sum = sumOfNumbers.apply(null, numbers);
// console.log(sum);
// var sum1 = sumOfNumbers.call(null, 1,2,3);
// console.log(sum1);

// var sum2 = sumOfNumbers.bind(null, 1,2,3);
// console.log(sum2());
  


// "use strict";
// var person = {
//     name : "Jack",
//     prop : {
//         name : "Daniel",
//         getName : function() {
//             return this.name;
//         }
//     }
// }

// var nameL = person.prop.getName.bind(person);
// console.log(nameL());

// var  nameJ = person.prop.getName();
// console.log(nameJ);

// "use strict";
// var zipcode = {
//     checkZipcode : function() {
//         console.log(this);
//         var updateZipCode = function() {
//             console.log(this.x);
//         }.bind({x:2});
//         updateZipCode();
//     }
// }
// zipcode.checkZipcode();

// // console.log(this);
// function foo() { console.log(this); }
// // foo();
// const bob = {
//  log: function() {
//  console.log(this);
//  }
// };

// bob.log();

// function sam() {
//   this.newvar = "hello";
//   }
//   //console.log(newvar); // Uncaught ReferenceError: newvar is not defined
//   sam(); // this = window
//   console.log(newvar); //hello 

function multiply(a, b,c) {
  return (a * b) - c; //no usage of ‘this’
 }
 const multipleByTwo = multiply.bind(null, 3,4); // set a = 2
 var sec= multipleByTwo(2);
 var sec2 = multipleByTwo(1);


 console.log(sec2);



//  const multipleByThree = multiply.bind(null, 3); // set a = 3
//  console.log(multipleByThree(4)); // 12