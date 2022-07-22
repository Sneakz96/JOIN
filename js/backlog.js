/**
 * FUNCTION_ADD_TO_TO_DO
 */

async function addToDo(i) {
    await addUserOnBoardDB(i);
    deleteBacklogTask(i);
}

/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

async function deleteBacklogTask(i) {
    tasksInBacklog.splice(i, 1);
    await deleteUserBacklogDB();
    //resetTaskIDs();
    renderBacklog();
}



/**
 * FUNCTION_ADD_TO_BACKLOG
 * help functions are in helpers.js
 */

async function renderBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    checkIfBacklogIsEmpty(logs);
    renderTasks(logs);
    
}

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

function checkIfBacklogIsEmpty(logs){
    if (tasksInBacklog == '') {
        logs.innerHTML += noTaskInfoTemplate();
    } else {
        logs.innerHTML = '';
    }
}

/**
 * FUNCTION_RENDER_USER_EMAIL
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
