"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.persons = void 0;
console.log('************************EXERCICIO 3 *****************************');
console.log('');
exports.persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
function logPerson(person) {
    let additionalInformation;
    if (person.role == 'Administrator' || person.role == 'World saver') {
        additionalInformation = person.role;
    }
    else if (person.occupation == 'Chimney sweep' || person.occupation == 'Astronaut') {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}
exports.logPerson = logPerson;
exports.persons.forEach(logPerson);
