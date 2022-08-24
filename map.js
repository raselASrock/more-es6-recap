const numbers = [2, 15, 35, 8, 60];
const output = [];

for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}

// console.log(output);

function getDoubles() {
    const output = [];
    for (const number of numbers) {
        // const doubled = number * 2;
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
const doubleIt = number => number * 2 ;

const makeDouble = numbers.map(doubleIt)

const result = getDoubles(numbers)

console.log(result)
console.log(makeDouble)
/* 
Purpose: 
1. Get an arrey
2. For every elements of an Arrey do something
3. Store the result in an arrey
4. Return the result arrey
*/

// function doubleItOld(number){
//     return number * 2;
// }

const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes)
