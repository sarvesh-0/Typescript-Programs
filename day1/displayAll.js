"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cal5marks_1 = require("./cal5marks");
var calG_1 = require("./calG");
var calPercent_1 = require("./calPercent");
var ms = [50, 29, 38, 41, 46];
function display(n, r, mar) {
    var m = (0, cal5marks_1.cal5Marks)(mar);
    var p = (0, calPercent_1.calPercentage)(mar);
    var g = (0, calG_1.grades)(mar);
    console.log("Name = " + n);
    console.log("Roll No = " + r);
    console.log("Your Marks = " + m);
    console.log("Total Marks = 250");
    console.log("Percentage = " + p);
}
display("Deep", 12, ms);
