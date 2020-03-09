/*
============================================
; Title:  lintel-exercise-3.2.js
; Author: Professor Krasso
; Date:   2 March 2020
; Description: Demonstrate the factory
; design pattern
;===========================================
*/

//header
const header = require("../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 3.2"));

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7
}

//add Oracle constructor
function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "guest";
  this.server =  properties.server || "localhost:3014";
  this.version = properties.version || 18;
}

//add Informix constructor
function Informix(properties) {
  this.username = properties.username || "administrator";
  this.password = properties.password || "Passw0rd";
  this.server = properties.server || "localhost:3032";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;

DatabaseFactory.prototype.createDatabase = function(properties) {
  //switch statement to replace if/else
  switch(properties.databaseType) {
    case "Postgres":
      this.databaseClass = Postgres;
      break;
    case "MySql":
      this.databaseClass = MySql;
      break;
    case "Oracle":
      this.databaseClass = Oracle;
      break;
    case "Informix":
      this.databaseClass = Informix;
      break;
    default:
      this.databaseClass = MySql;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: 'MySql',
  username: "default",
  password: "password"
});

//create oracleFactory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: 'Oracle',
  username: "guest",
  password: "p@ssw0rd"
});

//create informixFactory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: 'Informix',
  username: "default",
  password: "itsasecret"
});

console.log(postgres);
console.log(mySql);
console.log(oracle);
console.log(informix);


// end program
