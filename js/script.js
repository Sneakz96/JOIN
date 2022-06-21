let allTasks = [];
let assignTo = [];




let team = [
    {
        'ID': '1',
        'name': 'Joshua',
        'e-mail': 'join@service.com',
        'img.src': './img/1.jpg'
    },
    {
        'ID': '2',
        'name': 'Maik',
        'e-mail': 'join@service.com',
        'img.src': './img/2.jpg'
    },
    {
        'ID': '3',
        'name': 'BeispielUser1',
        'e-mail': 'join@service.com',
        'img.src': './img/3.jpg'
    },
    {
        'ID': '4',
        'name': 'BeispielUser2',
        'e-mail': 'join@service.com',
        'img.src': './img/4.jpg'
    },
    {
        'ID': '5',
        'name': 'Jahleel',
        'e-mail': 'join@service.com',
        'img.src': './img/jahleel.jpg'
    },
]



//memberName src=, email=,
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
    let asiTo = assignTo;

    let task = {
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned to': asiTo,
    }
    if (noUserAdded()) {
        alert('Bitte weisen Sie das Ticket mindestens einem Mitarbeiter zu.');
    } else {
        allTasks.push(task);
        let allTasksAsString = JSON.stringify(allTasks);
        localStorage.setItem('allTasks', allTasksAsString);
    }
}


function noUserAdded() {
    return document.getElementById('receivers').childNodes.length === 0;
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
function renderBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    for (let i = 0; i < allTasks.length; i++) {
        let task = allTasks[i];
        let title = task['title'];
        let category = task['category'];
        let asiToImg = task['assigned to'][0]['img.src'];
        let email = task['assigned to'][0]['e-mail'];
        let description = task['description'];
        // console.log(title, category, asiToImg, email, description);
        logs.innerHTML += createTask_TEMPLATE_LOGS(title, category, asiToImg, email, description);
    }

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
    console.log(assignTo);
    for (let i = 0; i < team.length; i++) {
        renderedTeam.innerHTML += renderTeam_template(i);
    }
}

/**
 * onclick push to team[]
 * and create of for-loop
 */
function addTeamImg(i) {
    let receiver = document.getElementById('receivers');
    assignTo.push(team[i]);
    receiver.innerHTML = '';
    for (let i = 0; i < assignTo.length; i++) {
        receiver.innerHTML += addTeamImg_template(i);
    }
}