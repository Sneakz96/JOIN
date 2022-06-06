let allTasks = ['1'];
let team = ['img/1.jpg', 'img/2.jpg', 'img/jahleel.jpg', 'img/3.jpg', 'img/4.jpg'];
let assignTo = [];

/**
 * FUNCTION_AT_START
 */
function init() {
    loadAllTasks();
    renderTeam();
}

/**
 * FUNCTION_LOAD_EXISTING_TASKS
 */
function loadAllTasks() {
    if (!localStorage.getItem('allTasks')) {
        return;
    } else {
        let allTasksAsString = localStorage.getItem('allTasks');
        allTasks = JSON.parse(allTasksAsString);
        console.log('loaded tasks', allTasks);
    }
}
/**
 * FUNCTION_CANCEL
 */
function cancel() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('urgencyBtn').value = '';
    document.getElementById('receivers').innerHTML = '';
}


/**
 * FUNCTION_CREATE_TASK
 */
function createTask() {
    let title = document.getElementById('title').value;
    let category = document.getElementById('categoryBtn').innerHTML;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgencyBtn').value;
    let asiTo = assignTo.length + 1;

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned to': asiTo,
    }
    allTasks.push(task);
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);
    addToDo();
    addBacklog();
}

/**
 * FUNCTION_ADD_TO_TO_DO
 */
function addToDo() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML += createTask_TEMPLATE_TO_DO();
}

/**
 * FUNCTION_ADD_TO_BACKLOG
 */
function addBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML += createTask_TEMPLATE_LOGS();
}

/**
 * FUNCTION_OPEN_TEAM_MODAL
 */
function openTeam() {
    const overlay = document.querySelector('#overlay');
    document.querySelector('#add').addEventListener('click', () => {
        overlay.style.display = 'block';
    })
}

/**
 * FUNCTION_CLOSE_TEAM_MODAL
 */
function closeTeam() {
    const overlay = document.querySelector('#overlay');
    document.querySelector('#close-modal-btn').addEventListener('click', () => {
        overlay.style.display = 'none';
    })
}

/**
 * FUNCTION_RENDER_TEAM
 */
function renderTeam() {
    let renderedTeam = document.getElementById('rendered-team');
    console.log(assignTo)
    for (let i = 0; i < team.length; i++) {
        renderedTeam.innerHTML += renderTeam_template(i);
    }
}

/**
 * onclick push to team[]
 * and create of for-loop
 */
function addTeamImg() {
    let receiver = document.getElementById('receivers');
    assignTo.push(Selection);
    receiver.innerHTML = '';
    for (let i = 0; i < assignTo.length; i++) {
        receiver.innerHTML += addTeamImg_template(i);
    }
}