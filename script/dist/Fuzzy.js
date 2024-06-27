export class Fuzzy {
    constructor(min, med, max) {
        this.min = min;
        this.med = med;
        this.max = max;
    }
    getMinDegree(x) {
        if (x >= this.med) {
            return 0;
        }
        else if (x > this.min && x < this.med) {
            return ((this.med - x) / (this.med - this.min));
        }
        else {
            return 1;
        }
    }
    getMedDegree(x) {
        if (x >= this.max || x <= this.min) {
            return 0;
        }
        else if (x > this.min && x < this.med) {
            return ((x - this.min) / (this.med - this.min));
        }
        else {
            return ((this.max - x) / (this.max - this.med));
        }
    }
    getMaxDegree(x) {
        if (x <= this.med) {
            return 0;
        }
        else if (x > this.med && x < this.max) {
            return ((x - this.med) / (this.max - this.med));
        }
        else {
            return 1;
        }
    }
}
