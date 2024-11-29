import { cal5Marks } from "./cal5marks"
import { grades } from "./calG";
import { calPercentage } from "./calPercent"

let ms:number[]=[50,29,38,41,46]

function display(n:string,r:number, mar:number[]):void{
    let m:number = cal5Marks(mar);
    let p:number = calPercentage(mar);
    let g:string = grades(mar);
    console.log("Name = "+n)
    console.log("Roll No = "+r)
    console.log("Your Marks = "+m)
    console.log("Total Marks = 250")
    console.log("Percentage = "+p);
}

display("Deep",12,ms)