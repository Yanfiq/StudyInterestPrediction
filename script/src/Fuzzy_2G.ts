export class Fuzzy_2G{
    private min: number;
    private med: number;
    private max: number;

    constructor(min: number, med: number, max: number){
        this.min = min;
        this.med = med;
        this.max = max;
    }

    getMinDegree(x: number): number{
        if(x >= this.max){
            return 0;
        }else if(x > this.min && x < this.max){
            return ((this.max-x)/(this.max-this.min));
        }else{
            return 1;
        }
    }

    getMedDegree(x: number): number{
        if(x >= this.max || x <= this.min){
            return 0;
        }else if(x > this.min && x < this.max){
            return ((x-this.min)/(this.med-this.min));
        }else{
            return ((this.max-x)/(this.max-this.med));
        }
    }

    getMaxDegree(x: number): number{
        if(x <= this.med){
            return 0;
        }else if(x > this.min && x < this.max){
            return ((x-this.med)/(this.max-this.med));
        }else{
            return 1;
        }
    }
}