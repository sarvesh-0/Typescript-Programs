"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grades = grades;
var calPercent_1 = require("./calPercent");
function grades(mrk) {
    var marks = (0, calPercent_1.calPercentage)(mrk);
    console.log("Percentage = " + marks);
    var grade;
    if (marks >= 90 && marks <= 100) {
        grade = "A";
    }
    else if (marks >= 80 && marks <= 90) {
        grade = "B";
    }
    else if (marks >= 60 && marks <= 80) {
        grade = "C";
    }
    else if (marks >= 40 && marks <= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    console.log();
    return grade;
}
