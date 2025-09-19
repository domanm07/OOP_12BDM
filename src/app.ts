class NumberHandler{

    private _start: number;
    private _end : number;
    private _count : number;
    private _numbers: number[];
    private _statistic: Record<number, number>;

    constructor(start: number, end: number, count: number){
        this._start = start;
        this._end = end;
        this._count = count;
        this._numbers = this.generateNumbers()
        this._statistic = this.getStatistic();
    }
    
    private generateNumbers(): number[]{
        const ns: number[] = [];
        for (let i = 0; i < this._count; i++){
            ns.push(Math.floor(Math.random()*this._end)+ this._start)
        }
        return ns;
    };

    generateRnd2 = (): number[] => (
        Array.from({length: this._count}, item => Math.floor(Math.random()*this._end)+ this._start)
    );

    /* const array = generateRnd2(30,1,5);
    console.log(array); */

    getStatistic(): Record<number, number>{
        const statistic : Record<number, number> = {};

    for (const key of this._numbers){
    /*  if(key in statistic){
            statistic[key]! += 1
        } else{
            statistic[key] = 1
        } */
    statistic[key] = (statistic[key] ?? 0) + 1;
    }
        return statistic;
    }

    print = () => {
        for(let key in this._statistic)
        console.log(`${key}: ${this._statistic[key]} db`);
    }

    /* const statistic = getStatistic(array)
    for(let key in statistic)
        console.log(`${key}: ${statistic[key]} db`); */

    getSum(): number{
        /* let sum = 0;
        for(let i = 0; i < a.length; i++){
            sum += a[i]!;
        }
        return sum; */
        return this._numbers.reduce((sum, item) => sum + item, 0)
    }

    getFilteredNums(attr: number): number[]{
        return this._numbers.filter(item => item % attr === 0);
    };

    getOrderedNum(value: number): number {
        return this._numbers.findIndex(item => item === value);
    };

    getOrderedNum2(value: number): number{
        let i = 0;
        while(i < this._numbers.length && this._numbers[i] !== value)
            i++;
        return i + 1;
    }


}


