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

persons.forEach((person) => console.log(person.age));

/* for (let i = 0; i < persons.length; i += 1) {
  console.log(persons[i].age);
} */
