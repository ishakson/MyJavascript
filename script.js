 'use strict';
const john = {
    firstName: 'john',
    lastName: "khan",
    birthYear: 1990,
    family: ['khan', 'khan', 'khan'],
    job: 'teacher',
    isMarried: false,
    friends: ['khan', 'khan', 'khan'],

    calcAge: function () {
        this.age =  2020 - this.birthYear;

        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.friends.length} friends. he is ${this.isMarried ? 'married' : 'single'}`;
    }
}


console.log(john.birthYear);
console.log(john['lastName']);

// const interestedIn = prompt('What do you want to know about John? Choose between firstName, lastName, birthYear, family, job, isMarried');
// console.log(john[interestedIn]);

// console.log(`${john.firstName} has ${john.friends.length} friends and his best friend is ${john.friends[0]}.`);
// console.log( john.calcAge(1333) );
// console.log( john['calcAge'](1333) );
console.log(john.calcAge() );
console.log(john.getSummary() );