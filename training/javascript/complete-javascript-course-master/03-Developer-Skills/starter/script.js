// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let temp = [17, 22, 23]
let temp2 = [12, 5, -5, 0, 4]

for(let i = 0; i < temp.length; i++)
{
    console.log(`${temp[i]} in ${i + 1} days..`)
}

let mystr ='... '
for(let i = 0; i < temp2.length; i++)
{
    mystr += `${temp2[i]}°C in ${i + 1} days...`
}

console.log(mystr)