var list:number[]=[1,2,3,4,5];

console.log("For Loop");
for(let i=0; i <list.length; i++){
    console.log(list[i]);
}

//for..of --> values
console.log("For Of Loop");
for(let i of list){
    console.log(i)
}

//for..in --> indexs
console.log("For In Loop");
for(let i in list){
    console.log(i)
}

var list1:string[]=["Sarvesh", "Aditya", "Shivam", "Tejas"];
//for..of --> values
console.log("For Of Loop");
for(let i of list1){
    console.log(i)
}

//for..in --> indexs
console.log("For In Loop");
for(let i in list1){
    console.log(i)
}