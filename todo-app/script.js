const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addTodo();
});

function addTodo() {
  if (input.value.trim() === '') return;

  const li = document.createElement('li');
  li.innerHTML = `
                <span class="todo-text">${input.value}</span>
                <button class="delete-button">Delete</button>
            `;

  li.querySelector('.todo-text').addEventListener('click', function() {
    this.classList.toggle('completed');
  });

  li.querySelector('.delete-button').addEventListener('click', function() {
    li.remove();
  });

  todoList.appendChild(li);
  input.value = '';
}
