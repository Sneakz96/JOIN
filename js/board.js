let tasksOnBoard = [];
let currentDraggedTemplate;

/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

function renderToDos() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML = '';
    for (let i = 0; i < tasksOnBoard.length; i++) {
        let task = tasksOnBoard[i];
        let ticketID = task['id'];
        let title = tasksOnBoard[i]['title'];
        let names = [];
        let date = tasksOnBoard[i]['dueDate'];
        getUserNames(names, task);
        toDo.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, ticketID);
        renderUserName(i, names);
        addUrgencyColorsToBoard(i, task);
    }
}

function startDragging(ticketID) {
    console.log(ticketID);
}

