"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calPer = calPer;
var cal5marks_1 = require("./cal5marks");
function calPer(mrk, sp) {
    var tm = 250;
    var m = (0, cal5marks_1.cal5Marks)(mrk);
    if (sp == undefined) {
        return (m / tm) * 100;
    }
    return ((m + sp) / tm) * 100;
}
