
// function sayPet() {
//     console.log("out 1",y);				
//     let y = 'parrot';
//     console.log("out 2",y);				
//     function name() {	
//         let y;			
//       console.log("out 3",y);				
//     };
//     name();
//     return "me";						
//   }
  
//   //let bestBuddy = sayPet();		
//   console.log("out 4",sayPet("this is pet"));

  //bestBuddy("Not Pet");		



// let dessert = 'tart';

// if (dessert) {
//   let dessert = 'cannoli';
// //   if (dessert.length > 5) {
// //     console.log('quick snack',dessert);
// //   } else {
// //     console.log('lengthy treat',dessert);
// //   }
// } else {
//   console.log('no dessert...',dessert);
// }
// console.log('no dessert...',dessert);


// let tea = 'sweet';

// if (true) {
//     console.log(tea);

//     //tea='what now';
//     console.log(tea);

//   //tea = 'sour';
//   var tea = 'iced';
// }

// console.log(tea);

// let numberOfBagels = 5;

// function eatBagel() {
//   numberOfBagels -= 1;
//   if (numberOfBagels === 0) {
//     console.log('Oh nO, Out Of bagles!');
//   } else {
//     console.log(`Yummy. There are ${numberOfBagels} left!`);
//   }
// }

// eatBagel();
// eatBagel();
// console.log(numberOfBagels);

// let numberOfBagels = 5;

// function eatBagel(bagels) {
//   bagels -= 1;
//   if (bagels === 0) {
//     console.log('Oh nO, Out Of bagles!');
//   } else {
//     console.log(`Yummy. There are ${bagels} left!`);//4
//   }
// }

// eatBagel(numberOfBagels);//4
// eatBagel(numberOfBagels);//4
// console.log(numberOfBagels);//5

// let numberOfBagels = 5;

// function eatBagel(numberOfBagels) {
//   numberOfBagels -= 1;
//   if (numberOfBagels === 0) {
//     console.log('Oh nO, Out Of bagles!');
//   } else {
//     console.log(`Yummy. There are ${numberOfBagels} left!`);//4
//   }
// }

// eatBagel(numberOfBagels);//5
// eatBagel(numberOfBagels);//4
// console.log(numberOfBagels);//5
// var a = 5;
// const b = 6;

// function addThem() {
//   console.log(a + b);
//   //b='wwww';
// }

// addThem();

// if (true) {
//     let pecan = 'sandie';
// };
  
// console.log(pecan);

// let food = 'sushi';

// function eatEmUp() {
//   let sauce = ' soy';

//   function mixEmUp() {
//     console.log(food + sauce);
//   }
  
//   mixEmUp();
// }

// eatEmUp();

// let food = 'sushi';

// function eatEmUp() {

//   function sauceEmUp() {
//     let sauce = ' garlic soy';
//   }
  
//   sauceEmUp();
//   console.log(food + sauce)
// }

// eatEmUp();


// let bread = 'sourdough';

// function makeSandwich() {
//   let meat = ' spam';

//   if (meat === ' spam') {
//     meat += ' and eggs';
//   }

//   function getCheese() {
//     let cheese = ' swiss';

//     function condiment() {
//       let condiment = ' sriracha';
//       return condiment;
//     }
    
//     return (cheese + condiment())
//   }

//   return bread + meat + getCheese();
// }

// console.log(makeSandwich());

// let bread = 'sourdough';

// function makeSandwich() {
//   let meat = ' spam';
//   let condiment = 'mayo';

//   function getCheese() {
//     let cheese = ' swiss';

//     function condiment() {
//       let condiment = ' sriracha';
//     }

//     condiment(); 
//     return (cheese + condiment)
//   }

//   return bread + meat + getCheese();
// }

// console.log(makeSandwich());

// let bread = 'sourdough';

// function makeSandwich() {
//   let meat = ' spam';
//   let condiment = ' mayo';

//   function getCheese() {
//     let cheese = ' swiss';

//     if (cheese) {
//       let condiment = ' sriracha';
//     }

//     return (cheese + condiment)
//   }

//   return bread + meat + getCheese();
// }

// console.log(makeSandwich());

// let bread = 'sourdough';

// function makeSandwich() {
//   let meat = ' spam';
//   let condiment = ' mayo';

//   function getCheese() {
//     let cheese = ' swiss';

//     if (cheese) {
//       var condiment = ' sriracha';
//     }

//     return (cheese + condiment)
//   }

//   return bread + meat + getCheese();
// }

// console.log(makeSandwich());

// function stringCheese() {
//     console.log(cheddar);
//     let cheddar = 'sharp';
//   }
//   stringCheese();

// function stringCheese(cheese) {
//     console.log(cheese);
//     let cheddar = 'sharp';
//     cheese = cheddar;
//   }
//   stringCheese('blue');

// function stringCheese(cheese) {
//     cheese = cheddar;
//     console.log(cheese);
//     let cheddar = 'sharp';
//   }
//   stringCheese('camembert');


// function stringCheese(cheese) {
//     let cheddar = 'sharp';
//     cheese = cheddar;
//     console.log(cheese);
//   }
//   stringCheese('oaxaca');

// console.log("1 teaTime")
// teaTime();
// console.log("2 teaTime")

// var teaTime = 'shortcake';
// console.log("3 teaTime")


// function teaTime() {
//   console.log('custard tart');
// }

// teaTime();
// console.log("4 teaTime")

// var teaTime = 'shortcake';
// teaTime();

// function teaTime() {
//   console.log('custard tart');
// }

// function shoutBeans() {
//     let beans = 'green';
  
//     return function() {
//       console.log(beans.toUpperCase());
//     };
//   }
  
//   let loudBeans = shoutBeans();
  
//   loudBeans();


// function shoutBeans(m) {
//     m = 'green';
//     //console.log(m.toUpperCase());
//     return function(m) {
//       console.log(m.toUpperCase());
//     };
//   }
//   let loudBeans = shoutBeans();

//  let  m = 'chickpea';
//   loudBeans(m);

// let beans = 'peanut';

// function shoutBeans() {

//   return function() {
//     beans = 'jack';
//     console.log(beans.toUpperCase());
//   };
// }

// let loudBeans = shoutBeans();
// loudBeans();
// console.log(beans);


// function shoutBeans() {
//     //beans = 'moth';
//     return function() {
//       beans = 'moth';
//       console.log(beans.toUpperCase());
//     };
//   }
//   //console.log(beans);
//   let loudBeans = shoutBeans();
//   console.log(beans);
//   loudBeans();
//   console.log(beans);


// function buildTaco(firstFilling, secondFilling) {
//     return `Taco with ${firstFilling} and ${secondFilling}`;//chicken grilled onions
//   }
  
//   function makeMeatTaco(meatFilling) {
//     return function(otherFilling) {
//       return buildTaco(meatFilling, otherFilling);
//     };
//   }
  
//   let chickenTaco = makeMeatTaco('chicken');
  
//   console.log(chickenTaco('grilled onions'));
//   console.log(chickenTaco('salsa verde'));