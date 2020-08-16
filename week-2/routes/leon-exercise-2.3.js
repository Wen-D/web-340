/*
============================================
; Title: Assignment 2.3
; Author: Professor Massoud
; Date: 8/15/20
; Modified By: Wendy Leon
; Description: Routing with Express 
;===========================================
*/ 

var express = require("express");

var http = require("http");

var app = express();
//display message based on url
app.get('/', function (request, response)
{
    response.end("Welcome to the homepage");
}
);

app.get("/about", function (request, response)
{
    response.end("Welcome to the about page");
}
);

app.get("/contact", function(request,response)
{
    response.end("404");
}
);

http.createServer(app).listen(8080);