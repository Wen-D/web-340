/*
============================================
; Title: Assignment 4.2 JSON APIs
; Author: Professor Massoud
; Date: 8/26/20
; Modified By: Wendy Leon
; Description: JSON APIs
;===========================================
*/ 
//set up express app
var express = require("express");
var http = require("http");

var app = express();
// add logger

app.use(logger('dev'));

//Create your own get request and return a JSON object 
//(pick your own values, but there must be at least three (3) fields)

app.get("/student/:id", function(request, response)
{
   var id = parseInt(request.params.id, 10);
   response.json({
      firstName: "Wendy",
      lastName: "Leon",
      studentId: id       
   });
});

http.createServer(app).listen(8080, function (){
   console.log("Application started on port 8080");    
});

