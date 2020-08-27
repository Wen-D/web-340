/*
============================================
; Title: Assignment 4.4 cURL
; Author: Professor Massoud
; Date: 8/26/20
; Modified By: Wendy Leon
; Description: 4.3 HTTP Status Codes
;===========================================
*/ 

var header = require('./header.js');

console.log(header.display("Wendy", "Leon", "Assignment 4.4 cURL"));
console.log('\n');

// start program

//set up express app

var express = require("express");
var http = require("http");
var app = express();

// Create a cURL GET request
app.get("/", function(request, response){
   response.send("cURL GET request.");
});

// Create a cURL POST request
app.post("/", function(response, request){
   response.send("cURL POST request.");
});

// Create a cURL PUT request
app.put("/message", function(request, response){
   response.send("cURL PUT request");
});
// Create a cURL DELETE request
app.delete("/message", function (request, response){
   response.send("cURL DELETE request");
});

// console log
http.createServer(app).listen(3000, function(){
   console.log("Application started on port 3000");
});