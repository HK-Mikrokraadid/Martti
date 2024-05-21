const todosContainer = document.getElementById('todo-list');
let done = false; // Kuva tehtud asjade märkeruudu väärtus
let notDone = false; // Kuva tegemata asjade märkeruudu väärtus

// done - true, false, null
const fetchTodos = async () => {
    let response;
    try {
        if ((done && notDone) || (!done && !notDone)) { // Kui mõlemad on märgitud või märkimata
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
        } else if (done && !notDone) { // Kui ainult tehtud asjad on märgitud
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos?completed=true`);
        } else {
            response = await axios.get(`https://jsonplaceholder.typicode.com/todos?completed=false`);
        }
        createTodoList(response.data);
    } catch (error) {
       console.log(error); 
    }
};

const createTodoList = (todos) => {
    todosContainer.innerText = '';
    todos.forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.id = todo.id;
        todoDiv.classList.add('border', 'm-1');
        if (todo.completed) {
            todoDiv.classList.add('bg-success-subtle');
        } else {
            todoDiv.classList.add('bg-danger-subtle');
        }
        todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <button class="btn btn-primary" onclick="changeStatus(${todo.id})">Muuda staatust</button>
        `;
        todosContainer.appendChild(todoDiv);
    });
};

const readDoneValue = (event) => {
    done = event.target.checked;
    fetchTodos();
}

const readNotDoneValue = (event) => {
    notDone = event.target.checked;
    fetchTodos();
}

const logEvent = (event) => {
    console.log(event);
};

const changeStatus = (id) => {
    console.log(id);
    document.getElementById(id).classList.add('border-success')
};

fetchTodos();