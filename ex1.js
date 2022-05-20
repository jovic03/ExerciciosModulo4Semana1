"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logPerson = exports.users = void 0;
console.log('************************EXERCICIO 1 *****************************');
console.log('');
exports.users = [
    {
        name: 'Wilker',
        age: 25,
        occupation: 'Backend developer'
    },
    {
        name: 'Bob',
        age: 23,
        occupation: 'Product Manager'
    }
];
function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
exports.logPerson = logPerson;
console.log('Users:');
exports.users.forEach(logPerson);
