let tasksOnBoard = [];
let currentDraggedCard;


/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

function renderBoard() {
    let toDoJSONs = tasksOnBoard.filter(t => t['status'] == 'toDo');
    let inProgressJSONs = tasksOnBoard.filter(t => t['status'] == 'inProgress');
    let testingJSONs = tasksOnBoard.filter(t => t['status'] == 'testing');
    let doneJSONs = tasksOnBoard.filter(t => t['status'] == 'done');
    let toDoContainer = document.getElementById('toDo');
    let inProgressContainer = document.getElementById('inProgress');
    let testingContainer = document.getElementById('testing');
    let doneContainer = document.getElementById('done');

    clearBoard(toDoContainer, inProgressContainer, testingContainer, doneContainer);
    renderToDoArea(toDoJSONs, toDoContainer);
    renderinProgressArea(inProgressJSONs, inProgressContainer);
    renderTestingArea(testingJSONs, testingContainer);
    renderDoneArea(doneJSONs, doneContainer);
}


function renderToDoArea(toDoJSONs, toDoContainer) {
    for (let i = 0; i < toDoJSONs.length; i++) {
        if (!toDoJSONs[i]) {
            return
        }
        let task = toDoJSONs[i];
        let id = task['id'];
        let title = task['title'];
        let names = [];
        let date = task['dueDate'];
        getUserNames(names, task);
        toDoContainer.innerHTML += createTask_TEMPLATE_TO_DO(id, title, date);
        renderNames(id, names);
        addUrgencyColorsToBoard(id, task);
    }
}


function renderinProgressArea(inProgressJSON, inProgressContainer) {
    for (let i = 0; i < inProgressJSON.length; i++) {
        if (!inProgressJSON[i]) {
            return
        }
        let task = inProgressJSON[i];
        let id = task['id'];
        let title = task['title'];
        let names = [];
        let date = task['dueDate'];
        getUserNames(names, task);
        inProgressContainer.innerHTML += createTask_TEMPLATE_TO_DO(id, title, date);
        renderNames(id, names);
        addUrgencyColorsToBoard(id, task);
    }
}


function renderTestingArea(testingJSON, testingContainer) {
    for (let i = 0; i < testingJSON.length; i++) {
        if (!testingJSON[i]) {
            return
        }
        let task = testingJSON[i];
        let id = task['id'];
        let title = task['title'];
        let names = [];
        let date = task['dueDate'];
        getUserNames(names, task);
        testingContainer.innerHTML += createTask_TEMPLATE_TO_DO(id, title, date);
        renderNames(id, names);
        addUrgencyColorsToBoard(id, task);
    }
}


function renderDoneArea(doneJSON, doneContainer) {
    for (let i = 0; i < doneJSON.length; i++) {
        if (!doneJSON[i]) {
            return
        }
        let task = doneJSON[i];
        let id = task['id'];
        let title = task['title'];
        let names = [];
        let date = task['dueDate'];
        getUserNames(names, task);
        doneContainer.innerHTML += createTask_TEMPLATE_TO_DO(id, title, date);
        renderNames(id, names);
        addUrgencyColorsToBoard(id, task);
    }
}


/**
 * FUNCTION
 */

function clearBoard(toDoContainer, inProgressContainer, testingContainer, doneContainer) {
    toDoContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    testingContainer.innerHTML = '';
    doneContainer.innerHTML = '';
}

/**
 * FUNCTION_RENDER_USER_Name
 */

function renderNames(id, names) {
    let boardTemplateElement = document.getElementById('dragable-card-names' + id);
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

function moveTo(status) {
    let ticket = tasksOnBoard.find(t => t.id === currentDraggedCard);
    ticket['status'] = status;
    saveBoardTaskStatus();
    renderBoard();
}


/**
 * FUNCTION_OPEN_DETAIL_VIEW
 */

function openDetailView(id) {
    let currentTask = tasksOnBoard.filter(t => t['id'] == id);
    currentTask = currentTask[0]; //id filtered array has only 1 position.
    let title = currentTask['title'];
    let description = currentTask['description'];
    let names = [];
    let category = currentTask['category'];
    getUserNames(names, currentTask);
    let container = document.getElementById('dialog-container');
    container.innerHTML = '';
    container.innerHTML += detailViewTemplate(id, title, category, description);
    addUrgencyColorToDetailCard(id, currentTask);
    renderNamesInDetailCard(id, names);
}


function renderNamesInDetailCard(id, names) {
    let currentTemplate = document.getElementById('detail-view-names' + id);
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

async function deleteBoardTask(id) {
    let currentTask = tasksOnBoard.findIndex(obj => obj.id == id);
    closeDetailView(id);
    tasksOnBoard.splice(currentTask, 1);
    await deleteUserOnBoardDB();
    renderBoard();
}