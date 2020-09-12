/*
============================================
; Title:  5.4 UI Dev
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:   4 Sept 2020
; Description: 5.4 UI Dev
;===========================================
*/

//header

var header = require('../header.js');
console.log(header.display('Wendy', 'Leon', 'Exercise 5.4 UI Dev'));
console.log('');

// start program

var express = require("express");
var http = require("http");
var path = require ("path");
var logger = require ("morgan");
var app = express();


// template folder

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//template 
app.get("/list", function (request, response){
    response.render("list", {title: "List Page"});
});

app.get("/", function (request, response){
    response.render("index", {title: "Home Page"});
});


http.createServer(app).listen(2000, function(){console.log("Application started on port 8080!")});


//end program