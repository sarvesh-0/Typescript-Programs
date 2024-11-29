"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(pN, jN, c) {
        this.playerName = pN;
        this.jerseyNo = jN;
        this.country = c;
    }
    Player.prototype.dislplayPlayer = function () {
        console.log("Player Name   : " + this.playerName);
        console.log("Jersey Number : " + this.jerseyNo);
        console.log("Country       : " + this.country);
    };
    return Player;
}());
exports.Player = Player;
