let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
renderTodoList();
/* ----------- */
function renderTodoList() {
  let todoListHTML = '';
  todoArray.forEach((todoObject, index) => {
    //const name = todoObject.name;
    const { name } = todoObject;//distructuring
    //const duedate = todoObject.duedate;
    const { duedate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button class="delete-button js-delete-button">delete</button>`;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelectorAll('.js-delete-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoArray.splice(index,1)
        localStorage.setItem('todoArray',JSON.stringify(todoArray))
        renderTodoList()
    })
  })
}
/* ---------- */
document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
  })
function addTodo() {
  const todoInput = document.querySelector('.js-name-input');
  const dateInput = document.getElementById('date');
  let name = todoInput.value;
  let duedate = dateInput.value;
  
  todoArray.push({ name: name, duedate: duedate});
  todoInput.value = '';
  document.querySelector('.js-todo-list').innerHTML = '';
  renderTodoList();
  //save updated todoArray
  localStorage.setItem('todoArray', JSON.stringify(todoArray));
}
/* -------------- */
// add keydown to input field
document.querySelector('.js-name-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { addTodo() }
}); 
