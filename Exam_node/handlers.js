const express = require('express');
const app = express();
var path = require("path")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var port = "80";
var count=0;

// var func= function (){
//     count++;
//     console.log(count);
// };

module.exports.port=port;
// module.exports.funcEven=func;
module.exports.path=path;


//const listData= require('./app.js').data;
//console.log(listData);


// router.get("/preview", function(req,res,next){
//     let outHTML="";
//     listData.forEach((a)=>{
//         outHTML+="<div><label>Tree : </label> "+a.tree +"</div> <div><label>Type : </label>  "+a.type +"</div> <div><label>Category : </label> "+a.category +"</div>";
//     });
//     res.send(outHTML);
// })


