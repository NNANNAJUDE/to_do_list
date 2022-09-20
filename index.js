/*************
 * Initializing necesary variable
 * ************ */

//add task function event


const addTaskBtn = document.querySelector('#add-task');
addTaskBtn.addEventListener('click', addTask);

function addTask() {

const input = document.querySelector('#input-task');

const taskContainer = document.getElementById('task-container');

// create new elements, append and add attribute
const li = document.createElement('li');
li.innerHTML= `${input.value}`;
li.className= 'task';


//create inner buttons
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.setAttribute('class','edit');
    deleteBtn.setAttribute('class', 'delete');

    editBtn.innerHTML = '<i class = "fa-solid fa-check"></i>';
    deleteBtn.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';


        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskContainer.appendChild(li);

//add edit test function

editBtn.addEventListener('click', editTask);
function editTask(e) {

    document.querySelector('.edit').value = e.target.parentNode.childNodes[0].data;

}


deleteBtn.addEventListener('click', deleteTask);
function deleteTask() {

    taskContainer.removeChild(li);

}

}
