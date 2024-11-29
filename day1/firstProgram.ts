//variable declaration
//var and let are global variables 
var studname:string = "ABC"; //globaly used and can be redeclared
let marks:number = 6;  // locally used cant be redeclared
console.log("Student name = "+studname);

var test:any=5;
test = "ABC";
test = 7.7;

//Date class
var joindate:Date = new Date(1999,5,23); //yyyy,mm,dd
console.log("Join Date = "+joindate);