function addTask() {
  const todoContainer = document.getElementById('todo-container');
  const newTaskText = prompt('Sisesta uue tegevuse nimi:');

  if (newTaskText) {
    const newTask = document.createElement('div');
    newTask.className = 'todo-item p-2 border rounded mb-2';
    newTask.innerHTML = `
          <span>${newTaskText}</span>
          <div>
              <button class="btn btn-sm btn-primary" onclick="editTask(this)">Muuda</button>
              <button class="btn btn-sm btn-danger" onclick="deleteTask(this)">Kustuta</button>
              <button class="btn btn-sm btn-success" onclick="markDone(this)">Done</button>
          </div>
      `;
    todoContainer.appendChild(newTask);
  }
}

function editTask(button) {
  const taskItem = button.parentElement.parentElement;
  const taskText = taskItem.querySelector('span').innerText;
  const newTaskText = prompt('Muuda tegevust:', taskText);

  if (newTaskText) {
    taskItem.querySelector('span').innerText = newTaskText;
  }
}

function deleteTask(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.remove();
}

function markDone(button) {
  const taskItem = button.parentElement.parentElement;
  taskItem.querySelector('span').style.textDecoration = 'line-through';
}
