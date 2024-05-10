/* eslint-disable no-continue */
/* eslint-disable no-loop-func */
/* eslint-disable no-undef */
/* eslint-disable no-console */
const mainPageButton = document.getElementById('nav-main-page');
const aboutPageButton = document.getElementById('nav-about-page');
const logoutButton = document.getElementById('nav-log-out');
const addTodoButton = document.getElementById('add-todo');

let selectedCategories = [];
let selectedStatuses = [];

mainPageButton.addEventListener('click', () => {
  console.log('Main page button clicked');
});

aboutPageButton.addEventListener('click', () => {
  console.log('About page button clicked');
});

logoutButton.addEventListener('click', () => {
  console.log('Logout button clicked');
});

addTodoButton.addEventListener('click', () => {
  console.log('Add todo button clicked');
});

const createTodoItem = (todo) => {
  const todoItem = document.createElement('article');
  todoItem.classList.add('todo-item');
  todoItem.innerHTML = `
    <h2 class="todo-heading">${todo.title}</h2>
    <p>
      ${todo.content}
    </p>
    <p class="due-date">Tähtaeg: ${todo.dueDate}</p>
    <p class="category">Kategooria: ${todo.category}</p>
    
    <div class="buttons">
      <button>Märgi tehtuks</button>
      <button>Muuda</button>
      <button>Kustuta</button>
    </div>
  `;
  return todoItem;
};

const generateTodosList = () => {
  document.getElementById('todos-list').innerHTML = '';
  for (let i = 0; i < todos.length; i += 1) {
    if (selectedCategories.length > 0) {
      if (!selectedCategories.includes(todos[i].category)) {
        continue;
      }
    }
    const todoItem = createTodoItem(todos[i]);
    document.getElementById('todos-list').appendChild(todoItem);
  }
};

generateTodosList();

generateCategory = (category) => {
  const categoryItem = document.createElement('div');
  categoryItem.classList.add('category-item');
  categoryItem.innerHTML = `
  <input type="checkbox" id="category-${category.id}" name="category-${category.id}" value="category-${category.id}"><label for="category-${category.id}">${category.name}</label>
  `;
  return categoryItem;
};

generateCategoriesList = () => {
  for (let i = 0; i < categories.length; i += 1) {
    const categoryItem = generateCategory(categories[i]);
    document.getElementById('categories-list').appendChild(categoryItem);
  }
};

generateCategoriesList();

generateStatus = (status) => {
  const statusItem = document.createElement('div');
  statusItem.classList.add('status-item');
  statusItem.innerHTML = `
  <input type="checkbox" id="status-${status.id}" name="status-${status.id}" value="status-${status.id}"><label for="status-${status.id}">${status.name}</label>
  `;
  return statusItem;
};

generateStatusesList = () => {
  for (let i = 0; i < statuses.length; i += 1) {
    const statusItem = generateStatus(statuses[i]);
    document.getElementById('statuses-list').appendChild(statusItem);
  }
};

generateStatusesList();

const categoriesElements = document.getElementsByClassName('category-item');
const statusesElements = document.getElementsByClassName('status-item');

for (let i = 0; i < categoriesElements.length; i += 1) {
  categoriesElements[i].addEventListener('change', () => {
    if (categoriesElements[i].children[0].checked) {
      selectedCategories.push(categoriesElements[i].children[1].innerText);
    } else {
      selectedCategories = selectedCategories
        .filter((category) => category !== categoriesElements[i].children[1].innerText);
    }
    generateTodosList();
  });
}

for (let i = 0; i < statusesElements.length; i += 1) {
  statusesElements[i].addEventListener('change', () => {
    console.log(statusesElements[i].children[1].innerText);
  });
}
