#!/usr/bin/env node
"use strict"

var
  getAll= require("../get-all-descriptors"),
  getDescriptor= require("..")


var util= require("util")

function animal(){
	this.breath= function(){
		console.log("<<heavy breathing>>")
	}
}
animal.prototype.sleep= console.log.bind(console, "sleep")
animal.prototype.move= console.log.bind(console, "move")

function person(){
	animal.call(this)
}
util.inherits(person, animal)
person.prototype.move= console.log.bind(console, "walk")
person.prototype.run= console.log.bind(console, "run")

function programmer(){
	person.call(this)
}
util.inherits(programmer, person)
programmer.prototype.code= console.log.bind(console, "code")

var rektide= new programmer()

var
  code= getDescriptor(rektide, "code"),
  move= getDescriptor(rektide, "move")

code.value()
console.log(code)
move.value()
console.log(move)
console.log("-----")

console.log(getAll(rektide))
