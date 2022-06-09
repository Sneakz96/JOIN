let allTasks = ['1'];
let team = ['img/1.jpg', 'img/2.jpg', 'img/jahleel.jpg', 'img/3.jpg', 'img/4.jpg'];
let email = ['testemail1@web.de', 'testemail2@web.de', 'testemail3@web.de', 'testemail4@web.de', 'testemail5@web.de']
let assignTo = [];
let backlog = [];
/**
 * FUNCTION_AT_START
 */
function init() {
    loadAllTasks();
    loadBacklog();
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
    let category = document.getElementById('categoryBtn').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgencyBtn').value;
    let asiTo = assignTo[0];
    let asiToImg = team[0]
    let asiToemail = email[0]
    let task = {
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned_to': asiToImg,
        'assigned_to_email': asiToemail,
    }
    allTasks.push(task);
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);
    addTaskToBacklog(task);
    loadBacklog();
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
function addTaskToBacklog(task) {
    backlog.push(task);
    let backlogAsString = JSON.stringify(backlog);
    localStorage.setItem('backlog', backlogAsString)
}

function loadBackLogLS() {
    let backlogdata = JSON.parse(localStorage.getItem('backlog'))
    if (backlogdata) {
        backlog = backlogdata;
    }

}

function loadBacklog() {
    loadBackLogLS();
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    backlog.forEach((task) => {
        let title = task.title;
        let category = task.category;
        let asiToImg = task.assigned_to;
        let email = task.assigned_to_email
        let description = task.description;
        logs.innerHTML += createTask_TEMPLATE_LOGS(title, category, asiToImg, email, description);
    })

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