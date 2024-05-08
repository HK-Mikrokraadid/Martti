// Tegevuste 'andmebaas' ehk kõik olemasolevad tegevused
const todos = [
  {
    id: 7,
    userId: 1,
    title: 'Osta piima',
    content: 'Osta kindlasti laktoosivaba',
    createdDate: '2024-02-01T12:00:00Z',
    dueDate: '2024-02-01T12:00:00Z',
    isDone: false,
    statusId: 1,
    categoryId: 1,
  },
  {
    id: 10,
    userId: 2,
    title: 'Osta šokolaadi',
    content: 'Kindlasti peab olema tume',
    isDone: true,
    createdDate: '2024-02-01T12:00:00Z',
    dueDate: '2024-02-01T12:00:00Z',
    statusId: 1,
    categoryId: 1,
  },
  {
    id: 12,
    userId: 1,
    title: 'Mine jooksma',
    content: 'Vähemalt 10km',
    createdDate: '2024-02-01T12:00:00Z',
    dueDate: '2024-02-01T12:00:00Z',
    isDone: false,
    statusId: 1,
    categoryId: 1,
  },
];

module.exports = todos;
