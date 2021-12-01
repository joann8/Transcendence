'use strict';

//Coding challenge 1

/*
const checkDogs = function(arr1, arr2)
{
    let newarr = arr1.slice(1, -2);
    let total = newarr.concat(arr2);
    total.forEach(function(age, i, arr)
    {
        if (age >= 3)
            console.log(`Dog number ${i+1} is an adult, and is ${age} years old`);
        else
            console.log(`Dog number ${i+1} is a puppy, and is ${age} years old`);
    })
}

const julie1 = [3, 5, 2, 12, 7];
const kate1 = [4, 1, 15, 8, 3];
checkDogs(julie1, kate1);
console.log('****************');
const julie2 = [9, 16, 6, 8, 3];
const kate2 = [10, 5, 6, 1, 4];
checkDogs(julie2, kate2);
*/

//Coding challenge 2

/*
const calcAverageHumanAge= function(arr)
{
    let newarray = arr.map(age => age > 2 ? 16 + age * 4 : 2 * age).filter(age => age >= 18);
    console.log(newarray);
    console.log(newarray.reduce((acc, age) => acc + age,0)/newarray.length);
}


const data1 = [5, 2, 4, 1, 15, 8, 3]
calcAverageHumanAge(data1);
console.log('****************');
const data2 = [16, 6, 10, 5, 6, 1, 4];
calcAverageHumanAge(data2);
*/

//Coding challenge 3
/*
const calcAverageHumanAge = arr => 
arr
.map(age => age > 2 ? 16 + age * 4 : 2 * age)
.filter(age => age >= 18)
.reduce((acc, age, i, tmparr) => acc + age / tmparr.length, 0);

const data1 = [5, 2, 4, 1, 15, 8, 3]
console.log(calcAverageHumanAge(data1));
console.log('****************');
const data2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(data2));
*/

//Coding challenge 4

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    ];

dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

const checkFood = function(dog)
{
    if (dog.curFood > dog.recommendedFood * 1.1)
        return (1); 
    else if (dog.curFood < dog.recommendedFood * 0.9)
        return (-1);
    else
        return (0);   
}

dogs.forEach(function(dog)
{ 
    for (let owner of dog.owners)
    {
        if (owner === `Sarah`)
        {
            const check = checkFood(dog);
            if (check === 1)
                console.log(`The dog of ${owner} is eating too much`);
            else if (check === -1)
                console.log(`The dog of ${owner} is eating too little`);
            else
                console.log(`The dog of ${owner} is eating fine`);
        }
    } 
});

//4

// let ownersEatTooMuch = [];
// let ownersEatTooLittle = [];
// let ownersEatOkay = [];
// dogs.forEach(function(dog)
// { 
//     const check = checkFood(dog);
//     if (check === 1)
//         ownersEatTooMuch.push(dog.owners);
//     else if (check === -1)
//         ownersEatTooLittle.push(dog.owners); 
//     else
//         ownersEatOkay.push(dog.owners); 
// // });
// console.log(`${ownersEatTooMuch.flat().join(` and `)}'s dogs are eating too much.`);
// console.log(`${ownersEatTooLittle.flat().join(` and `)}'s dogs are eating too little.`);

const ownersEatTooMuch = dogs.filter(dog => checkFood(dog) === 1).flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs.filter(dog => checkFood(dog) === -1).flatMap(dog => dog.owners);
const ownersEatOkay = dogs.filter(dog => checkFood(dog) === 0).flatMap(dog => dog.owners);
   
console.log(`${ownersEatTooMuch.join(` and `)}'s dogs are eating too much.`);
console.log(`${ownersEatTooLittle.join(` and `)}'s dogs are eating too little.`);


//6
dogs.forEach(function(dog, index)
{
    console.log(`Dog ${index + 1}: ${dog.recommendedFood === dog.curFood}`);
});
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood));

//7
dogs.forEach(function(dog, index)
{
    console.log(`Dog ${index + 1}: ${checkFood(dog) === 0}`);
});
console.log(dogs.filter(dog => checkFood(dog) === 0));
console.log(`${ownersEatOkay.flat().join(` and `)}'s dogs are eating Okay.`);

const newarr = dogs.slice().sort((a,b) => a.recommendedFood - b.recommendedFood);
console.log(newarr);