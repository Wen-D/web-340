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
const { response } = require('express');//***************************************** */
// mLab connection

var mongoDB = "mongodb+srv://PM:BU6637@buwebdev-cluster-1.oqsoi.mongodb.net/test?authSource=admin&replicaSet=atlas-hy8yuf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
mongoose.connect(mongoDB, {

  useMongoClient: true
  //useNewUrlParser: true

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

app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
})

// template folder

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");



//template routing

app.get("/", function (request, response){
  response.render("index", {
      title: "New employee entry page",
      message: 'New employee entry page'
  });
});

app.get("/new", function(request, response){
  response.render('new',{
      title:'New Page - 8.3'
      });
});

app.post("/process", function(request,response){
  console.log(request.body.txtName);
  response.redirect("/");

});

app.get("/list", function (request, response){
  
    response.render("list",{
      title: "Employee List",
      employee: employees
    });
    console.log(employees);
  });

// form data
var employeeName = req.body.txtName;
console.log(employeeName);

/*var employeeLast = req.body.txtLast;
console.log(employeeLast);*/

//create an employee model
let employee = new Employee({
  firstName: employeeName,
  //lastName: employeeLast
});

// save employee
employee.save(function(error) {
  if (error)
    throw error;
    console.log(employeeName + ' saved successfully');
     });
     response.redirect('/list');
});

http.createServer(app).listen(8000, function(){console.log("Application started on port 8000!")});

//end program


