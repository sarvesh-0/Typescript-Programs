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
exports.BatsMan = void 0;
var Player_1 = require("./Player");
var BatsMan = /** @class */ (function (_super) {
    __extends(BatsMan, _super);
    function BatsMan(n, jn, co, r, c, a) {
        var _this = _super.call(this, n, jn, co) || this;
        _this.runs = r;
        _this.centuries = c;
        _this.avg = a;
        return _this;
    }
    BatsMan.prototype.dislplayBatsMan = function () {
        _super.prototype.dislplayPlayer.call(this);
        console.log("Total Runs : " + this.runs);
        console.log("Centuries  : " + this.centuries);
        console.log("Average    : " + this.avg);
    };
    return BatsMan;
}(Player_1.Player));
exports.BatsMan = BatsMan;
