'use strict';

//Selecting elements
//2 ways to get your element by ID
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.getElementById(`score--1`);
const current0El = document.getElementById(`current--0`);
const current1El = document.getElementById(`current--1`);
const diceEl = document.querySelector(`.dice`)
const btnNew = document.querySelector(`.btn--new`)
const btnRoll = document.querySelector(`.btn--roll`)
const btnHold = document.querySelector(`.btn--hold`)

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const resetGame = function()
{
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add(`hidden`);
    player0El.classList.add(`player--active`);
    player0El.classList.remove(`player--winner`);
    player1El.classList.remove(`player--active`);
    player1El.classList.remove(`player--winner`);
    scores[0] = 0;
    scores[1] = 0;
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}

const changePlayer = function()
{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0? 1: 0;
    currentScore = 0;
    player0El.classList.toggle(`player--active`);
    player1El.classList.toggle(`player--active`); 
}

const rollingDice = function()
{
    if (playing)
    {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceEl.classList.remove(`hidden`);
        diceEl.src = `dice-${dice}.png`;

        if (dice !== 1)
        {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else
            changePlayer();
    }
}

const holdScore = function()
{
    if (playing)
    {
        scores[activePlayer] += currentScore;
        activePlayer === 0? score0El.textContent =  scores[0] : score1El.textContent = scores[1];
        if (scores[activePlayer] >= 20)
        {
            document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);
            document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
            playing = false;
        }
        else
            changePlayer();
    }
}

resetGame();
btnRoll.addEventListener(`click`, rollingDice)
btnHold.addEventListener(`click`, holdScore)
btnNew.addEventListener(`click`, resetGame)