import { calPercentage } from "./calPercent";

export function grades(mrk:number[]):string{
var marks:number = calPercentage(mrk);
console.log("Percentage = "+marks);
var grade:string;

if(marks>=90 && marks<=100){
    grade = "A"
}
else if(marks>=80 && marks<=90){
    grade = "B"
}
else if(marks>=60 && marks<=80){
    grade = "C"
}
else if(marks>=40 && marks<=60){
    grade = "D"
}
else{
    grade = "F"
}
console.log();
return grade;
}