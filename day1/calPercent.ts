import { cal5Marks } from "./cal5marks";

export function calPercentage(mrk:number[]):number{
    let tm = 250;
    let m = cal5Marks(mrk);
    return (m/tm)*100;
}