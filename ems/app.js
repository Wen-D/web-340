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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var Employee = require("./models/employee");

var mongoDB = "mongodb+srv://PM:BU6637@buwebdev-cluster-1.oqsoi.mongodb.net/test";
mongoose.connect(mongoDB, {
  
  //useMongoClient: true
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
})
);


app.use(cookieParser());
app.use(helmet.xssFilter()); // helmet

app.use(csrfProtection);
app.use(function(request, response, next){
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

////
// template folder

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 2600);

//template routing

app.get("/", function (request, response){
  response.render("index", {
      title: "EMS Index Page1"
  });
});

app.get("/new", function(request, response){
  response.render('new',{
      title:'Add Employee'
      });
});
app.get("/list", function (request, response){

  Employee.find({}, function(error, employees) {
    console.log("employees" + employees);
    console.log("Employee" + Employee);
    if (error) throw error;
    response.render("list", {
        title: "Employee List",
        employees: employees
    });
 });
});

app.post("/process", function(request,response){
  console.log("/process " + request.body.txtName);
  if (!request.body.txtName) {
    response.status(400).send("Entries must have a name");
    return;
}

// form data
var employeeName = request.body.txtName;
var employeeLast = request.body.txtLastName;

console.log("form data" + employeeName);

//create an employee model
let employee = new Employee({
  firstName: employeeName,
  lastName: employeeLast
});

// save employee
employee.save(function(error) {
  if (error)
    throw error;
    console.log(employeeName + '' + employeeLast + ' saved successfully');
     });
     response.redirect('/list');
});

app.get("/view/:queryName", function (request, response) {
  var queryName = request.params.queryName;

  Employee.find({'firstName': queryName}, function(error, employees) {
      if (error) throw error;

      console.log(employees);

      if (employees.length > 0) {
          response.render("view", {
              title: "Employee Record",
              employee: employees
          })
      }
      else {
          response.redirect("/list");
      }

  });
});

http.createServer(app).listen(app.get("port"), function(){
  console.log("Application started on port " + app.get("port"));
})

/*var employeeLast = req.body.txtLast;
console.log(employeeLast);*/

/*
app.get("/view", function(request, response){
  response.render("view", {
      title: 'Employee Details'
  });
});
*/
/*
app.post("/process", function(request, response) {
  console.log(request.body.txtName);
  response.redirect("/");
});
*/


//end program


