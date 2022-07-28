myArray = [10,20,4];

let result1=  myArray.map((a,index,array)=> {
    if(a%10 === 0){
        return index;
    }else{
        return a;
    }

})

let result = myArray.map((a, index, array)=> a%10 === 0?index:a);
console.log(result1);
console.log(result);


let reduced= myArray.reduce((accu, a, index, array)=> {
    accu= {index:a}
    return accu
},{});

console.log(reduced);

