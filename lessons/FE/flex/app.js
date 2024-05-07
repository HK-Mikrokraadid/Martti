console.log(document);

const todoList = [
    {
        title: 'Pealkiri',
        content: 'Esimene',
        date: new Date(),
    },
    {
        title: 'Pealkiri',
        content: 'Teine',
        date: new Date(),
    },
    {
        title: 'Pealkiri',
        content: 'Kolmas',
        date: new Date(),
    },
];

const heading = document.getElementById('heading');
const button = document.getElementById('change-heading');
const classButton = document.getElementById('change-class');
const mainItem = document.getElementById('main-item');
const removeClass = document.getElementById('remove-class');
const updateTodos = document.getElementById('update-todos');
const todos = document.getElementsByClassName('todo');
const addTodo = document.getElementById('add-todo');
let state = true;

button.addEventListener('click', function() {
    if (state) {
        heading.textContent = 'Tere Javascript!';
    } else {
        heading.textContent = 'Todo';
    }
    state = !state;
});

classButton.addEventListener('click', () => {
    mainItem.classList.add('highlighted');
});

removeClass.addEventListener('click', () => {
    mainItem.classList.remove('highlighted');
});

updateTodos.addEventListener('click', () => {
    for (let i = 0; i < todos.length; i ++) {
        todos[i].textContent = i;
    }
});

addTodo.addEventListener('click', () => {
    const todoContent = prompt('Lisa tegevus: ');
    const newTodo = document.createElement('div');
    newTodo.textContent = todoContent;
    newTodo.classList.add('todo');
    mainItem.appendChild(newTodo);
});

function generateTodoList() {
    for (let i = 0; i < todoList.length; i++) {
        // Teeme uue div-i todo jaoks
        const newTodo = document.createElement('div');
        // Teeme uue pealkirja ja lisame selle todo div-i sisse
        const todoHeading = document.createElement('h3');
        todoHeading.textContent = todoList[i].title;
        newTodo.appendChild(todoHeading);
        // Teeme uue sisuelemendi ja lisame selle todo div-i sisse
        const todoContent = document.createElement('p');
        todoContent.textContent = todoList[i].content;
        newTodo.appendChild(todoContent);
        // Teeme uue kuupäeva elemendi ja lisame selle todo div-i sisse
        const todoDate = document.createElement('p');
        todoDate.textContent = todoList[i].date;
        newTodo.appendChild(todoDate);
        // Lisame todo div-ile klassi
        newTodo.classList.add('todo');
        // Lisame loodud todo div-i lehele main-item div-i sisse
        mainItem.appendChild(newTodo);
    }
}

generateTodoList();