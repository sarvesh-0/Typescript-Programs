"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Batsman_1 = require("./Batsman");
var Bowler_1 = require("./Bowler");
var Player_1 = require("./Player");
var p1 = new Player_1.Player("YB Jayswal", 64, "India");
p1.dislplayPlayer();
console.log();
var p2 = new Batsman_1.BatsMan("Rohit Sharma", 45, "India", 10000, 35, 78);
p2.dislplayBatsMan();
console.log();
var p3 = new Bowler_1.Bowler("Bhumra", 25, "India", 159, 9);
p3.displayBowler();
console.log();
