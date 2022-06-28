let allTasks = [];
let assignTo = [];




let team = [
    {
        'ID': '1',
        'name': 'Joshua',
        'e-mail': 'joshua@join.com',
        'img.src': './img/1.jpg'
    },
    {
        'ID': '2',
        'name': 'Maik',
        'e-mail': 'Maik@join.com',
        'img.src': './img/2.jpg'
    },
    {
        'ID': '3',
        'name': 'Jahleel',
        'e-mail': 'Jahleel@join.com',
        'img.src': './img/jahleel.jpg'
    }
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
    resetMemberProfiles();
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
        save();
        cancel();
        alert('Das Ticket wurde erstellt');
        changeOnBacklog();
    }
}

/**
 * FUNCTION_NO_USER_ADDED
 */

function noUserAdded() {
    return document.getElementById('receivers').childNodes.length === 0;
}

/**
 * FUNCTION_SAVE
 */
function save() {
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);
}

function deleteBacklogTask(i) {
    allTasks.splice(i, 1);
    save();
    renderBacklog();
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
    for (let i = allTasks.length -1; i >= 0; i--) { //render task backward
        let task = allTasks[i];
        let title = task['title'];
        let category = task['category'];
        let userImgs = [];
        let emails = [];
        let description = task['description'];
        getUserEmails(emails, task);
        getUserImg(userImgs, task);
        logs.innerHTML += createTask_TEMPLATE_LOGS(i, title, category, description);
        renderUserImg(i, userImgs);
        renderUserEmail(i, emails);
    }
}

/**
 * FUNCTION_GUT_USER_EMAIL
 */

function getUserEmails(emails, task) {
    for (j = 0; j < task['assigned to'].length; j++) {
        let email = task['assigned to'][j]['e-mail'];
        emails.push(email);
    }
}

/**
 * FUNCTION_GUT_USER_IMG
 */

function getUserImg(userImgs, task) {
    for (j = 0; j < task['assigned to'].length; j++) {
        let userImg = task['assigned to'][j]['img.src'];
        userImgs.push(userImg);
    }
}

/**
 * FUNCTION_RENDER_USER_IMG
 */

function renderUserEmail(i, emails) {
    let backlogTemplate = document.getElementById('userEmail' + i);
    for (let j = 0; j < emails.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<a href="mailto:${emails[j]}">${emails[j]}</a>`;
    }
}

/**
 * FUNCTION_RENDER_USER_IMG
 */

function renderUserImg(i, userImgs) {
    let backlogTemplate = document.getElementById('userImg' + i);
    for (let j = 0; j < userImgs.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<img src="${userImgs[j]}" class="profile-picture-sm img">`;
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
    hideMemberProfile(i);
}

/**
 * FUNCTION_HIDE_MEMBER_Profile
 */

function hideMemberProfile(i) {
    document.getElementById('member_' + i).parentNode.classList.add('d-none');
}

/**
 * FUNCTION_HIDE_MEMBER_Profile
 */

function resetMemberProfiles() {
    for (i = 0; i < team.length; i++) {
        document.getElementById('member_' + i).parentNode.classList.remove('d-none');
    }
}