const input_Value = document.querySelector(".inputValue");
const submit_btn = document.querySelector(".add-button");
const todo_container = document.querySelector(".todos");
const clearAllTodo_btn = document.querySelector(".remove-btn");
const para = document.querySelector(".paragra");

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

function removeAllTodo() {
  todo_container.innerHTML = "";
  para.innerHTML = `You have 0 pending tasks`;
}

function clearInputValues() {
  input_Value.value = "";
}

function pendingTaskLength() {
  const todoLength = todo_container.childNodes.length - 1;
  para.innerHTML = `You have ${todoLength} pending tasks`;
}

function removeTodo(value) {
  value.parentElement.parentElement.remove();
  pendingTaskLength();
}

function editTodo(value) {
  const input = value.parentElement.parentElement;
  let newValue = prompt(
    `Edit the new value to change with ${input.firstElementChild.innerHTML} existing value.`
  );
  input.firstElementChild.innerHTML = newValue;
  console.log(input.firstElementChild.innerHTML);
}

submit_btn.addEventListener("click", addToDo);
clearAllTodo_btn.addEventListener("click", removeAllTodo);
