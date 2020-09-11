// require
var express = require('express');
var http = require ('http');
var logger = require ('morgan');
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://PM:BU6637@buwebdev-cluster-1.oqsoi.mongodb.net/test?authSource=admin&replicaSet=atlas-hy8yuf-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";

mongoose.connect (mongoDB, { useMongoClient: true });

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error: "));

db.once ("open", function() {console.log("Application connected to mLab MongoDB instance");});

