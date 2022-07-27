let tasksOnBoard = [];
let currentDraggedCard;

/**
 * FUNCTION TO DELETE BACKLOG TASK
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

/**
 * FUNCTION TO RENDER TO DO CONTENT
 * @param {string} toDoJSONs - GIVE THE CONTENT OF TO DO JSON
 * @param {string} toDoContainer - GIVE THE CONTENT OF TO DO CONTAINER
 */
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

/**
 * FUNCTION TO RENDER PROGRESS CONTENT
 * @param {string} inProgressJSON - GIVE THE CONTENT OF PROGRESS JSON
 * @param {string} inProgressContainer - GIVE THE CONTENT OF PROGRESS CONTAINER
 */
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

/**
 * FUNCTION TO RENDER TESTING CONTENT
 * @param {string} testingJSON - GIVE THE CONTENT OF TESTING JSON
 * @param {string} testingContainer - GIVE THE CONTENT OF TESTING CONTAINER
 */
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

/**
 * FUNCTION TO RENDER DONE SECTION
 * @param {string} doneJSON - GIVE THE CONTENT OF DONE JSON
 * @param {string} doneContainer - GIVE THE CONTENT OF DONE CONTAINER
 */
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
 * FUNCTION TO CLEAR THE MAIN BOARD
 * @param {string} toDoContainer - GIVE THE TO DO SECTION
 * @param {string} inProgressContainer - GIVE THE PROGRESS SECTION
 * @param {string} testingContainer - GIVE THE TESTING SECTION
 * @param {string} doneContainer - GIVE THE DONE SECTION
 */
function clearBoard(toDoContainer, inProgressContainer, testingContainer, doneContainer) {
    toDoContainer.innerHTML = '';
    inProgressContainer.innerHTML = '';
    testingContainer.innerHTML = '';
    doneContainer.innerHTML = '';
}

/**
 * FUNCTION TO RENDER USER NAMES
 * @param {string} id - GIVE NUMBER OF CURRENT CARD/TASK
 * @param {string} names - GIVE NAMES OF CURRENT EMPLOYERS
 */
function renderNames(id, names) {
    let boardTemplateElement = document.getElementById('dragable-card-names' + id);
    for (let j = 0; j < names.length; j++) {
        boardTemplateElement.innerHTML += /*html*/ `<span>${names[j]}</span>`
    }
}

/**
 * FUNCTION TO START DRAGGING
 * @param {string} id - GIVE NUMBER OF CURRENT CARD/TASK
 */
function startDragging(id) {
    currentDraggedCard = id;
}

/**
 * FUNCTION TO ALLOW A DROP
 * @param {string} ev - GIVE FUNCTION THE EVENT
 */
function allowDrop(ev) {
    ev.preventDefault();
}

/**
 * FUNCTION FOR MOVING AND DRANG AND DROP
 * @param {string} status - STATUS OF POSITION
 */
function moveTo(status) {
    let ticket = tasksOnBoard.find(t => t.id === currentDraggedCard);
    ticket['status'] = status;
    saveBoardTaskStatus();
    renderBoard();
}

/**
 * FUNCTION TO OPEN A DETAIL VIEW
 * @param {string} id - GIVE THE CURRENT TASK 
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
    checkIfTaskIsDone(id); //disable moveToNextArea() function if a Task is done.
}

/**
 * FUNCTION TO RENDER THE NAMES IN THE DETAIL CARD
 * @param {string} id - GIVE THE CURRENT TASK 
 * @param {string} names - GIVE THE CURRENT NAMES OF CHOOSEN EMPLOYERS
 */
function renderNamesInDetailCard(id, names) {
    let currentTemplate = document.getElementById('detail-view-names' + id);
    for (let j = 0; j < names.length; j++) {
        currentTemplate.innerHTML += `<span>${names[j]}</span>`;
    }
}

/**
 * FUNCTION FOR CLOSEING DETAIL VIEW
 * @param {string} id - GIVE THE CURRENT TASK
 */
function closeDetailView(id) {
    document.getElementById('detail-view' + id).classList.add('d-none');
    resetMoveIcon(id);
}

/**
 * FUNCTION FOR DRAG AND DROP
 * @param {string} id - GIVE THE CURRENT TASK
 */
function moveToNextArea(id) {
    let currentTask = tasksOnBoard.filter(t => t.id == id);
    currentTask = currentTask[0]; //id filtered array has only 1 position.
    if (currentTask['status'] == 'toDo') {
        currentTask['status'] = 'inProgress';
    } else {
        if (currentTask['status'] == 'inProgress') {
            currentTask['status'] = 'testing';
        } else {
            if (currentTask['status'] == 'testing') {
                currentTask['status'] = 'done';
            }
        }
    }
    saveBoardTaskStatus();
    renderBoard();
    closeDetailView(id);
}

/**
 * FUNCTION TO DISABLE MOVE ICON IF THE TASTK IS IN "DONE"
 * @param {string} id - GIVE THE NUMBER WHICH TASK IS CHOOSEN 
 */
function checkIfTaskIsDone(id) {
    let currentTask = tasksOnBoard.filter(t => t.id == id);
    currentTask = currentTask[0]; //id filtered array has only 1 position.
    if (currentTask['status'] == 'done') {
        hideMoveIcon(id);
    }
}

/**
 * FUNCTION TO RESET MOVE ICON
 * @param {string} id - GIVE THE NUMBER WHICH TASK IS CHOOSEN 
 */
function resetMoveIcon(id) {
    document.getElementById('move-icon' + id).classList.remove('d-none');
}

/**
 * FUNCTION TO HIDE MOVE ICON
 * @param {string} id - GIVE THE NUMBER WHICH TASK IS CHOOSEN 
 */
function hideMoveIcon(id) {
    document.getElementById('move-icon' + id).classList.add('d-none');
}

/**
 * FUNCTION TO DELETE A BOARD TASK
 * @param {string} id - GIVE THE NUMBER WHICH TASK IS CHOOSEN 
 */
async function deleteBoardTask(id) {
    let currentTask = tasksOnBoard.findIndex(obj => obj.id == id);
    let deleteBoardTask = document.getElementById('deleteBoardTask');
    closeDetailView(id);
    tasksOnBoard.splice(currentTask, 1);
    await deleteUserOnBoardDB();
    deleteBoardTask.classList.remove('d-none');
    setInterval(() => {
        deleteBoardTask.classList.add('d-none');
    }, 3000 / 1)
    renderBoard();
}