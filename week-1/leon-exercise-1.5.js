/* ============================================
; Title: Assignment 1.4 Node.js Server
; Author: Professor Massoud
; Date: 8 August 2020
; Modified By: Wendy Leon
; Description: Web Server
;=========================================== */

var header = require('../header.js');

console.log(header.display("Wendy", "Leon", "Exercise 1.4 Servers"));
console.log('\n');

// start program

var http = require("http");

function processequest(req, res)
{
    var body = "Allo tout le monde";
    var contentlength = body.length;
    res.writeHead (200, {
        'Content-Length': contentLength, 'Content-Type':'text/plain'
    });
    res.end(body)

}

var s = http.createServer(processRequest);

s.listen(8080);

// end program