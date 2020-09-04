/*
============================================
; Title:  EJS Templates
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:   3 Sept 2020
; Description: EJS Templates
;===========================================
*/
//header
var header = require('../../header.js');
console.log(header.display('Wendy', 'Leon', 'Exercise 5.2 - EJS Templates'));
console.log('');

// start program

var express = require("express");
var http = require ("http");
var path = require ("path");

var app = express();
// template file
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
//people array
var names = ["Paola", 
              "Eva", 
              "Cassey", 
              "Daniela"
              ];
// "/" renders index page 
app.get("/", function (request, response){
    response.render ("index", {people: names});
});

http.createServer(app).listen(8000, function(){
    console.log("Application started / listening on port 8000");
});

//end program