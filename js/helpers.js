/**
 * FUNCTION TO GET THE NAMES OF THE USERS 
 * @param {string} names - NAME OF ALL USERS
 * @param {string} array - ARRAY OF ALL USER NAMES
 */
function getUserNames(names, array) {
    for (let j = 0; j < array['assigned to'].length; j++) {
        let name = array['assigned to'][j]['name'];
        names.push(name);
    }
}

/**
 * FUNCTION TO GET THE EMAIL OF THE CHOOSEN USER
 * @param {string} emails - PUSH EMAIL IN ARRAY
 * @param {string} array - SET ARRAY
 */
function getUserEmails(emails, array) {
    for (j = 0; j < array['assigned to'].length; j++) {
        let email = array['assigned to'][j]['e-mail'];
        emails.push(email);
    }
}

/**
 * FUNCTION TO GET THE IMG OF THE USERS
 * @param {string} userImgs - PUSH IMG OF USER IN ARRAY
 * @param {string} array - GIVE THE ARRAY WHERE THE PICTURES/DETAILS ARE
 */
function getUserImg(userImgs, array) {
    for (j = 0; j < array['assigned to'].length; j++) {
        let userImg = array['assigned to'][j]['img.src'];
        userImgs.push(userImg);
    }
}

/**
 * FUNCTION TO ADD URGENCY COLOR TO BACKLOG
 * HIGH = RED, MID = YELLOW, LOW = GREEN
 * @param {string} i - GIVE NUMBER OF TASK
 * @param {string} task - GIVE CONTENT OF CURRENT TASK
 */
function addUrgencyColorsToBacklog(i, task) {
    let color = task['urgency'];
    document.getElementById('contact-card' + i).classList.add(color);
}

/**
 * FUNCTION TO ADD URGENCY COLOR TO BOARD
 * HIGH = RED, MID = YELLOW, LOW = GREEN
 * @param {string} i - GIVE NUMBER OF TASK
 * @param {string} task - GIVE CONTENT OF CURRENT TASK
 */
function addUrgencyColorsToBoard(i, task) {
    let color = task['urgency'];
    document.getElementById('dragable-card' + i).classList.add(color);
}

/**
 * FUNCTION TO ADD URGENCY COLOR TO DETAIL CARD
 * HIGH = RED, MID = YELLOW, LOW = GREEN
 * @param {string} i - GIVE NUMBER OF TASK
 * @param {string} currentTask - GIVE CONTENT OF CURRENT TASK
 */
function addUrgencyColorToDetailCard(i, currentTask) {
    let color = currentTask['urgency'];
    document.getElementById('detail-view-container' + i).classList.add(color);
}

/**
 * FUNCTION TO STOP AUTOMATICAL CLOSE
 * @param {string} event - GIVE EVENT
 */
function stopAutoClose(event) {
    event.stopPropagation();
}

/**
 * FUNCTION TO GENERATE A ID
 */
function idGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0);
    };
    return (S4()+S4()+S4()+S4()+S4());
}