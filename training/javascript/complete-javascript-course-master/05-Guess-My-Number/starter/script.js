'use strict';

// Example of DOM manipulation
/* Video 72
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = `Correct Number`
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13
document.querySelector(`.score`).textContent = 10

document.querySelector(`.guess`).value = 22;
console.log(document.querySelector(`.guess`).value);
*/

/* Video 73 74*/

let score = 20;
let secretNumber = Math.trunc(Math.random()*20) +1
let highscore = 0;
//document.querySelector(`.number`).textContent = secretNumber

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = Number(document.querySelector(`.guess`).value);
    if (score > 0)
    {
        if(!guess) 
        {
            document.querySelector('.message').textContent = `No number!`;
        } else if (guess === secretNumber)
        {
            document.querySelector('.message').textContent = `Correct Number, congrats!`;
            //How to handle styles changes ---> always manipulates strings
            document.querySelector(`body`).style.backgroundColor = `#60b347`;
            document.querySelector(`.number`).style.width = `30rem`;   
            document.querySelector(`.number`).textContent = secretNumber
            if (highscore < score)
            {
                highscore = score;
                document.querySelector(`.highscore`).textContent = highscore;
            }
        }
        else
        {
            if (score > 1)
            {
                document.querySelector('.message').textContent = guess > secretNumber? `Number too high!` : `Number too low`;  
            }
            else
            {
                document.querySelector('.message').textContent = `You loose.. looser`;
            }
            score--;
        }
    }   
    document.querySelector(`.score`).textContent = score;
});


document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 20;
    document.querySelector(`.score`).textContent = score;
    secretNumber = Math.trunc(Math.random()*20) +1    
    document.querySelector(`.number`).textContent = '?'
    document.querySelector(`body`).style.backgroundColor = `#222`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector(`.guess`).value = ``;

});