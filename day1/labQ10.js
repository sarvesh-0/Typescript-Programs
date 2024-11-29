var arr = ["Cricket", "Badminton", "Swimming", "Tennis", "Football"];
//question 1
function search(str) {
    for (var s in arr) {
        if (arr[s] == str) {
            return s;
        }
    }
    return -1;
}
console.log("Found at index " + search("Tennis"));
console.log();
//question 2
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var s = arr_1[_i];
    console.log(s);
}
console.log();
//question 3
function addElement(e) {
    arr.push(e);
}
addElement("Golf");
function modifyEle(i, e) {
    arr[i] = e;
}
modifyEle(5, "Chess");
function removeEle() {
    arr.pop();
}
removeEle;
console.log();
for (var _a = 0, arr_2 = arr; _a < arr_2.length; _a++) {
    var s = arr_2[_a];
    console.log(s);
}
console.log();
function dis(lis) {
    for (var _i = 0, lis_1 = lis; _i < lis_1.length; _i++) {
        var s = lis_1[_i];
        console.log(s);
    }
}
dis(arr);
