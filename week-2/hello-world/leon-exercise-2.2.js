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

var app = express();

app.use(
    function (request, response)
    {
        console.log("In comes a request to: " + request.url);

        response.end("Hello World");
    }
);

http.createServer(app).listen(8080});

