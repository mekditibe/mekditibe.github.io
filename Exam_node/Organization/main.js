const express = require('express');
const app = express();
var path = require("path");
const port="8080";

app.listen(port, function(){
    console.log('Your Server is running on '+ port);
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.enable("case sensitive routing");

app.all('*', userAuth);
// app.all('/api/*', apiAuth);
var userAuth = function (req, res, next) {
    console.log("userAuth...1")
    return next();
};
var apiAuth = function (req, res, next) {
    console.log("apiAuth...1")
    return next();
};