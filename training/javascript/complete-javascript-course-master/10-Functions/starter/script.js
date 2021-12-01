'use strict';

//Coding challenge 1 
/*
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    registerNewAnser() {
        const answer =  Number(prompt(`${this.question}\n${this.options.join('\n')}`));
        answer && answer < this.answers.length && this.answers[answer]++;            
        this.displayResult()
        this.displayResult('string')
    },
    displayResult(type ='array') {
        if (type === 'array')
            console.log(this.answers);
        else if (type == 'string')
            console.log(`Results are ${this.answers.join(', ')}`);
    }
};

const button = document.querySelector(`.poll`);
button.addEventListener(`click`, poll.registerNewAnser.bind(poll));
poll.displayResult.call({answers : [5, 2, 3]});
poll.displayResult.call({answers : [5, 2, 3]}, 'string');
poll.displayResult.call({answers : [1, 5, 9, 5, 2, 3]});
poll.displayResult.call({answers : [1, 5, 9, 5, 2, 3]}, 'string');
*/

//Coding challenge 2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function(){
        header.style.color = 'blue';
    })
})();