let tasksOnBoard = [];

/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

 function renderToDos() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML = '';

    for (let i = 0; i < tasksOnBoard.length; i++) {
        toDo.innerHTML += createTask_TEMPLATE_TO_DO();
    }
}
