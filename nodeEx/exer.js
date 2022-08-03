const express= require('express');
const app = express();
var path= require('path');

var server = app.listen(8081, function (){
        var host = server.address().address;
        var port = server.address().port;
        console.log('you server is running '+ port);
        console.log("Example app listening at http://%s%s", host, port)

    }
);

// read the parameter from 'get'

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.static("public"));
// module.exports.customer = customer;

app.get('/', function(req,res,next){
    res.sendFile(path.join(__dirname,"./regiForm.html"));
} );
var customer= [];
app.post('/saveCus', function(req,res,next){
    console.log('in the post : ', req.body);
    let cust= {};
    cust.fname= req.body.fname;
    cust.lname= req.body.lname;
    cust.email= req.body.email;
    customer.push(cust);
    console.log("output of the array .....: ",customer);
    res.redirect("/viewCust");
} );

app.get('/viewCust', function(req, res,next){

    res.status(200).json({info: "Hello we are geting data from server"});
    // res.status(200).json({info:customer});
    //res.sendFile(path.join(__dirname,"./viewCust.html"));
});


// const util = require('util'); // We do not use ./ before the filename
// const sayHi = util.format("fname: %s,lname: %s,email: %s ",customer[0],customer[1],customer[2] );
// util.log(sayHi); //22 Feb 11:04:59 - Hi, Josh
        