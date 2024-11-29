var list = [1, 2, 3, 4, 5];
console.log("For Loop");
for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
}
//for..of --> values
console.log("For Of Loop");
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var i = list_1[_i];
    console.log(i);
}
//for..in --> indexs
console.log("For In Loop");
for (var i in list) {
    console.log(i);
}
var list1 = ["Sarvesh", "Aditya", "Shivam", "Tejas"];
//for..of --> values
console.log("For Of Loop");
for (var _a = 0, list1_1 = list1; _a < list1_1.length; _a++) {
    var i = list1_1[_a];
    console.log(i);
}
//for..in --> indexs
console.log("For In Loop");
for (var i in list1) {
    console.log(i);
}
