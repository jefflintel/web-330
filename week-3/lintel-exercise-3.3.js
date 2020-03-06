/*
============================================
; Title:  lintel-exercise-3.3.js
; Author: Professor Krasso
; Date:   2 March 2020
; Description: Demonstrate the singleton
; design pattern
;===========================================
*/

//header
const header = require("../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 3.3"));

var DatabaseSingleton = (function() {
  var instance;
  function createInstance() {
  var postgresDatabase = new Object("Database instance initialized!");
  return postgresDatabase;
  }
  return {
  getInstance: function() {
  if (!instance) {
  instance = createInstance();
  }
  return instance;
  }
  }
 })();

 function databaseSingletonTest() {
   var postgresDatabase = DatabaseSingleton.getInstance();
   var mySqlDatabase = DatabaseSingleton.getInstance();
   console.log(`Same database instance? ${postgresDatabase === mySqlDatabase}`);
 }

 databaseSingletonTest();
