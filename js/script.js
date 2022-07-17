/**
 * FUNCTION_AT_START
 */
async function initAddTask() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderTeam();
  
}

async function initBoard() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderBoard();
}

async function initBacklog() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderBacklog();
}

async function initHelp() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
}