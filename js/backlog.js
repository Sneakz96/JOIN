
/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

function deleteBacklogTask(i) {
    allTasks.splice(i, 1);
    save();
    renderBacklog();
}

/**
 * FUNCTION_ADD_TO_TO_DO
 */

 function addToDo(i) {
    tasksOnBoard.push(allTasks[i]);
    console.log(tasksOnBoard);
    deleteBacklogTask(i);
    // let toDo = document.getElementById('toDo');
    // toDo.innerHTML += createTask_TEMPLATE_TO_DO();
}

function renderToDos() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML = '';

    for (let i = 0; i < tasksOnBoard.length; i++) {
        toDo.innerHTML += createTask_TEMPLATE_TO_DO();
    }
}

/**
 * FUNCTION_ADD_TO_BACKLOG
 */

function renderBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    for (let i = allTasks.length - 1; i >= 0; i--) { //render task backward
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

