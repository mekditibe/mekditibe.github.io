const express= require('express');
const app = express();
var path= require('path');
// read the parameter from 'get'
var users=[];
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen("8080", function(){
	console.log("server started 8080")
});

app.get('/user', function(req,res,next){
    res.sendFile(path.join(__dirname,"/addUser.html"));
});

app.post('/saveUser', function(req,res,next){
    let user={};
    user.userId=req.body.userId;
    user.username=req.body.username;
    user.usertype=req.body.usertype;
    users.push(user);
    console.log(users);
    res.redirect("/userview");
    //next();
    //res.sendFile(path.join(__dirname,"/addUser.html"));
});

app.get('/userview', function(req,res,next){
    console.log("here" , users)
    res.send("<h>Saved successfully "+users[0] +"</h>");
});