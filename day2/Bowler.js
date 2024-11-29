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
exports.Bowler = void 0;
var Player_1 = require("./Player");
var Bowler = /** @class */ (function (_super) {
    __extends(Bowler, _super);
    function Bowler(n, jn, co, w, fw) {
        var _this = _super.call(this, n, jn, co) || this;
        _this.wickets = w;
        _this.fiveWickets = fw;
        return _this;
    }
    Bowler.prototype.displayBowler = function () {
        _super.prototype.dislplayPlayer.call(this);
        console.log("Total Wickets : " + this.wickets);
        console.log("Five Wicket Hawl  : " + this.fiveWickets);
    };
    return Bowler;
}(Player_1.Player));
exports.Bowler = Bowler;
