let myArray=["str1","str2","str3","str4","str5"];

for(let i=0; i<myArray.length; i++){
   if(myArray[i] == "str1")
        console.log(myArray[i])
}

let i=0;
while(i<myArray.length){
    console.log(myArray[i]);
    i++;
}

let b=0;
do{
    console.log(myArray[b]);
    b++;
}while(b<myArray.length);

for(let i of myArray){
    console.log(i);
}

let array=["str1","str2"];

function nameOfFunction(paramName){
    //the statement
    // if parameter value is not passed here
    // it will be undefained 
    // which will give NaA for ( p=p+paramName;)
    let p=9;
    p=p+paramName;
    return p;

}

console.log(nameOfFunction());

function sum(m,n){
    return m+n;
}


function sum(m,n,j){
    return m+n+j;
}
// function has the same name 
// the laste one will overide it, doesn't mater it has differant parameters
console.log(sum(1,2));

//console.log(sum(1,2,3));

// it will print the function name, it doesn't invock the function
console.log(sum);

// if you have variable name called "sum" and function name "sum"
// you will get error massasage

function maxFun(a,b,c){
    // it doesn't work like this 
    // return a>b ? (a>c ? a:c) : (b>c ? b:c);

    if(a>b){
        
    }
}

console.log(maxFun());