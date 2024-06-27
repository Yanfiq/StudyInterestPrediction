import { FuzzyRule } from "./FuzzyRule.js";

export class FuzzyLogicSystem {
    private rules: FuzzyRule[];

    constructor() {
        this.rules = [];
    }

    addRule(rule: FuzzyRule) {
        this.rules.push(rule);
    }

    evaluate(inputs: number[], outputRange: number[]): number {
        let numerator = 0;
        let denominator = 0;

        for (let output of outputRange) {
            let degree = Math.max(...this.rules.map(rule => {
                return Math.min(rule.evaluate(inputs), rule.getConsequentDegree(output));
            }));

            numerator += degree * output;
            denominator += degree;
        }

        return denominator === 0 ? 0 : numerator / denominator;
    }
}