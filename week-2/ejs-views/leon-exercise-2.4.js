/*
============================================
; Title: Assignment 2.4
; Author: Professor Massoud
; Date: 8/15/20
; Modified By: Wendy Leon
; Description: EJS Views 
;===========================================
*/ 
var http = require ("http");

var express = require("express");

var path = require("path");

var app = express();
// Tell express views are in the 'views' directory
app.set("views",path.resolve(__dirname, "views"));

// Tell express to use th EJS view engine
app.set("view engine","ejs"); 

app.get("/", function(request,response){
    response.render("index", {
        firstName: 'Wen-D',
        lastName: 'Leon',
        address: '288 Moonwalk rd'
    });
});

http.createServer(app).listen(8080, function(){
    console.log("EJS-views app started on port 8080.");
});
