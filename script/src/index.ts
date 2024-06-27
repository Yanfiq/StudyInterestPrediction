import { Fuzzy } from "./Fuzzy.js";
import { FuzzyLogicSystem } from "./FuzzyLogicSystem.js";
import { FuzzyRule } from "./FuzzyRule.js";

// Example usage:
const depression = new Fuzzy(4, 5.5, 7);
const anxiety = new Fuzzy(17, 21, 25);
const tasks = new Fuzzy(3, 5, 7);
const passion = new Fuzzy(3, 5, 7);

const output = new Fuzzy(0, 5, 10);

// Define rules
const rules = [
    //1
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //2, 3, 4
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //5, 6, 7
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //8
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //9, 10, 11
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //12, 13, 14
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //15
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //16
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMinDegree.bind(output)),
    //17, 18, 19
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
    //20
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMinDegree.bind(passion)], output.getMinDegree.bind(output)),
    //21
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //22
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //24
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //23
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMinDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //26
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMinDegree.bind(output)),
    //27
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //28, 29
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //30
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //31
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //32
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //33
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //34
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
    //35
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
    //36, 37
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //38, 39
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMinDegree.bind(output)),
    //40
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
    //41, 42
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMinDegree.bind(output)),
    //43
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMaxDegree.bind(output)),
    //44
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //45
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMedDegree.bind(passion)], output.getMedDegree.bind(output)),
    //46, 47, 48
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
    //49
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMinDegree.bind(output)),
    //50, 51
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], output.getMedDegree.bind(output)),
];

const system = new FuzzyLogicSystem();
rules.forEach(rule => system.addRule(rule));

// Evaluate system with inputs
const inputs = [3, 17, 3, 6];
const outputRange = Array.from({ length: 101 }, (_, i) => i/10); // [0, 1, 2, ..., 10]
const result = system.evaluate(inputs, outputRange);

console.log(`Fuzzy logic output: ${result}`);