/*
============================================
; Title:  lintel-exercise-1.3.js
; Author: Jeff Lintel
; Date:   18 February 2020
; Description: Demonstrate class workaround
; using object literals and new keyword
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 1.3"));

//function to mimic cell phone class
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
  this.getPrice = function() {
    return this.price;
  };
  this.getModel = function() {
    return this.model;
  };
  this.getDetails = function() {
    return (`
    -- DISPLAYING CELL PHONE DETAILS --
    Manufacturer: ${this.manufacturer}
    Model: ${this.getModel()}
    Color: ${this.color}
    Price: $${this.getPrice()}`
   );
  };
}

//create new cell phone object with 4 parameters
var s20Ultra5G = new CellPhone('Samsung', 'S20 Ultra 5G', 'Cosmic Black', 799.99);

//output
console.log(s20Ultra5G.getDetails());
