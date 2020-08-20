/*
============================================
; Title: Assignment 3.3 Middleware Stack
; Author: Professor Massoud
; Date: 8/19/20
; Modified By: Wendy Leon
; Description: Advanced Routing
;===========================================
*/ 

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

// tell express the views are in the views directory
app.set("views", path.resolve(__dirname, "views")); 

//tell express to use the EJS view engine
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/:employeeId", function(request, response)
{
    var employeeId = parseInt(request.params.employeeId,10);

    response.render("index",{employeeId : employeeId});
});

http.createServer(app).listen(3001, function(){
    console.log("Application started on port 3001");
});