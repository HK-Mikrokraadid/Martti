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

const result = persons.filter((person) => person.lastName === 'Doe');

console.log(result);

/* const result = [];

for (let i = 0; i < persons.length; i += 1) {
  if (persons[i].lastName === 'Doe') {
    result.push(persons[i]);
  }
}

console.log(result); */
