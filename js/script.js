
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
    if (!localStorage.getItem('tasksInBacklog') || !localStorage.getItem('tasksOnBoard')) {
        return;
    } else {
        let tasksInBacklogAsString = localStorage.getItem('tasksInBacklog');
        tasksInBacklog = JSON.parse(tasksInBacklogAsString);

        let tasksOnBoardAsString = localStorage.getItem('tasksOnBoard');
        tasksOnBoard = JSON.parse(tasksOnBoardAsString);
        console.log('loaded tasks', tasksInBacklog, tasksOnBoard);
    }
}

/**
 * FUNCTION_SAVE
 */
function save() {
    let tasksInBacklogAsString = JSON.stringify(tasksInBacklog); //tasks in backlog, created in addTask section
    localStorage.setItem('tasksInBacklog', tasksInBacklogAsString);

    let tasksOnBoardAsString = JSON.stringify(tasksOnBoard); //tasks, moved from backlog to board
    localStorage.setItem('tasksOnBoard', tasksOnBoardAsString);
}