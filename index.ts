console.log('************************EXERCICIO 3 *****************************');
console.log('');
interface User {
    name:string;
    age: number;
    occupation?:string;
    role?:string;
}

interface Admin {
    name:string;
    age: number;
    role?:string;
    occupation?:string;
}

export type Person = Admin & User;

export const persons: Person[] = [
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

export function logPerson(person: Person) {
    let additionalInformation: unknown;
    if (person.role == 'Administrator' ||person.role == 'World saver' ) {
        additionalInformation = person.role;
    } else if (person.occupation == 'Chimney sweep' ||person.occupation == 'Astronaut') {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);