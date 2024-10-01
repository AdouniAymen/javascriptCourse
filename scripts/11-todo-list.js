let todoArray = JSON.parse(localStorage.getItem('todoArray')) || [];
renderTodoList();
function renderTodoList() {
  let todoListHTML = '';
  for (i = 0; i < todoArray.length; i++) {
    const todoObject = todoArray[i];
    //const name = todoObject.name;
    const { name } = todoObject;//distructuring
    //const duedate = todoObject.duedate;
    const { duedate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${duedate}</div>
    <button
    onclick="
    todoArray.splice(${i},1)
    localStorage.setItem('todoArray',JSON.stringify(todoArray))
    renderTodoList()
    " class="delete-button">delete</button>`;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  
}
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
// add keydown to input field
document.querySelector('.js-name-input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') { addTodo() }
}); 
