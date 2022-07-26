/**
 * ASYNC FUNCTION AT START THE PAGE
 */
async function initAddTask() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderTeam();
  
}

/**
 * ASYNC FUNCTION AT START CLICK BOARD SECTION
 */
async function initBoard() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderBoard();
}

/**
 * ASYNC FUNCTION AT START CLICK BACKLOG SECTION
 */
async function initBacklog() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
    await renderBacklog();
}

/**
 * ASYNC FUNCTION AT START CLICK HELP SECTION
 */
async function initHelp() {
    setURL('https://gruppe-250.developerakademie.net/JOIN/smallest_backend_ever');
    await syncArrays();
}