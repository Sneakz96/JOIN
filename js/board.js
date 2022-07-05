let tasksOnBoard = [];
let currentDraggedCard;

/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

function renderToDos() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML = '';
    for (let i = 0; i < tasksOnBoard.length; i++) {
        if (!tasksOnBoard[i]) {
            return
        }
        let task = tasksOnBoard[i];
        let id = task['id'];
        let title = tasksOnBoard[i]['title'];
        let names = [];
        let date = tasksOnBoard[i]['dueDate'];
        getUserNames(names, task);
        toDo.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, id);
        renderNames(i, names);
        addUrgencyColorsToBoard(i, task);
    }
}

/**
 * FUNCTION_RENDER_USER_Name
 */

 function renderNames(i, names) {
    let boardTemplateElement = document.getElementById('dragable-card-names' + i);
    for (let j = 0; j < names.length; j++) {
        boardTemplateElement.innerHTML += /*html*/ `<span>${names[j]}</span>`
    }
}


/**
 * FUNCTION_START_DRAGGING
 */

function startDragging(id) {
    currentDraggedCard = id;
}

/**
 * FUNCTION allow Drop
 */

function allowDrop(ev) {
    ev.preventDefault();
  }

  
/**
 * Function move to
 */

function moveTo(category){

}


/**
 * FUNCTION_OPEN_DETAIL_VIEW
 */

function openDetailView(i) {
    let currentTask = tasksOnBoard[i];
    let title = currentTask['title'];
    let description = currentTask['description'];
    let names = [];
    let category = currentTask['category'];
    getUserNames(names, currentTask);
    let container = document.getElementById('dialog-container');
    container.innerHTML = '';
    container.innerHTML += detailViewTemplate(i, title, category, description);
    addUrgencyColorToDetailCard(i, currentTask);
    renderNamesInDetailCard(i, names);
}

function renderNamesInDetailCard(i, names){
    let currentTemplate = document.getElementById('detail-view-names' + i);
    for (let j = 0; j < names.length; j++) {
        currentTemplate.innerHTML += `<span>${names[j]}</span>`;
    }
}

/**
 * FUNCTION_CLOSE_DETAIL_VIEW
 */

function closeDetailView(i) {
    document.getElementById('detail-view' + i).classList.add('d-none');
}

/**
 * FUNCTION_DELETE_BOARD_TASK
 */

async function deleteBoardTask(i) {
    closeDetailView(i);
    tasksOnBoard.splice(i, 1);
    await deleteUserOnBoardDB()
        //resetTaskIDs();
    renderToDos();
}