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

function openDetailView(i){
    let currentTask = tasksOnBoard[i];
    let title = currentTask['title'];
    let description = currentTask['description'];
    let container = document.getElementById('dialog-container');
    container.innerHTML = '';
    container.innerHTML += detailViewTemplate(i, title, description);
    addUrgencyColorToDetailCard(i, currentTask);
}

function closeDetailView(i){
    document.getElementById('detail-view' + i).classList.add('d-none');
}

