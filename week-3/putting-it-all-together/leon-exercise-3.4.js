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

app.get("/", function(request, response)
{
       response.render("index",{message: "home page"});
});

http.createServer(app).listen(3000, function(){
    console.log("Application started on port 3000");
});
// About Page
app.get("/about", function(request, response)
{
       response.render("about",{message: "about page"});
});
// Contact Page
app.get("/contact", function(request, response)
{
       response.render("contact",{message: "contact page"});
});
// Products Page
app.get("/products", function(request, response)
{
       response.render("products",{message: "products page"});
});


