/*
============================================
; Title: Assignment 4.3 HTTP Status Codes
; Author: Professor Massoud
; Date: 8/26/20
; Modified By: Wendy Leon
; Description: 4.3 HTTP Status Codes
;===========================================
*/ 
/*
var header = require('../../header.js');

console.log(header.display("Wendy", "Leon", "Assignment 4.3 HTTP Status Codes"));
console.log('\n');

*/
// start program

//set up express app
var express = require ("express");
var http = require('http');
var app = express();

app.get("/not-found", function(request, response)
{
   response.status(404);
   response.json({
      error: "oh no, page not found"    
   })
});

app.get("/ok", function(request, response)
{
   response.status(200);
   response.json({
       message: "Page loaded correctly - for once."
   })
});

app.get("/not-implemented", function(request, response)
{
    response.status(501);
    response.json({ 
        error: "Page not implemented. We are all wondering who's at fault..."
       })
});

http.createServer(app).listen(3000, function(){
    console.log("This application stated on port 3000");
});