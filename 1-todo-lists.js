const todoList=[{
  name:'make dinner',dueDate:'2022-04-12'},{name:'wash dishes',dueDate:'2003-09-12'}];

renderTodoList();


function renderTodoList(){
let todoListHTML='';

todoList.forEach((todoObject,index)=>{
  const{name,dueDate}=todoObject
  const html=
  `<div>${name}</div>
  <div>${dueDate}</div>
   <button 
   class="delete-todo-button js-delete-todo-button">Delete</button>
  `;
  todoListHTML+=html;
});

document.querySelector('.js-todo-lists')
.innerHTML= todoListHTML;
//queryselectorall applies to all delete button same function so we add all at the end 
document.querySelectorAll('.js-delete-todo-button')
  .forEach((deleteButton,index)=>{
  deleteButton.addEventListener('click',()=>{
    todoList.splice(index,1);
   renderTodoList();
  })
  });
   
}

document.querySelector('.js-todo-button')
.addEventListener('click',()=>{
  addTodo();
});


function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name= inputElement.value;

  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  //console.log(name);
  todoList.push({
    //name:name,
   // dueDate:dueDate
  name,dueDate});
  



  inputElement.value='';
  renderTodoList();
}