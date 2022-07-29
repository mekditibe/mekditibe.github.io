

function sum(n){
    var sum=0;
    for(var i=0; i<n.length; i++){
        sum+=n[i];
    }
    return sum;
    
}

console.log(sum([10,2,3]));

function removeDuplicates(n){
    var start= n[0];
    var array=[];
    array[0]=start;
    for(var i=1; i<n.length; i++){
        if(start!=n[i])
            array.push(n[i]);
    }
    return n=array;
}

console.log(removeDuplicates(["apple","banana","cider"]));


function findElement(n,m){
    for (var i=0; i<n.length; i++){
        if(n[i] == m)
            return true;
    }
    return false;
}


console.log(findElement(["apple","cider"],"ckider"));


function changeArray(n){
    var endEl= n[n.length-1];
    if(endEl%4 == 0){
        n.pop();
        n.unshift(endEl);
    }else{
        n.pop();
    }
    return n;
}


console.log(changeArray([4,5,6]));


function reverseString(n){
    var reverse="";
    for (var i=0; i<n.length; i++){
        reverse = n[i]+reverse;
    }
    return reverse;
}

console.log(reverseString("string"));


function changeString(n){
    var firstCar= 'a';
    var result= "";
    if(n[1] == firstCar){
        result= n[0] + "b";
        for (var i=2; i<n.length; i++){
            result = result + n[2];
        }
    }

    return result;
}

console.log(changeString("wap"));


