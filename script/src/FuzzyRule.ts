export class FuzzyRule {
    private antecedents: Array<(x: number) => number>;
    private consequent: (x: number) => number;

    constructor(antecedents: Array<(x: number) => number>, consequent: (x: number) => number) {
        this.antecedents = antecedents;
        this.consequent = consequent;
    }

    evaluate(inputs: number[]): number {
        let minDegree = Math.min(...this.antecedents.map((f, i) => f(inputs[i])));
        return minDegree;
    }

    getConsequentDegree(output: number): number {
        return this.consequent(output);
    }
}