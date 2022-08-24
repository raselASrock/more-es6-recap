const numbers = [13, 5, 22, 59, 76, 63, 18, 9, 55, 61, 42];

const bigNums = numbers.filter( number => number > 20);
const tinyNums = numbers.filter( n => n< 30);
const evenNumber = numbers.filter( n => n % 2 === 0);
const oddNumber = numbers.filter( x => x % 2 != 0);

console.log(bigNums);
console.log(tinyNums);
console.log(evenNumber);
console.log(oddNumber);


const products = [
    {id:1001, name: 'Laptop', price: 45000},
    {id:1002, name: 'Mobile', price: 15000},
    {id:1003, name: 'Watch', price: 35000},
    {id:1004, name: 'Tablet', price: 23000},
    {id:1005, name: 'Laptop', price: 45000},
];

const above30K = products.filter( x => x.price > 30000);
console.log(above30K);