/* eslint-disable no-alert */
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

// Leiame veebilehelt vastava id-ga HTML elemendid
const heading = document.getElementById('heading');
const button = document.getElementById('change-heading');
const classButton = document.getElementById('change-class');
const mainItem = document.getElementById('main-item');
const removeClass = document.getElementById('remove-class');
const updateTodos = document.getElementById('update-todos');
const addTodo = document.getElementById('add-todo');

// Leiame veebilehelt kõik elemendid, millel on klass 'todo'
const todos = document.getElementsByClassName('todo');

// Loome muutuja, mille algväärtus on true ja mille abil saame kontrollida, millist pealkirja kuvada
let state = true;

// Lisame nupule 'Muuda pealkiri' kuulaja, mis reageerib klikile
button.addEventListener('click', () => {
  // Kui state on true, siis muudame pealkirja 'Tere Javascript!'-iks, vastasel juhul 'Todo'-ks
  if (state) {
    heading.textContent = 'Tere Javascript!';
  } else {
    heading.textContent = 'Todo';
  }
  state = !state;
});

// Lisame nupule 'Lisa klass' kuulaja, mis reageerib klikile
classButton.addEventListener('click', () => {
  // Lisame mainItem div-ile klassi 'highlighted'
  mainItem.classList.add('highlighted');
});

// Lisame nupule 'Eemalda klass' kuulaja, mis reageerib klikile
removeClass.addEventListener('click', () => {
  // Eemaldame mainItem div-ilt klassi 'highlighted'
  mainItem.classList.remove('highlighted');
});

// Lisame nupule 'Uuenda tegevused' kuulaja, mis reageerib klikile
updateTodos.addEventListener('click', () => {
  // Käime kõik todo elemendid läbi ja uuendame nende teksti vastavalt indeksile
  for (let i = 0; i < todos.length; i += 1) {
    todos[i].textContent = i;
  }
});

// Lisame nupule 'Lisa tegevus' kuulaja, mis reageerib klikile
addTodo.addEventListener('click', () => {
  // Küsime kasutajalt tegevuse sisu
  const todoContent = prompt('Lisa tegevus: ');
  // Loome uue div-i todo jaoks
  const newTodo = document.createElement('div');
  // Lisame todo div-ile sisu
  newTodo.textContent = todoContent;
  // Lisame todo div-ile klassi
  newTodo.classList.add('todo');
  // Lisame loodud todo div-i lehele main-item div-i sisse
  mainItem.appendChild(newTodo);
});

// Funktsioon, mis genereerib todo listi
function generateTodoList() {
  // Käime todoList massiivi läbi ja loome iga elemendi jaoks uue div-i
  for (let i = 0; i < todoList.length; i += 1) {
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

// Käivitame funktsiooni, mis genereerib todo listi
generateTodoList();
