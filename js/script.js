
let tasksOnBoard = [];


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
 * FUNCTION_SAVE
 */
function save() {
    let allTasksAsString = JSON.stringify(allTasks);
    localStorage.setItem('allTasks', allTasksAsString);

    let tasksOnBoardAsString = JSON.stringify(tasksOnBoard);
    localStorage.setItem('tasksOnBoard', tasksOnBoardAsString);
}