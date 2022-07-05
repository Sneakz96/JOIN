
//Help functions for board.js, backlog.js

/**
 * FUNCTION_GET_USER_NAMES
 */

function getUserNames(names, array) {
    for (let j = 0; j < array['assigned to'].length; j++) {
        let name = array['assigned to'][j]['name'];
        names.push(name);
    }
}


/**
 * FUNCTION_GUT_USER_EMAIL
 */

function getUserEmails(emails, array) {
    for (j = 0; j < array['assigned to'].length; j++) {
        let email = array['assigned to'][j]['e-mail'];
        emails.push(email);
    }
}

/**
 * FUNCTION_GUT_USER_IMG
 */

function getUserImg(userImgs, array) {
    for (j = 0; j < array['assigned to'].length; j++) {
        let userImg = array['assigned to'][j]['img.src'];
        userImgs.push(userImg);
    }
}

/**
 * FUNCTION_ADD_URGENCY_COLOR_TO_BOARD
 * the name of the css class is identical to the name of 'urgency' (Low, Mid, High)
 * High = red, Mid = yellow, Low = green
 */

function addUrgencyColorsToBacklog(i, task) {
    let color = task['urgency'];
    document.getElementById('contact-card' + i).classList.add(color);
}

/**
 * FUNCTION_ADD_URGENCY_COLOR_TO_BOARD
 * the name of the css class is identical to the name of 'urgency' (Low, Mid, High)
 * High = red, Mid = yellow, Low = green
 */

function addUrgencyColorsToBoard(i, task) {
    let color = task['urgency'];
    document.getElementById('dragable-card' + i).classList.add(color);
}

/**
 * FUNCTION_ADD_URGENCY_COLOR_TO_DETAIL_CARD
 * the name of the css class is identical to the name of 'urgency' (Low, Mid, High)
 * High = red, Mid = yellow, Low = green
 */

function addUrgencyColorToDetailCard(i, currentTask) {
    let color = currentTask['urgency'];
    document.getElementById('detail-view-container' + i).classList.add(color);
}


/**
 * FUNCTION_STOP_AUTO_CLOSE
 */

function stopAutoClose(event) {
    event.stopPropagation();
}


/**
 * Function Id Generator
 */

function idGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0);
    };
    return (S4()+S4()+S4()+S4()+S4());
}
