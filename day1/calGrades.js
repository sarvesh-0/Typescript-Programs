var marks = 90;
var grade;
if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 80 && marks <= 90) {
    grade = "B";
}
else if (marks >= 60 && marks <= 80) {
    grade = "C";
}
else if (marks >= 40 && marks <= 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log("Grades = " + grade);
