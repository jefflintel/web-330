/*
============================================
; Title:  lintel-exercise-2.2.js
; Author: Jeff Lintel
; Date:   24 February 2020
; Description: Demonstrate JavaScript prototypes
;===========================================
*/

//header
const header = require("../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 2.2"));

var person = {
  getAge: function() {
    console.log(`The person's age is ${this.age}`);
  }
};

var friend = Object.create(person, {
  type: {
    value: "person",

    enumerable: true
  },

  fullName: {
    value: "Randy Randallman"
  },

  age: {
    value: 27
  }
});
console.log(`The person's name is ${friend.fullName}`);

friend.getAge();
