const todosList = document.getElementById('todos-list');
const saveButton = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
const showAll = document.getElementById('show-all');

showAll.addEventListener('change', () => {
    generateTodosList();
});

saveButton.addEventListener('click', (event) => {
    event.preventDefault(); // Takistab HTML vormi vaikimisi käitumist
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const todo = {
        title,
        content,
    };
    todos.push(todo);
    generateTodosList();
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
/*     const email = document.getElementById('email');
    if (!email.checkValidity()) {
        errorMessage.textContent = email.validationMessage;
    } else {
        errorMessage.textContent = '';
    } */
});

const generateTodosList = () => {
    todosList.textContent = '';
    for (let i = 0; i < todos.length; i++) {
        if (!todos[i].isDone || showAll.checked) {
            const todo = document.createElement('div');
            todo.innerHTML = `
            <h2>Pealkiri: ${todos[i].title}</h2>
            <p>Sisu: ${todos[i].content}</p>
            <p>Tehtud: ${todos[i].isDone}</p>
            `;
            const isDoneButton = document.createElement('button');
            isDoneButton.textContent = 'Muuda tegevuse staatust';
            isDoneButton.addEventListener('click', () => {
                todos[i].isDone = !todos[i].isDone;
                generateTodosList();
            });
            todo.appendChild(isDoneButton);

            todosList.appendChild(todo);
        }
    }
};

generateTodosList();

