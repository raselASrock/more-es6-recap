const users = [{id: 1125, name: 'rashid', job: 'Doctor',}, {id: 1523, name: 'Rohim', job: 'Engineer',}, {id: 1475, name: 'Monir', job: 'Teacher',}, {id: 1697, name: 'Karim', job: 'Labour',}]
// console.log(users);
// console.log(users[2]);
// console.log(users[2].name);
// console.log(users[2].job);

const data = {
    count: 500,
    data: [
        {id: 1547, name: 'Abdul', job: 'Leader'},
        {id: 1487, name: 'Bulbul', job: 'Doctor'}
    ]
}

// console.log(data);
// console.log(data.count);
// console.log(data.data[0].job);
const firstJob =data.data[0].job
console.log(firstJob);


const user = {
    id: 1120 ,
    name: 'Thomas Alfa Edison' ,
    address: {
        street: {
            first: '35/A kochukhet Lane',
            second: 'Third Floor',
            third: 'Right Side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka',
    }
}

const userFloor = user.address.street.second
console.log(userFloor)
