/*
============================================
; Title: Assignment 3.2 Middleware Stack
; Author: Professor Massoud
; Date: 8/19/20
; Modified By: Wendy Leon
; Description: Logging 
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

app.get("/", function (request, response)
{
    response.render("index", {message: "Morgan Logger example"});
});

http.createServer(app).listen(8080, function()
{
    console.log("Application started on port 8080");
});

