export class Player{
    private playerName:string
    private jerseyNo:number
    private country:string

    constructor(pN:string,jN:number,c:string){
        this.playerName=pN
        this.jerseyNo=jN
        this.country=c
    }

    dislplayPlayer(){
        console.log("Player Name   : "+this.playerName)
        console.log("Jersey Number : "+this.jerseyNo)
        console.log("Country       : "+this.country)
    }
}