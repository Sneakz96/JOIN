/**
 * FUNCTION FOR ADDING/PUSHING TO -> TO DO
 * @param {string} i - GIVE THE NUMBER WHICH TASK IS CHOOSEN
 */
async function addToDo(i) {
    await addUserOnBoardDB(i);
    let move = document.getElementById('moveAlert');
    move.classList.remove('d-none');
    deleteBacklogTask(i);
    tasksInBacklog.splice(i, 1);
    await deleteUserBacklogDB();
    renderBacklog();
}

/**
 * FUNCTION FOR DELETING A BACKLOG TASK
 * @param {string} i - GIVE THE NUMBER WHICH TASK IS GOING TO GET DELETED
 */
async function deleteBacklogTask(i) {
    tasksInBacklog.splice(i, 1);
    await deleteUserBacklogDB();
    let trash = document.getElementById('deleteAlert');
    setTimeout(()=>{
        trash.classList.add('d-none');
    },2000/1)
    trash.classList.remove('d-none');
    renderBacklog();
}

/**
 * FUNCTION FOR ADDING TO BACKLOG
 */
async function renderBacklog() {    
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    checkIfBacklogIsEmpty(logs);
    renderTasks(logs);
}

/**
 * FUNCTION TO RENDER TASKS
 * @param {string} logs - GIVE THE CONTAINER/POSITION/NUMBER FOR LOGS
 */
function renderTasks(logs) {
    for (let i = tasksInBacklog.length - 1; i >= 0; i--) {
        let task = tasksInBacklog[i];
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
        addUrgencyColorsToBacklog(i, task);
    }
}
/**
 * FUNCTION TO CHECK EMPTY BACKLOG
 * @param {string} logs - CHECK IF THERE'S A LOG
 */
function checkIfBacklogIsEmpty(logs) {
    if (tasksInBacklog == '') {
        logs.innerHTML += noTaskInfoTemplate();
    } else {
        logs.innerHTML = '';
    }
}

/**
 * FUNCTION TO RENDER USER IMG
 * @param {string} i - THE NUMBER OF THE CHOOSEN MEMBER
 * @param {string} emails - THE EMAIL OF THE CHOOSEN MEMBER
 */
function renderUserEmail(i, emails) {
    let backlogTemplate = document.getElementById('userEmail' + i);
    for (let j = 0; j < emails.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<a href="mailto:${emails[j]}">${emails[j]}</a>`;
    }
}

/**
 * FUNCTION TO RENDER USER IMG
 * @param {string} i - THE NUMBER OF THE CHOOSEN MEMBER
 * @param {string} userImgs - THE IMAGE OF THE CHOOSEN MEMBER
 */
function renderUserImg(i, userImgs) {
    let backlogTemplate = document.getElementById('userImg' + i);
    for (let j = 0; j < userImgs.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<img src="${userImgs[j]}" class="profile-picture-sm img">`;
    }
}
