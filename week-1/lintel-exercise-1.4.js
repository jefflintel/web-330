/*
============================================
; Title:  lintel-exercise-1.4.js
; Author: Jeff Lintel
; Date:   18 February 2020
; Description: Demonstrate duck typing and
; "interfaces"
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 1.4"));

//create function constructor Car class with one parameter

function Car(model) {
  this.model = model;
};

//add prototype start function
Car.prototype.start = function() {
  console.log(`${this.constructor.name} has been added to the racetrack!`);
}

//create function constructor Truck class with two parameters
function Truck(model, year) {
  this.model = model;
  this.year = year;
};

//add prototype start function
Truck.prototype.start = function() {
  console.log(`${this.constructor.name} has been added to the racetrack!`);
};

//create function constructor Jeep class with three parameters
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
};

//add prototype start function
Jeep.prototype.start = function() {
  console.log(`${this.constructor.name} has been added to the racetrack!`);
};

//create vehicles
var gladiator = new Jeep('Gladiator', 2020, 'Green');
var f250 = new Truck('F-250', 2016);
var camaro = new Car('Camaro');

//empty racetrack array
var racetrack = [];

//driveIt function with one parameter
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
};

//add vehicles to racetrack
driveIt(gladiator);
driveIt(f250);
driveIt(camaro);

//display vehicles on the racetrack by iterating over array
console.log(`
-- The following vehicles have been added to the racetrack --`);
for(i = 0; i < racetrack.length; i++) {
  console.log(`${racetrack[i].constructor.name}: ${racetrack[i].model}`);
};
