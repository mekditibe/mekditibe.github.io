const express= require('express');
const app = express();
var path= require('path');
// read the parameter from 'get'

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("public"));


app.get('/info', function (req, res, next){
   // res.sendFile(path.join(__dirname,"./index.html"));
    res.status(200).json({info: "Hello we are geting data from server"});
    //res.status(200).send("<h1>Hi</h1>");

})


app.listen(8080, ()=>{console.log('you server is running 8080')});



// app.get('/viewCust', function(req, res,next){

//     res.status(200).json({info: "Hello we are geting data from server"});
//     // res.status(200).json({info:customer});
//     //res.sendFile(path.join(__dirname,"./viewCust.html"));
// });

// app.get('/car/book', function (req, res, next){
//     res.sendFile(path.join(__dirname,"./card.html"));
//     //res.send("Hello world");
// })


// app.get('/admin', function (req, res, next){
//     res.sendFile(path.join(__dirname,"./card.html"));
//     //res.send("Hello world");
//         //req.redirect(path.join(__dirname,"./custom.html"));
// })


// app.post('/regstration', function(req,res,next){
//     console.log('in the post : ', req.body,req.body.fname, req.body.lname);
//     const customer = req.body;
//     res.redirect(path.join(__dirname,"./viewCustomer.html"));
// })