var i = 1;
while (i <= 5) {
    var j = 5;
    var res = "";
    while (j >= i) {
        res = res + j + " ";
        j = j - 1;
    }
    console.log(res);
    i = i + 1;
}
