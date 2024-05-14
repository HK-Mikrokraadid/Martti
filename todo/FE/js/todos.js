/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const getTodos = async () => {
  const todos = await axios.get('http://localhost:3000/todos');
  return todos.data.todos;
};
