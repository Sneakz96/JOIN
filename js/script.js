/**
 * FUNCTION_AT_START
 */
async function init() {
    setURL('http://gruppe-250.developerakademie.net/Gruppenarbeit%20JOIN/smallest_backend_ever');
    await syncArrays();
    await renderBoard();
    await renderTeam();
    await renderBacklog();
}