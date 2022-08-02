let user={a:1,b:3};
let role= {c:3,d:4};

user.__proto__=role;
console.log(user.c);

let x=5;
function ff(){
    console.log(x);
   let x={a:1,b:2};
}

ff();
console.log(x);