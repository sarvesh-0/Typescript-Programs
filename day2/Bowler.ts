import { Player } from "./Player"

export class Bowler extends Player{
    private wickets:number
    private fiveWickets:number

    constructor(n:string,jn:number,co:string,w:number,fw:number){
        super(n,jn,co)
        this.wickets = w
        this.fiveWickets = fw
    }

    displayBowler():void{
        super.dislplayPlayer()
        console.log("Total Wickets : "+this.wickets)
        console.log("Five Wicket Hawl  : "+this.fiveWickets)
    }
}