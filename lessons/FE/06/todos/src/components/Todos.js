import React, { useState } from 'react';
import Todo from './Todo';

const existingTodos = [
    {
        title: 'Pealkiri 3',
        content: 'Sisu 1'
    },
    {
        title: 'Pealkiri 2',
        content: 'Sisu 2'
    },
    {
        title: 'Pealkiri 3',
        content: 'Sisu 3'
    },
];

function Todos() {
  const [todos, setTodos] = useState(existingTodos);

  function newTodos() {
    const newTodos = [...todos];
    newTodos.push({
      title: 'lkjalkajdl',
      content: 'akdshashd'
    });
    setTodos(newTodos);
  }
  return (
    <>
      <h1 style={{margin: '5px'}}>Todos komponent</h1>
      {
        todos.map((todo, index) => {
            return <Todo title={todo.title} content={todo.content} key={index} />
        })
      }
      <button style={{margin: '5px'}} onClick={newTodos}>Lisa postitus</button>
    </>
  );
};

export default Todos;
