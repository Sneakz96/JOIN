let allTasks = [];

//FUNCTION_AT_START
function init() {
    loadAllTasks();
}

//FUNCTION_LOAD_EXISTING_TASKS
function loadAllTasks(){
    let allTasksAsString = localStorage.getItem('allTasks');
    allTasks = JSON.parse(allTasksAsString);
    console.log('loaded tasks', allTasks)
}

//FUNCTION_CREATE_TASK
function createTask() {
    let title = document.getElementById('title').value;
    let category = document.getElementById('categoryBtn').innerHTML;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgencyBtn').value;
    //let asiTo = document.getElementById('').value;

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned to': 'me',
    }

    allTasks.push(task);
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);
    addToDo();
    addBacklog();
}

//FUNCTION_ADD_TO_TO_DO
function addToDo() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML += createTask_TEMPLATE_TO_DO();
}

//FUNCTION_ADD_TO_BACKLOG
function addBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML += createTask_TEMPLATE_LOGS();
}

//FUNCTION_
function openTeam(){
    let team = document.getElementById('team');
    team.classList.remove('d-none');
    team.innerHTML = prompt('show team');
}