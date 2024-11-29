import { cal5Marks } from "./cal5marks";

export function calPer(mrk:number[],sp?:number) {
    var tm =250;
    let m = cal5Marks(mrk)
    if(sp==undefined){
        return (m / tm) * 100;
    }
    return ((m+sp) / tm) * 100;
    
}