const input = document.querySelector(".input-box");
const button = document.querySelector(".add-button");
const todoList = document.querySelector(".todo-list");

button.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-container");

  const todoItem = document.createElement("div");
  todoDiv.classList.add("todo-item");
  todoItem.innerText = input.value;
  todoDiv.appendChild(todoItem);

  const deleteButton = document.createElement("div");
  todoDiv.classList.add("delete-btn");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  todoDiv.appendChild(deleteButton);

  const completeButton = document.createElement("div");
  todoDiv.classList.add("complete-btn");
  completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  todoDiv.appendChild(completeButton);

  todoList.appendChild(todoDiv);
  input.value = "";
}
