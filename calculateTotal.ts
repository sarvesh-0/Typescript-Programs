function calculateTotal(amt:number,qty:number,dis?:number):number{
    if(dis==undefined){
        return amt*qty
    }
    else{
        return (amt*qty)-dis;
    }
}

console.log(calculateTotal(20,2));
console.log(calculateTotal(20,2,4));
