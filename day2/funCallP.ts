import { BatsMan } from "./Batsman";
import { Bowler } from "./Bowler";
import { Player } from "./Player";

let p1:Player = new Player("YB Jayswal",64,"India")
p1.dislplayPlayer()
console.log()

let p2:BatsMan = new BatsMan("Rohit Sharma",45,"India",10000,35,78)
p2.dislplayBatsMan()
console.log()

let p3:Bowler = new Bowler("Bhumra",25,"India",159,9)
p3.displayBowler()
console.log()