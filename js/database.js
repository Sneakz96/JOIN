let tasksInBacklogDB = [];
let tasksOnBoardDB = [];

/**
 * ASYNC FUNCTION TO AWAIT BACKEND
 * @param {string} task - GIVE CURRENT TASK 
 */
async function addUserBacklogDB(task) {
    tasksInBacklogDB.push(task)
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB))
    await syncArrays();
}

/**
 * ASYNC FUNCTION TO DELETE USER IN BACKLOG/BACKEND
 */
async function deleteUserBacklogDB() {
    tasksInBacklogDB = tasksInBacklog;
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB))
    await syncArrays();
}

/**
 * ASYNC FUNCTION TO SPLICE USER OF BOARD
 */
async function deleteUserOnBoardDB() {
    tasksOnBoard = tasksOnBoardDB;
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoard))
    await syncArrays();
}

/**
 * ASYNC FUNCTION TO ADD A USER TO BOARD
 * @param {string} i - GIVE CURRENT/CHOOSEN TASK 
 */
async function addUserOnBoardDB(i) {
    tasksOnBoardDB.push(tasksInBacklogDB[i]);
    tasksInBacklogDB.splice(i, 1);
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoardDB) || []);
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB) || []);
    await syncArrays();
}

/**
 * ASYNC FUNCTION TO LOAD DATABASE
 */
async function loadDB() {
    await downloadFromServer();
    tasksInBacklogDB = JSON.parse(backend.getItem("backlogTasks")) || [];
    tasksOnBoardDB = JSON.parse(backend.getItem("onboardTasks")) || [];
    console.log('backlog', tasksInBacklogDB);
    console.log('onboard', tasksOnBoardDB);
}

/**
 * ASYNC FUNCTION TO DELETE A USER FROM DATABASE
 */
async function deleteUsersDB() {
    await backend.deleteItem('backlogTasks');
    await backend.deleteItem('onboardTasks');
    await syncArrays();
}

/**
 * ASYNC FUNCTION FOR SYNC ALL ARRAYS
 */
async function syncArrays() {
    await loadDB();
    tasksOnBoard = tasksOnBoardDB;
    tasksInBacklog = tasksInBacklogDB;
}

/**
 * ASYNC FUNCTION TO SAVE THE STATUS OF THE TASK
 */
async function saveBoardTaskStatus(){
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoardDB) || []);
    loadDB();
};