let TodoInput =document.querySelector('.to-in');
let TodoButton=document.querySelector('.to-btn');
let TodoList=document.querySelector('.to-list');


TodoButton.addEventListener('click',addto);

function addto(e)
{

    //create TodoList div
    const todoDiv=document.createElement('div');
    //prevent refresh
    e.preventDefault();
    todoDiv.classList.add('todo');
    //create Todo list
    const toLi=document.createElement('li');
    toLi.classList.add('todoItems');
    toLi.innerText=TodoInput.value;
    todoDiv.appendChild(toLi);
    //add the todoDiv to the Todolist
    TodoList.appendChild(todoDiv);
    //clear input
    TodoInput.value='';

}