const findTheOldest = function(people) {
    let personAge = 0;
    let oldestPerson = Object;
    let oldestAge = 0;
    const date = new Date();
    people.forEach(person => {
        personAge = (person.yearOfDeath || date.getFullYear()) - person.yearOfBirth;
        if (personAge > oldestAge) {
            oldestAge = personAge;
            oldestPerson = person;
        }
    })
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
