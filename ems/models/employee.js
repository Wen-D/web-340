
/*
============================================
; Title:  Mongoose Schema and Model Example
; Author: Richard Krasso
; Modified by: Wendy Leon
; Date:   21 Sept 2020
; Description: Mongoose Schema and Model Example
;===========================================
*/

var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// define the employeeSchema

var employeeSchema = new Schema({

    name: String,
    lastName : String

});

// define the employee model

var Employee = mongoose.model("Employee", employeeSchema);

// expose the employee to calling files

module.exports = Employee;



