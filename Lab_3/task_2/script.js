const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function createTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.classList.add('task-item'); 

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.textContent = taskText;
    span.classList.add('task-text');

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '&#128465;';   
    deleteBtn.classList.add('delete-btn');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            span.classList.add('done'); 
        } else {
            span.classList.remove('done'); 
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove(); 
    });

    li.appendChild(checkbox);   
    li.appendChild(span);       
    li.appendChild(deleteBtn); 

    taskList.appendChild(li);

    taskInput.value = '';
}

addBtn.addEventListener('click', createTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        createTask();
    }
});