import { it } from "node:test";

function generateRnd(count: number, start: number, end: number): number[]{
    const ns: number[] = [];
    for (let i = 0; i < count; i++){
        ns.push(Math.floor(Math.random()*end)+ start)
    }
    return ns;
};

const generateRnd2 = (count: number, start: number, end: number): number[] => (
    Array.from({length: count}, item => Math.floor(Math.random()*end)+ start)
);

const array = generateRnd2(30,1,5);
console.log(array);

function getStatistic(a: Array<number>): Record<number, number>{
    const statistic : Record<number, number> = {};

for (const key of array){
   /*  if(key in statistic){
        statistic[key]! += 1
    } else{
        statistic[key] = 1
    } */
   statistic[key] = (statistic[key] ?? 0) + 1;
}
    return statistic;
}

const statistic = getStatistic(array)
for(let key in statistic)
    console.log(`${key}: ${statistic[key]} db`);

function getArraySum(a: Array<number>): number{
    /* let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum += a[i]!;
    }
    return sum; */
    return a.reduce((sum, item) => sum + item, 0)
}

const sum = getArraySum(array);
console.log(sum);

