var i:number = 1

while(i<=5){
    var j:number = 5;
    var res:string = "";
    while(j>=i){
        res=res+j+" ";
        j=j-1;
    }
    console.log(res);
    i=i+1;
}