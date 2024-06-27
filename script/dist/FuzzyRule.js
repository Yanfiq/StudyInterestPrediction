export class FuzzyRule {
    constructor(antecedents, consequent) {
        this.antecedents = antecedents;
        this.consequent = consequent;
    }
    evaluate(inputs) {
        let minDegree = Math.min(...this.antecedents.map((f, i) => f(inputs[i])));
        return minDegree;
    }
    getConsequentDegree(output) {
        return this.consequent(output);
    }
}
