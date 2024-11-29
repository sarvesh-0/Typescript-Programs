"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hostler = void 0;
var Student_1 = require("./Student");
var Hostler = /** @class */ (function (_super) {
    __extends(Hostler, _super);
    function Hostler(hN, l) {
        var _this = _super.call(this, 15, "Deep", 98) || this;
        _this.hostelName = hN;
        _this.location = l;
        return _this;
    }
    Hostler.prototype.displayData1 = function () {
        _super.prototype.displayData.call(this);
        console.log("Hostel Name = " + this.hostelName);
        console.log("Location    = " + this.location);
    };
    return Hostler;
}(Student_1.Student));
exports.Hostler = Hostler;
var h1 = new Hostler("Seed", "Pune");
h1.displayData1();
