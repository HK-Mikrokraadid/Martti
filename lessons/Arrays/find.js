const persons = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 36,
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 33,
  },
  {
    firstName: 'Tom',
    lastName: 'Tailor',
    age: 45,
  },
];

const result = persons.find((person) => person.lastName === 'Toe');

console.log(result);

/* let result;

for (let i = 0; i < persons.length; i += 1) {
  if (persons[i].lastName === 'Doe') {
    result = persons[i];
    break;
  }
}

console.log(result); */
