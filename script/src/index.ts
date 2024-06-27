import { Fuzzy } from "./Fuzzy.js";
import { FuzzyLogicSystem } from "./FuzzyLogicSystem.js";
import { FuzzyRule } from "./FuzzyRule.js";

const depression = new Fuzzy(4, 5.5, 7);
const anxiety = new Fuzzy(17, 21, 25);
const tasks = new Fuzzy(3, 5, 7);
const passion = new Fuzzy(3, 5, 7);
const studyInterest = new Fuzzy(3, 5, 7);

const rules = [
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMinDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMinDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMinDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMedDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMinDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMedDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMaxDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMedDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMaxDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMedDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMinDegree.bind(studyInterest)),
    new FuzzyRule([depression.getMaxDegree.bind(depression), anxiety.getMaxDegree.bind(anxiety), tasks.getMinDegree.bind(tasks), passion.getMaxDegree.bind(passion)], studyInterest.getMedDegree.bind(studyInterest)),
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
        if (radioButton.value === 'yes') {
            depression_yes++;
        } else if (radioButton.value === 'no') {
            depression_no++;
        }
    }

    let anxietySection: HTMLElement = document.getElementById("anxiety") as HTMLElement;
    let anxietyQuestions = anxietySection.getElementsByClassName('question');
    let anxiety_score = 0;
    for (let i = 0; i < anxietyQuestions.length; i++) {
        let radioButton = anxietyQuestions[i].querySelector('input[name="choice_anxiety_' + (i + 1) + '"]:checked') as HTMLInputElement;
        anxiety_score += parseInt(radioButton.value);
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
        }
    }

    const inputs = [depression_yes, anxiety_score, taskCount, passion_yes];
    const outputRange = Array.from({ length: 101 }, (_, i) => i / 10);
    const result = system.evaluate(inputs, outputRange);

    let result_list = document.createElement('ul');

    let depression_element = document.createElement('li');
    depression_element.innerText = `Depression = ${((depression_yes/10)*100).toString()} %`;
    
    let anxiety_element = document.createElement('li');
    anxiety_element.innerText = `Anxiety = ${((anxiety_score/56)*100).toString()}%`;
    
    let passion_element = document.createElement('li');
    passion_element.innerText = `Passion Score = ${((passion_yes/10)*100).toString()}%`;
    
    let studyInterest_element = document.createElement('li');
    studyInterest_element.innerText = `Study Interest Score = ${((result/10)*100).toString()}%`;
    
    result_list.appendChild(depression_element);
    result_list.appendChild(anxiety_element);
    result_list.appendChild(passion_element);
    result_list.appendChild(studyInterest_element);    

    (<HTMLElement>document.getElementById('result')).innerHTML = '';
    (<HTMLElement>document.getElementById('result')).appendChild(result_list);
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