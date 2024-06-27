import { Fuzzy } from "./Fuzzy.js";
import { FuzzyLogicSystem } from "./FuzzyLogicSystem.js";
import { FuzzyRule } from "./FuzzyRule.js";

// Example usage:
const depression = new Fuzzy(4, 5.5, 7);
const anxiety = new Fuzzy(17, 21, 25);
const tasks = new Fuzzy(3, 5, 7);
const passion = new Fuzzy(4, 5, 7);

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
let form = document.querySelector('#questions');
form?.addEventListener('submit', function (event) {
    event.preventDefault();
    let depressionSection: HTMLElement = document.getElementById("depression") as HTMLElement;
    let depressionQuestions = depressionSection.getElementsByClassName('question');
    let depression_yes = 0; let depression_no = 0;
    for (let i = 0; i < depressionQuestions.length; i++) {
        let radioButton = depressionQuestions[i].querySelector('input[name="choice_depression_' + (i + 1) + '"]:checked') as HTMLInputElement;

        if (radioButton) {
            if (radioButton.value === 'yes') {
                depression_yes++;
            } else if (radioButton.value === 'no') {
                depression_no++;
            }
        } else {
            // Handle case where a question is not answered
            console.log('Question ' + (i + 1) + ' is not answered.');
            // Optionally, you can break the loop or handle this case as needed
        }
    }

    let anxietySection: HTMLElement = document.getElementById("anxiety") as HTMLElement;
    let anxietyQuestions = anxietySection.getElementsByClassName('question');
    let anxiety_score = 0;
    for (let i = 0; i < anxietyQuestions.length; i++) {
        let radioButton = anxietyQuestions[i].querySelector('input[name="choice_anxiety_' + (i + 1) + '"]:checked') as HTMLInputElement;

        if (radioButton) {
            anxiety_score += parseInt(radioButton.value);
        } else {
            // Handle case where a question is not answered
            console.log('Question ' + (i + 1) + ' is not answered.');
            // Optionally, you can break the loop or handle this case as needed
        }
    }

    let taskCount = parseInt((<HTMLInputElement>document.getElementById('task_count')).value);

    let passionSection: HTMLElement = document.getElementById("passion") as HTMLElement;
    let passionQuestions = passionSection.getElementsByClassName('question');
    let passion_yes = 0; let passion_no = 0;
    for (let i = 0; i < passionQuestions.length; i++) {
        let radioButton = passionQuestions[i].querySelector('input[name="choice_passion_' + (i + 1) + '"]:checked') as HTMLInputElement;

        if (radioButton) {
            if (radioButton.value === 'yes') {
                passion_yes++;
            } else if (radioButton.value === 'no') {
                passion_no++;
            }
        } else {
            // Handle case where a question is not answered
            console.log('Question ' + (i + 1) + ' is not answered.');
            // Optionally, you can break the loop or handle this case as needed
        }
    }

    const inputs = [depression_yes, anxiety_score, taskCount, passion_yes];
    const outputRange = Array.from({ length: 101 }, (_, i) => i / 10);
    const result = system.evaluate(inputs, outputRange);

    let resultString = result !== undefined ? result.toString() : '';
    document.getElementById('result')!.innerText = resultString;
    console.log(`Depression score: ${depression_yes}; Anxiety score: ${anxiety_score}; passion score: ${passion_yes}; tasks count: ${taskCount}`)
})

let currentSection = 0;
let sections: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName('section');
for(let i = 1; i<sections.length; i++){
    sections[i].classList.add('hidden-abs');
}
let nextSection = <HTMLButtonElement>document.querySelector('#next-section');
let prevSection = <HTMLButtonElement>document.querySelector('#prev-section');
prevSection.classList.add('hidden-abs');
document.querySelector('#submit-button')?.classList.add('hidden-abs');
nextSection.addEventListener('click', function (event) {
    event.preventDefault();
    if(currentSection == 0){
        prevSection.classList.remove('hidden-abs');
    }
    sections[currentSection++].classList.add('hidden-abs');
    sections[currentSection].classList.remove('hidden-abs');
    if(currentSection == sections.length-1){
        nextSection.classList.add('hidden-abs');
        document.querySelector('#submit-button')?.classList.remove('hidden-abs');
    }
});
prevSection.addEventListener('click', function (event) {
    event.preventDefault();
    if(currentSection == sections.length-1){
        nextSection.classList.remove('hidden-abs');
        document.querySelector('#submit-button')?.classList.add('hidden-abs');
    }
    sections[currentSection--].classList.add('hidden-abs');
    sections[currentSection].classList.remove('hidden-abs');
    if(currentSection == 0){
        prevSection.classList.add('hidden-abs');
    }
});