/*
============================================
; Title:  Exercise 5.3 PUG Templates
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:   4 Sept 2020
; Description: PUG Templates
;===========================================
*/
//header
var header = require('../../header.js');
console.log(header.display('Wendy', 'Leon', 'Exercise 5.3 - PUG Templates'));
console.log('');

// start program

var express = require("express");
var http = require("http");
var pug = require ("pug");
var path = require("path");
var app = express();

// template file
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

// "/" renders index page 
app.get("/", function(request, response){
    response.render("index", {
        message: "PUG homepage - index page using pug templating engine"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080!");
});
//end program