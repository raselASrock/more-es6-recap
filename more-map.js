const numbers = [12, 56, 47, 99, 62];
const half = numbers.map( x => x/2 );
const third = numbers.map( x => x/3);
// console.log(half)
// console.log(third);


const friends = ['Tom Hanks', 'Tom cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetter = friends.map( friend =>friend[0]);
// console.log(firstLetter)
const nameLengths = friends.map(friend => friend.length)
console.log(nameLengths);

const products = [
    {id:1001, name: 'Laptop', price: 45000},
    {id:1002, name: 'Mobile', price: 15000},
    {id:1003, name: 'Watch', price: 35000},
    {id:1004, name: 'Tablet', price: 23000},
    {id:1005, name: 'Laptop', price: 45000},
];

// const items = products.map( product => console.log(product))
const items = products.map( product => product.name);
const price = products.map(item => item.price);
console.log(items)
console.log(price)