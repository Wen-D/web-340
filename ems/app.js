/*
============================================
; Title:  5.4 UI Dev
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:   4 Sept 2020
; Description: 5.4 UI Dev
;===========================================
*/

//header

var header = require('../header.js');
console.log(header.display('Wendy', 'Leon', 'Exercise 5.4 UI Dev'));
console.log('');

// start program

var express = require("express");
var http = require("http");
var path = require ("path");
var logger = require ("morgan");
var app = express();
var mongoose = require("mongoose");
var Employee = require("./models/employee");


// mLab connection

var mongoDB = "mongodb+srv://PM:BU6637@buwebdev-cluster-1.oqsoi.mongodb.net/test?authSource=admin&replicaSet=atlas-hy8yuf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect(mongoDB, {

    useMongoClient: true

});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

    console.log("Application connected to mLab MongoDB instance");

});
// application

var app = express();

app.use(logger("short"));




// template folder

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

// model
var employee = new Employee({
    firstName: 'Miranda',
    lastName: 'Lewis'
  });
  

//template 
app.get("/list", function (request, response){
    response.render("list", {title: "List Page"});
});

app.get("/", function (request, response){
    response.render("index", {
        title: "Home Page",
        employee: employee
    });
});


http.createServer(app).listen(2000, function(){console.log("Application started on port 8080!")});


//end program