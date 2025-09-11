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

console.log(generateRnd2(10,1,5));
