"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cal5Marks = cal5Marks;
function cal5Marks(mrk) {
    var sum = 0;
    for (var i in mrk) {
        sum = sum + mrk[i];
    }
    return sum;
}
