export function cal5Marks(mrk:number[]):number{
    let sum = 0
    for(let i in mrk){
        sum = sum + mrk[i]
    }
    return sum;
}

