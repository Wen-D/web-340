/* ============================================
; Title: Assignment 1.3 Modules
; Author: Professor Massoud
; Date: 8 August 2020
; Modified By: Wendy Leon
; Description: Modules
;=========================================== */

var header = require('../header.js');

var header = require('../header.js');
console.log(header.display("Wendy", "Leon", "Exercise 1.3 Moduless"));
console.log('\n');

// start program

var url = require("url");

var parsedURL = url.parse("https://thisurl.com/profile?name=leonwe");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

// end program