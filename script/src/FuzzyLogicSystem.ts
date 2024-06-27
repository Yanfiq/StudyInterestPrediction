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
        const deltaX = outputRange[1] - outputRange[0];

        for (let i = 0; i < outputRange.length - 1; i++) {
            let x1 = outputRange[i];
            let x2 = outputRange[i + 1];
            let y1 = this.getMaxDegree(inputs, x1);
            let y2 = this.getMaxDegree(inputs, x2);

            numerator += (y1 * x1 + y2 * x2) * deltaX / 2;
            denominator += (y1 + y2) * deltaX / 2;
        }

        return denominator === 0 ? 0 : numerator / denominator;
    }

    private getMaxDegree(inputs: number[], output: number): number {
        let maxDegree = 0;

        for (let rule of this.rules) {
            let antecedentDegree = rule.evaluate(inputs);
            let consequentDegree = rule.getConsequentDegree(output);
            let ruleDegree = Math.min(antecedentDegree, consequentDegree);

            if (ruleDegree > maxDegree) {
                maxDegree = ruleDegree;
            }
        }

        return maxDegree;
    }
}