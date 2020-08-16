/*
============================================
; Title: Assignment 2.2
; Author: Professor Massoud
; Date: 8/14/20
; Modified By: Wendy Leon
; Description: Routing with Express 
;===========================================
*/ 

var express = require ("express");

var http = require("http");
//express function 
var app = express();

app.use(
    function (request, response)
    {
        console.log("In comes a request to: " + request.url);

        response.end("Hello World");
    }
)
//create server on port 8080
http.createServer(app).listen(8080, function() {
    console.log('Application started on port %s', 8080);
});

