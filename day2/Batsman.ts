import { Player } from "./Player";

export class BatsMan extends Player{
    private runs:number
    private centuries:number
    private avg:number

    constructor(n:string,jn:number,co:string,r:number,c:number,a:number){
        super(n,jn,co)
        this.runs = r
        this.centuries = c
        this.avg = a
    }

    dislplayBatsMan(): void {
        super.dislplayPlayer()
        console.log("Total Runs : "+this.runs)
        console.log("Centuries  : "+this.centuries)
        console.log("Average    : "+this.avg)
    }
}