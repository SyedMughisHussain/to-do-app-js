const input_Value = document.querySelector(".inputValue");
const submit_btn = document.querySelector(".add-button");
const todo_container = document.querySelector(".todos");
const clearAllTodo_btn = document.querySelector(".remove-btn");
const para = document.querySelector(".paragra");

// For adding a new todo task.
function addToDo() {
  if (input_Value.value === "") {
    alert("Please enter correct todo.");
  } else {
    const div = document.createElement("div");
    div.classList.add("todoContainer");
    div.innerHTML = `
        <p>${input_Value.value}</p>
        <div>
        <button class="edit-btn" onclick="editTodo(this)">Edit</button>
        <button class="delete-btn" onclick="removeTodo(this)">Delete</button>
        </div>
        `;
    todo_container.appendChild(div);
    clearInputValues();
    pendingTaskLength();
  }
}

// Function for removing all todo's from div.
function removeAllTodo() {
  todo_container.innerHTML = "";
  para.innerHTML = `You have 0 pending tasks`;
}

// Function for clearing input values after adding todo.
function clearInputValues() {
  input_Value.value = "";
}

// Function for finding length of pending tasks.
function pendingTaskLength() {
  const todoLength = todo_container.childNodes.length - 1;
  para.innerHTML = `You have ${todoLength} pending tasks`;
}

// Function for remove a single todo.
function removeTodo(value) {
  value.parentElement.parentElement.remove();
  pendingTaskLength();
}

// Function for edit a todo with a new text.
function editTodo(value) {
  const input = value.parentElement.parentElement;
  let newValue = prompt(
    `Edit the new value to change with ${input.firstElementChild.innerHTML} existing value.`
  );
  input.firstElementChild.innerHTML = newValue;
  console.log(input.firstElementChild.innerHTML);
}

// Button listeners for adding and removing all tasks.
submit_btn.addEventListener("click", addToDo);
clearAllTodo_btn.addEventListener("click", removeAllTodo);
