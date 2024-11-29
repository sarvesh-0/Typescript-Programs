var arr:string[] = ["Cricket","Badminton","Swimming","Tennis","Football"]

//question 1
function search(str:string):any{
    for (let s in arr) {
        if(arr[s]==str){
            return s
        }
    }
    return -1
}

console.log("Found at index "+search("Tennis"));

console.log();
//question 2
for (let s of arr) {
    console.log(s);
}

console.log();
//question 3
function addElement(e:string):void{
    arr.push(e)
}

addElement("Golf");

function modifyEle(i:number,e:string):void{
    arr[i] = e;
}

modifyEle(5,"Chess");

function removeEle():void{
    arr.pop()
}
removeEle

console.log();
for (let s of arr) {
    console.log(s);
}

console.log();
// to accept array as parameter and print the array
function dis(lis:string[]):void{
    for (let s of lis) {
        console.log(s);
    }
}

dis(arr);