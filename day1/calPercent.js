"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calPercentage = calPercentage;
var cal5marks_1 = require("./cal5marks");
function calPercentage(mrk) {
    var tm = 250;
    var m = (0, cal5marks_1.cal5Marks)(mrk);
    return (m / tm) * 100;
}
