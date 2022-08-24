const numbers = [13, 5, 22, 59, 76, 63, 18, 9, 55, 61, 42];

const fives = numbers.find( n => n % 5 === 0 );
const fivesAll = numbers.filter (n => n % 5 === 0 );
console.log(fives)
console.log(fivesAll)

const products = [
    {id:1001, name: 'Laptop', price: 65000},
    {id:1002, name: 'Mobile', price: 15000},
    {id:1003, name: 'Watch', price: 30000},
    {id:1004, name: 'Tablet', price: 23000},
    {id:1005, name: 'Laptop', price: 45000},
];

const cheap = products.find( product => product.price < 30000);
console.log(cheap)