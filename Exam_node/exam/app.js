const express = require('express');
const app = express();
var count=0;
var port=require('./handlers.js').port;
var eventHandler=require('./handlers.js').funcEven;
var path=require('./handlers.js').path;



app.listen(port, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/" ,function(req,res,next){
    count++;
    console.log(count);
    res.sendFile(path.join(__dirname,"/exam.html"));
    
});

var listData=[];

app.post('/post',function(req,res,next){
    console.log(req.body);
    let objectTree={};
    let typeOf=[];
    typeOf.push(req.body.shurbs);
    typeOf.push(req.body.creepers);
    objectTree.tree=req.body.tree;
    objectTree.type=typeOf;
    objectTree.category=req.body.category;
    // console.log(objectTree);
    listData.push(objectTree);
    console.log("objectTree.tree should ....",objectTree.tree, objectTree.shurbs, objectTree.creepers, objectTree.category);
    res.redirect("/preview");
    //res.send("<h>Successful saved</h>");
});


app.get("/preview", function(req,res,next){
    let outHTML="";
    listData.forEach((a)=>{
        outHTML+="<div><label>Hit : </label> "+count +"</div><div><label>Tree : </label> "+a.tree +"</div> <div><label>Type : </label>  "+a.type +"</div> <div><label>Category : </label> "+a.category +"</div>";
    });
    res.send(outHTML);
})

//module.exports.data= "listData";


