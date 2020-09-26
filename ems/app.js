/*
============================================
; Title:  8.4 UI Dev
; Author: Professor Krasso
; Modified by: Wendy Leon
; Date:   25 Sept 2020
; Description: 8.4 EMS
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
var mongoose = require("mongoose");
var helmet = require("helmet");
var crsf = require("csurf");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var Employee = require("./models/employee");

// mLab connection

var mongoDB = "mongodb+srv://PM:BU6637@buwebdev-cluster-1.oqsoi.mongodb.net/test?authSource=admin&replicaSet=atlas-hy8yuf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(mongoDB, {

  //  useMongoClient: true
  useNewUrlParser: true

});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {

console.log("Application connected to mLab MongoDB instance");

});

// set-up csrf protection
var csrfProtection = crsf({cookie: true});

// Initialize express app
var app = express();


app.use(logger("short"));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(helmet.xssFilter()); // helmet
app.use(csrfProtection);

app.use(function(req, res, next){
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
})

// template folder

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//const { response } = require('express');/******* */

//template routing

app.get("/", function (req, res){
  response.render("index", {
      title: "New employee entry page",
      message: 'New employee entry page'
  });
});

app.get("/new", function(req, res){
  res.render('new',{
      title:'New Page - 8.3'
      });
});

app.post("/process", function(req,res){
  console.log(req.body.txtName);
  response.redirect("/");

});

app.get("/list", function (request, response){
  
    res.render("list",{
      title: "Employee List",
      employee: employees
    });
    console.log(employees);
  });


// model   /
var employee = new Employee({
    firstName: 'Miranda',
    lastName: 'Lewis'
  });
  








http.createServer(app).listen(8000, function(){console.log("Application started on port 8080!")});

//end program


