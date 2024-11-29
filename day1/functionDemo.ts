function displayData():void{
    console.log("Hello World");
}

displayData();

function displayData1():string{
    return "function call";
}

let str:string = displayData1();
console.log(str);

export function add(num1:number, num2:number):number{
    let ans = num1+num2;
    return ans;
}

export function add1(num1:number, num2:number,num3?:number):number{
    let ans1:number;
    if(num3!=undefined){
        ans1 = num1+num2+num3; 
        return ans1;
    }
    else{
        return num1+num2;
    }
}

let res:number = add(10,10);

console.log(res);