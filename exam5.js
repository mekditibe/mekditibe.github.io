//transform([{name:"John",salary:1000},{name:"Peter",salary:2000}])=> { John: 1000, Peter: 2000 }

// function transform(m){
//     var obj={};
//     for (let i =0; i<m.length; i++){
//         var key= m[i].name;
//         var value = m[i].salary;
//         obj[key]=value;
//     }
//     return obj;
// }

// console.log(transform([{name:"John",salary:1000},{name:"Peter",salary:2000}]));


function drawRightAngle(m){
    for(let i = 1; i<=m; i++){
        for (let j=1; j<=m; j++){
            console.log(j);
        }
        
    }
}

//console.log(drawRightAngle(4));

//findRowColSum([[1,5],[10,7,8])=>[6,11]

// function findRowColSum(m){
//     var sumR=0;
//     var sumC=0;
//     var result=[];
//     var firstR= m[0];
//     for (let j=0; j<firstR.length; j++){
//         sumR+=firstR[j];
//     }
//     for(let i=0; i<m.length; i++){
//         let row=m[i];
//         sumC+=row[0];
//     }
//     result.push(sumR);
//     result.push(sumC)
//     return result;
// }

// console.log(findRowColSum([[1,2],[1]]));

// function reverseJson(m){
//     var result={};
//     var keys = Object.keys(m);
//     for(let i=0; i<keys.length; i++){
//         if(m[keys[i]].constructor === Object){
//             var oj= m[keys[i]];
//             var values= Object.keys(m[keys[i]]);
//             var con='';
//             for(let j in values){
//                 con+=values[j] + oj[values[j]];
//             }
//             result[con]=keys[i];

//         }else if(m[keys[i]].constructor === Array){
//             var oj= m[keys[i]];
//             var con='';
//             for(let j in oj){
//                 con+=oj[j];
//             }
//             result[con]=keys[i];
//         }else{
//             result[m[keys[i]]]=keys[i];
//         }
       
//     }
//     return result;
// }

// console.log(reverseJson({ name:"ram",age:30,skills:["java","python"],location:{city:"fairfield",zip:52556}}));

//spliceMock([1,2,3,4,5],2,0,[55,5555]) => [1, 2, 55, 5555, 3,  4,5]


// function spliceMock(m,s,n,insert){
//     var newAr= [];
//     newAr=m.slice(0,s);
//     var temp= m.slice(s+n);
//     if(n>0){
//         if(insert.constructor === Array){
//             if(insert.length > 0){
//                 newAr= [...newAr,...insert,...temp];
//             }else{
//                 newAr= [...newAr,...temp];
//             }
//         }else{
//             newAr= [...newAr,insert,...temp];
//         }
       
//     }else{
//         if(insert.constructor === Array){
//             if(insert.length > 0){
//                 newAr= [...newAr,...insert,...temp];
//             }else {
//                 newAr= [...newAr,...temp];
//             }
//         }else{
//             newAr= [...newAr,insert,...temp];
//         }
       
//     }
//     return newAr;
// }

// console.log(spliceMock([1,2,3,4,5],2,2,[55,5555]));
// console.log(spliceMock([1,2,3,4,5],2,2,"insert"));





