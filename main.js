// Task 1

// function task(arr1, arr2) {
//     let a = arr1.filter(el => arr2.includes(el))
//     let b = []
//     for (let i = 0; i < a.length; i++) {
//         if (!b.includes(a[i])) {
//             b.push(a[i])
//         }
//     }
//     return b

// }

// console.log(task([7,14, 14], [14,28]));


// Task 2

// function task(arr) {
//      return arr.reduce((acc, rec) => {
//         return {...acc, [rec.token]: rec}
//      }, {})
// }

// console.log(task([{token: '1'},{token: '2', value:23},{token: '3', name:'superman'},{token: '4'}]));


// Task 3

let container = document.createElement('div')
let form = document.createElement('form')
form.setAttribute('id', 'todo-form')
form.setAttribute('class', 'todo-form')
let input = document.createElement('input')
input.placeholder = 'Your task'
input.setAttribute('class', 'input')
form.setAttribute('id', 'todo-input')
let button = document.createElement('button')
form.setAttribute('type', 'submit')
let todoList = document.createElement('ul')
todoList.setAttribute('id', 'todo-list')
button.textContent = 'Add'
button.setAttribute('class', 'button')
container.setAttribute('class', 'container')
todoList.setAttribute('class', 'list')

document.body.appendChild(container)
container.appendChild(form)
container.appendChild(todoList)
form.appendChild(input)
form.appendChild(button)

// const form = document.querySelector('#todo-form');
// const input = document.querySelector('#todo-input');
// const todoList = document.querySelector('#todo-list');
let todos = [];

// add item to list
function addItem(e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text.length === 0) return;
  const todo = {
    id: Date.now(),
    text,
    completed: false,
  };
  todos.push(todo);
  input.value = '';
  renderList();
}

// render list
function renderList() {
  todoList.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');
    li.setAttribute('class', 'listItem')
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.style = 'margin-right: 10px'
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', () => {
      todo.completed = !todo.completed;
      renderList();
      
    });
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.setAttribute('class', 'todoText')
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'btns')
    editButton.addEventListener('click', () => {
      editItem(todo.id);
    });
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('class', 'btns')
    deleteButton.addEventListener('click', () => {
      deleteItem(todo.id);
    });
    let btns = document.createElement('div')
    btns.setAttribute('class', 'btnsContainer')
    btns.appendChild(editButton)
    btns.appendChild(deleteButton)
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btns);
    todoList.appendChild(li);

    if (checkbox.checked) {
        span.style = 'text-decoration: line-through;'
    }
  });
}

// edit item
function editItem(id) {
  const todo = todos.find(todo => todo.id === id);
  const text = prompt('Edit item:', todo.text);
  if (text === null || text.trim().length === 0) return;
  todo.text = text.trim();
  renderList();
}

// delete item
function deleteItem(id) {
  todos = todos.filter(todo => todo.id !== id);
  renderList();
}

// initialize
function init() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos !== null) {
    todos = JSON.parse(savedTodos);
    renderList();
  }
}

// save list
function saveList() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener('submit', addItem);
window.addEventListener('beforeunload', saveList);
init();

let circle = document.getElementById('circle')



// function getTime() {
//   let date = new Date()
//   let minute = date.getMinutes()

//   return minute
// }
// function getTimeSec() {
//   let date = new Date()
//   let second = date.getSeconds()

//   return second
// }

// function changeBackground(color) {
//   document.body.style.background = color
// }

// setInterval(() => {
//   let minute = getTime()
//   let bg = null
//   let second = getTimeSec()
//   // if (minute > 32) {
//   //   // bg = 'black'
//   //   circle.style.transform = 'rotate(-50deg)'
//   // } else if (minute > 33) {
//   //   circle.style.transform = 'rotate(0)'
//   // }

//   let gradus = 0

//   switch (second) {
//     case second = 0:
//       circle.style.transform = `rotate(${gradus+30}deg)`
//       break;
//     case second = 5:
//       circle.style.transform = `rotate(${gradus+30}deg)`
//       break;
//     case second = 10:
//       circle.style.transform = 'rotate(90deg)'
//       break;
//     case second = 15:
//       circle.style.transform = 'rotate(120deg)'
//       break;
//     case second = 20:
//       circle.style.transform = 'rotate(150deg)'
//       break;
//     case second = 25:
//       circle.style.transform = 'rotate(180deg)'
//       break;
//     case second = 30:
//       circle.style.transform = 'rotate(210deg)'
//       break;
//     case second = 35:
//       circle.style.transform = 'rotate(240deg)'
//       break;
//     case second = 40:
//       circle.style.transform = 'rotate(270deg)'
//       break;
//     case second = 45:
//       circle.style.transform = 'rotate(300deg)'
//       break;
//     case second = 50:
//       circle.style.transform = 'rotate(330deg)'
//       break;
//     case second = 55:
//       circle.style.transform = 'rotate(360deg)'
//       break;
  
//     default:
//       break;
//   }
//   // changeBackground(bg)
// }, 100)




  

