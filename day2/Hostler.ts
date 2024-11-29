import { Student } from "./Student";

export class Hostler extends Student{
    private hostelName:string
    private location:string

    constructor(hN:string,l:string){
        super(15,"Deep",98)
        this.hostelName = hN
        this.location = l
    }

    public displayData1(): void {
        super.displayData()
        console.log("Hostel Name = "+this.hostelName)
        console.log("Location    = "+this.location)
    }
}

let h1:Hostler = new Hostler("Seed","Pune")
h1.displayData1();