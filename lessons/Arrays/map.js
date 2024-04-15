/* eslint-disable arrow-body-style */
/* const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number) => number * number);

console.log(newNumbers); */

/* numbers.map(function(number) {
  return number * number;
}); */

/* const newNumbers1 = [];

for (let i = 0; i < numbers.length; i += 1) {
  newNumbers1.push(numbers[i] * numbers[i]);
}

console.log(newNumbers1);
 */

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

/* const personsWithFullName = persons.map((person) => {
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    fullName: `${person.firstName} ${person.lastName}`,
    age: person.age,
  };
}); */

const personsWithFullName = persons.map((person) => {
  const newPerson = {
    ...person,
    fullName: `${person.firstName} ${person.lastName}`,
  };
  return newPerson;
});

/* const personsWithFullName = persons.map((person) => ({
  ...person,
  fullName: `${person.firstName} ${person.lastName}`,
})); */

console.log(personsWithFullName);
