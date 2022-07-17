let tasksInBacklog = [];
let assignTo = [];

/**
 * FUNCTION TO CLEAR VALUES AFTER CLOSING
 */
function cancel() {
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('urgencyBtn').value = '';
    document.getElementById('receivers').innerHTML = '';
    resetMemberProfiles();
    assignTo = [];
}

/**
 * FUNCTION TO CREATE TASK
 */
async function createTask() {
    let title = document.getElementById('title').value;
    let category = document.getElementById('categoryBtn').value;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgencyBtn').value;
    let asiTo = assignTo;
    let task = getTaskValues(title, category, description, dueDate, urgency, asiTo);

    if (noUserAdded(asiTo) || noTitle(title) || noDescription(description)) {
        alert('Bitte füllen Sie das Formular vollständig aus.');
    } else {
        addTaskToBacklog(task);
    }
}

/**
 * FUNCTION TO GET VALUES 
 * 
 * @param {string}
 */
function getTaskValues(title, category, description, dueDate, urgency, asiTo){
   task = {
        'id': idGenerator(),
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned to': asiTo,
        'status' : 'toDo'
    }
    return task;
}

/**
 * FUNCTION TO CREATE TASK
 */
function noUserAdded(asiTo) {
    return asiTo.length == 0;
}

/**
 * FUNCTION TO CREATE TASK
 */
function noTitle(title){
   return title == '';
}

/**
 * FUNCTION TO CREATE TASK
 */
function noDescription(description) {
    return description == '';
}

/**
 * FUNCTION TO CREATE TASK
 */
async function addTaskToBacklog(task){
    cancel(); //clear inputfields
    await addUserBacklogDB(task);
    alert('Das Ticket wurde erstellt');
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
    document.querySelector('#close-modal-btn').addEventListener('click', (event) => {
        event.preventDefault();
        overlay.style.display = 'none';
    })
}

/**
 * FUNCTION_RENDER_TEAM
 */
async function renderTeam() {
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