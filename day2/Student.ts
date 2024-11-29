export class Student{
    //public, private, protected
    private rollno:number
    private studName:string
    private marks:number

    /* constructor(){
        this.rollno=10
        this.studName="ABC"
        this.marks=99
    }
    */

    constructor(rollno:number,studname:string,marks:number){
        this.rollno=rollno
        this.studName=studname
        this.marks=marks
    }

    public displayData():void{
        console.log("Roll No : "+this.rollno)
        console.log("Name    : "+this.studName)
        console.log("Marks   : "+this.marks)
    }
}