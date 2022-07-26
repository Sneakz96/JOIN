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
        let success = document.getElementById('successAlert');
    success.classList.add('d-none');
        let alert = document.getElementById('alert');
        alert.classList.remove('d-none');
    } else {
        addTaskToBacklog(task);
    }
}

/**
 * FUNCTION TO GET VALUES AT TASK CREATION
 * 
 * @param {string} title - 
 * @param {string} category - 
 * @param {string} description - 
 * @param {string} dueDate - 
 * @param {string} urgency - 
 * @param {string} asiTo - 
 */
function getTaskValues(title, category, description, dueDate, urgency, asiTo) {
    task = {
        'id': idGenerator(),
        'title': title,
        'category': category,
        'description': description,
        'createdAt': new Date().getTime(),
        'dueDate': dueDate,
        'urgency': urgency,
        'assigned to': asiTo,
        'status': 'toDo'
    }
    return task;
}

/**
 * FUNCTION TO RETURN THAT NO EMPLOYER IS ADDED
 */
function noUserAdded(asiTo) {
    return asiTo.length == 0;
}

/**
 * FUNCTION TO CLEAR TITLE
 */
function noTitle(title) {
    return title == '';
}

/**
 * FUNCTION TO CLEAR DESCRIPTION
 */
function noDescription(description) {
    return description == '';
}

/**
 * FUNCTION TO CREATE TASK AND MOVE TO BACKLOG
 * @param {string} task - ADDED TASK
 */
async function addTaskToBacklog(task) {
    cancel(); //clear inputfields
    await addUserBacklogDB(task);
    let alert = document.getElementById('alert');
    alert.classList.add('d-none');
    let success = document.getElementById('successAlert');
    success.classList.remove('d-none');
}

/**
 * FUNCTION TO OPEN TEAM MODAL
 */
function openTeam() {
    const overlay = document.querySelector('#overlay');
    document.querySelector('#add').addEventListener('click', () => {
        overlay.style.display = 'block';
    })
}

/**
 * FUNCTION TO CLOSE TEAM MODAL
 */
function closeTeam() {
    const overlay = document.querySelector('#overlay');
    document.querySelector('#close-modal-btn').addEventListener('click', (event) => {
        event.preventDefault();
        overlay.style.display = 'none';
    })
}

/**
 * ONCLICK -> PUSH TO TEAM[]
 * AND CREATE FOR-LOOP
 * @param {string} i - NUMBER OF TEAM MEMBER
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
 * FUNCTION TO RENDER TEAM
 */
 async function renderTeam() {
    let renderedTeam = document.getElementById('rendered-team');
    for (let i = 0; i < team.length; i++) {
        renderedTeam.innerHTML += renderTeam_template(i);
    }
}

/**
 * FUNCTION TO HIDE MEMBER PROFILES WHEN CHOOSED
 */
function hideMemberProfile(i) {
    document.getElementById('member_' + i).parentNode.classList.add('d-none');
}

/**
 * FUNCTION TO RESET MEMBER PROFILES
 */
function resetMemberProfiles() {
    for (i = 0; i < team.length; i++) {
        document.getElementById('member_' + i).parentNode.classList.remove('d-none');
    }
}