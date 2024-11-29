"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    /* constructor(){
        this.rollno=10
        this.studName="ABC"
        this.marks=99
    }
    */
    function Student(rollno, studname, marks) {
        this.rollno = rollno;
        this.studName = studname;
        this.marks = marks;
    }
    Student.prototype.displayData = function () {
        console.log("Roll No : " + this.rollno);
        console.log("Name    : " + this.studName);
        console.log("Marks   : " + this.marks);
    };
    return Student;
}());
exports.Student = Student;
