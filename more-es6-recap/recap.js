/*
Number: 1*****************
var let const 
breakup with var
we will use let and const in es6
we can't reassign or update a const variable
we can update or reassign a let variable

*/ 

const numbers = [12, 48, 955, 762, 485, 659, 439];

// let salary = 450;
// salary = 500;

/*
Number: 2 **************
Default parameters
*/ 

function calculateSalary(salary, taxRate = 0.25, bonus = 0){
    const remaining = salary - salary*taxRate ;
    const total = remaining + bonus;
    return total;
}

const salary = calculateSalary(15000)
console.log(salary);


/*
Number: 3 *****************Important
Template String

*/ 

const elementHTML = `
<div>
    <h3>Name: </h3>
    <address>Address</address>
    <p>Simple Text</P>
    <p>Salary: ${calculateSalary(15000,0.15,2000)}</P>
    <p>Others: ${numbers[3]}</P>
</div>
` 
console.log(elementHTML);

/*
Number:4****************
Arrow Function
*/ 

const doubleIt = x => x * 2 ;

const calculateSalary2 = (salary, taxRate, bonus) => salary - salary*taxRate + bonus ;

/*
Number: 5 
Spread Arrows

*/ 

const ages = [12, 13, 25, 17, 21, 14];
const newAges = [...ages, 22, 24, 23];


/*
Number:6
Destructuring
*/ 

const {x , y ,z , ...c} =  { x : 45 , y: 12, z: 33, name: 'Sakib Al Hasan', salary: 450000 }
console.log(c);

const [] = [12,45,65,78,95,16,43,61];
