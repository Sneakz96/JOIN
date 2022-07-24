let tasksInBacklogDB = [];
let tasksOnBoardDB = [];

async function addUserBacklogDB(task) {
    tasksInBacklogDB.push(task)
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB))
    await syncArrays();
}


async function deleteUserBacklogDB() {
    tasksInBacklogDB = tasksInBacklog;
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB))
    await syncArrays();
}


async function deleteUserOnBoardDB() {
    tasksOnBoard = tasksOnBoardDB;
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoard))
    await syncArrays();
}


async function addUserOnBoardDB(i) {
    tasksOnBoardDB.push(tasksInBacklogDB[i]);
    tasksInBacklogDB.splice(i, 1);
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoardDB) || []);
    await backend.setItem('backlogTasks', JSON.stringify(tasksInBacklogDB) || []);
    await syncArrays();
}


async function loadDB() {
    await downloadFromServer();
    tasksInBacklogDB = JSON.parse(backend.getItem("backlogTasks")) || [];
    tasksOnBoardDB = JSON.parse(backend.getItem("onboardTasks")) || [];
    console.log('backlog', tasksInBacklogDB);
    console.log('onboard', tasksOnBoardDB);
}


async function deleteUsersDB() {
    await backend.deleteItem('backlogTasks');
    await backend.deleteItem('onboardTasks');
    await syncArrays();
}


async function syncArrays() {
    await loadDB();
    tasksOnBoard = tasksOnBoardDB;
    tasksInBacklog = tasksInBacklogDB;
}

async function saveBoardTaskStatus(){
    await backend.setItem('onboardTasks', JSON.stringify(tasksOnBoardDB) || []);
    loadDB();
};