let allTasks = [];
let team = ['Jahleel', 'Maik', 'Joshua'];



//FUNCTION_AT_START
function init() {
    loadAllTasks();
}

//FUNCTION_LOAD_EXISTING_TASKS
function loadAllTasks() {
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
        'assigned to': team,
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

//FUNCTION_OPEN_TEAM_MODAL
function openTeam() {
    const overlay = document.querySelector('#overlay');

    document.querySelector('#add').addEventListener('click', () => {
        overlay.style.display = 'block';
    })
}

//FUNCTION_CLOSE_TEAM_MODAL
function closeTeam() {
    const overlay = document.querySelector('#overlay');

    document.querySelector('#close-modal-btn').addEventListener('click', () => {
        overlay.style.display = 'none';
    })
}



function addTeamImg() {

    //onclick push to team[]
    //and create of for-loop

    for (let i = 0; i < team.length; i++) {
        let receiver = document.getElementById('receivers');
        receiver.innerHTML = /*html*/`<div>
        <img id="member_1" src="./img/jahleel.jpg" class="profile-picture">
        </div>`
    }
}
