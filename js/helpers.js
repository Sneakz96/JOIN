
//Help functions for board.js, backlog.js

/**
 * FUNCTION_GET_USER_NAMES
 */

function getUserNames(names, task) {
    for (let j = 0; j < task['assigned to'].length; j++) {
        let name = task['assigned to'][j]['name'];
        names.push(name);
    }
}

/**
 * FUNCTION_RENDER_USER_Name
 */

function renderUserName(i, names) {
    let boardTemplateElement = document.getElementById('dragable-card-names' + i);
    for (let j = 0; j < names.length; j++) {
        boardTemplateElement.innerHTML += /*html*/ `${names}`
    }
}

/**
 * FUNCTION_GUT_USER_EMAIL
 */

function getUserEmails(emails, task) {
    for (j = 0; j < task['assigned to'].length; j++) {
        let email = task['assigned to'][j]['e-mail'];
        emails.push(email);
    }
}

/**
 * FUNCTION_RENDER_USER_EMAIL
 */

function renderUserEmail(i, emails) {
    let backlogTemplate = document.getElementById('userEmail' + i);
    for (let j = 0; j < emails.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<a href="mailto:${emails[j]}">${emails[j]}</a>`;
    }
}


/**
 * FUNCTION_GUT_USER_IMG
 */

function getUserImg(userImgs, task) {
    for (j = 0; j < task['assigned to'].length; j++) {
        let userImg = task['assigned to'][j]['img.src'];
        userImgs.push(userImg);
    }
}

/**
 * FUNCTION_RENDER_USER_IMG
 */

function renderUserImg(i, userImgs) {
    let backlogTemplate = document.getElementById('userImg' + i);
    for (let j = 0; j < userImgs.length; j++) {
        backlogTemplate.innerHTML += /*html*/ `<img src="${userImgs[j]}" class="profile-picture-sm img">`;
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
