"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.add1 = add1;
function displayData() {
    console.log("Hello World");
}
displayData();
function displayData1() {
    return "function call";
}
var str = displayData1();
console.log(str);
function add(num1, num2) {
    var ans = num1 + num2;
    return ans;
}
function add1(num1, num2, num3) {
    var ans1;
    if (num3 != undefined) {
        ans1 = num1 + num2 + num3;
        return ans1;
    }
    else {
        return num1 + num2;
    }
}
var res = add(10, 10);
console.log(res);
