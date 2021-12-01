'use strict';

/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/



const game={
  team1:'Bayern Munich',
  team2:'Borrussia Dortmund',
  players:[
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    ['Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score:'4:0',
  scored:['Lewandowski','Gnarby','Lewandowski','Hummels'],
  date:'Nov 9th, 2037',
  odds:{
    team1:1.33,
    x:3.25,
    team2:6.5
    ,}
  ,};

// Coding challenge 1
  /*
  //1
  const {players: [players1] } = game;
  console.log(players1)

  const {players: [ , players2] } = game;
  console.log(players2)

  // const [players1 , players2] = game.players

  //2
  const [gk, ...fieldplayers] = players1;
  console.log(gk, fieldplayers );

  //3
  const allplayers = [...players1, ...players2];
  console.log(allplayers);

  //4
  const players1final = [...players1, 'Thiago','Coutinho', 'Perisic']
  console.log(players1final);

  //5
  const {team1, x : draw, team2} = game.odds;
  console.log(team1, draw, team2);

  //6
  const printGoals = function(...namesPlayers)
  {
    console.log(`${namesPlayers.length} were scored`)
  }
  printGoals(...game.scored);

  //7 
  
  game.odds.team1 > game.odds.team2 && console.log(`Team 2 more likely to win`);
  game.odds.team1 < game.odds.team2 && console.log(`Team 1 more likely to win`);
*/

//Coding challenge 2
/*
//1
for (let [index, name] of game.scored.entries()) // array
{
  console.log(`Goal ${Number(index) + 1}: ${name}`);
}

//2
const values = Object.values(game.odds);
console.log(values)

let sum = 0;
for (let value of values)
  sum += value;
console.log(`mean = ${sum / values.length}`);

//3
for (let [team, odd] of Object.entries(game.odds)) // object
{
  const teamName = team === 'x'? 'draw' : `victory of ${game[team]}`;
  console.log(`Odd of ${teamName} ${odd}`);
}

//4
const scorers = {};
for (const player of game.scored)
  scorers[player]? scorers[player]++ : scorers[player] = 1;
console.log(scorers);
*/


//Coding challenge 3

/*
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);
console.log(gameEvents);


//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64)
console.log(gameEvents);

//3
console.log(`An event happened on average every ${90 / gameEvents.size} minutes`)

//4
for (let [key,value] of gameEvents)
{
  console.log(key < 46? `[FIRST HALF] ${key}: ${value}` : `[SECOND HALF] ${key}: ${value}`)
}
*/

//Coding challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector(`textarea`)
const button = document.querySelector(`button`)
button.addEventListener(`click`, function() 
{
  const guess = String(text.value);
  let sentences = guess.split('\n');
  for (let j = 0; j < sentences.length; j++)
  {
    let words = sentences[j].toLowerCase().trim().split('_');
    let words_finals = [];
    for (let i = 0; i < words.length; i++)
    {
      let str = words[i];
      i === 0 ? words_finals.push(str) : words_finals.push(str.replace(str[0], str[0].toUpperCase()));
    }
    let str_final = words_finals.join('').padEnd(20, ' ');
    console.log(`${str_final} ${'✅'.repeat(j + 1)}`)
  }
})




