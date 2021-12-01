`use strict`;

/*
Coding challenge 1
const av = (score1, score2, score3) => (score1 + score2 + score3) / 3

const win = function(avg1, avg2)
{
    if (avg1 >= avg2 * 2)
        console.log(`Dolphins win (${avg1} vs ${avg2})`)
    else if (avg2 >= avg1 * 2)
        console.log(`Koalas win (${avg2} vs ${avg1})`)
    else
        console.log(`Equality`)
}

win(av(44,23,71), av(65,54,49))
win(av(85, 54, 41), av(23,34,27))
*/

/*
Coding challenge 2
const calcTip = function(bill)
{
    return (bill < 50 || bill > 300) ? bill * 0.2 : bill * 0.15
}

const tot = (bill) => bill + calcTip(bill)

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)
const total = [tot(bills[0]), tot(bills[1]), tot(bills[2])]
console.log(total)
*/

/*
Coding challenge 3
const mark = {name: 'Mark Miller', mass : 78, height : 1.69,
calcBMI: function()
{
    this.bmi = this.mass / this.height ** 2;
   return this.bmi;
}
}
const john = {name: 'John Smith', mass : 92, height : 1.95,
calcBMI: function()
{
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
}
}

john.calcBMI();
mark.calcBMI();

if (john.bmi > mark.bmi)
{
    console.log(`John's BMI (${john.bmi}) is higher than Mark's (${mark.bmi})`)
}    
else
{
    console.log(`Mark's BMI (${mark.bmi}) is higher than John's (${john.bmi})`)
}
*/


/*
//Coding challenge 4
const calcTip = function(bill)
{
    return (bill < 50 || bill > 300) ? bill * 0.2 : bill * 0.15
}

const calcAv = function(arr)
{
    let sum = 0;
    if (arr.length === 0)
    {
        return -1;
    }
    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i]
    }
    return sum / arr.length
}   

const tot = (bill) => bill + calcTip(bill)

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []

for (let i = 0; i < bills.length; i++)
{
    tips.push(calcTip(bills[i]))
    totals.push(calcTip(bills[i]) + bills[i])
}
console.log(bills, tips, totals)
console.log(calcAv(tips))
*/

