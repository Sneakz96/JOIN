let tasksOnBoard = [];
let currentDraggedCard;

/**
 * FUNCTION_DELETE_BACKLOG_TASK
 */

async function renderBoard() {
    let toDoJSON = tasksOnBoard.filter(t => t['status'] == 'toDo');
    let inProgressJSON = tasksOnBoard.filter(t => t['status'] == 'inProgress');
    let testingJSON = tasksOnBoard.filter(t => t['status'] == 'testing');
    let doneJSON = tasksOnBoard.filter(t => t['status'] == 'done');

    console.log(toDoJSON, inProgressJSON, doneJSON, testingJSON);

    let toDoContainer = document.getElementById('toDo');
    let inProgressContainer = document.getElementById('inProgress');
    let testingContainer = document.getElementById('testing');
    let doneContainer = document.getElementById('done');

    clearBoard(toDoContainer, inProgressContainer, testingContainer, doneContainer);
    renderToDoArea(toDoJSON, toDoContainer);
    renderinProgressArea(inProgressJSON, inProgressContainer);
    renderTestingArea(testingJSON, testingContainer);
    renderDoneArea(doneJSON, doneContainer);
}


function renderToDoArea(toDo, toDoContainer) {
    for (let i = 0; i < toDo.length; i++) {
        if (!toDo[i]) {
            return
        }
        let task = toDo[i];
        let id = task['id'];
        let title = task['title'];
        let names = [];
        let date = task['dueDate'];
        getUserNames(names, task);
        toDoContainer.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, id);
        renderNames(i, names);
        addUrgencyColorsToBoard(i, task);
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
        inProgressContainer.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, id);
        renderNames(i, names);
        addUrgencyColorsToBoard(i, task);
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
        testingContainer.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, id);
        renderNames(i, names);
        addUrgencyColorsToBoard(i, task);
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
        doneContainer.innerHTML += createTask_TEMPLATE_TO_DO(i, title, date, id);
        renderNames(i, names);
        addUrgencyColorsToBoard(i, task);
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

function moveTo(status) {
    let ticket = tasksOnBoard.find(t => t.id === currentDraggedCard);
    ticket['status'] = status;
    renderBoard();
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

function renderNamesInDetailCard(i, names) {
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
    renderToDoSection();
}