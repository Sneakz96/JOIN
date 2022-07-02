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

function renderBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML = '';
    for (let i = tasksInBacklog.length - 1; i >= 0; i--) { //render task backward
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