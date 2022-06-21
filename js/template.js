function createTask_TEMPLATE_TO_DO() {
    return /*html*/ `
    <div class="task bg-blue" id="">
    <span>Viel Spaß!</span>
    </div>`;
}


/* function createTask_TEMPLATE_LOGS() {
    return /*html
`
    <div class="contact-card">
    <div class="color"></div>
    <div class="infos">
        <div class="contact">
            <img src="./img/jahleel.jpg" class="profile-picture img">
            <div class="contact-name">
                <span>Jahleel Heider</span>
                <a href="#">Jahleelr-h@gmx.de</a>
            </div>
        </div>
        <div id="category">
            Office
        </div>
        <div class="detail-card">Viel Spass!</div>
        <img src="./icons/info-2-32.png" class="info-icon">
    </div>
    </div>`;
} * / */

function createTask_TEMPLATE_LOGS(title, category, asiToImg, email, description) {
    return /*html*/ `
    <div class="contact-card">
    <div class="color"></div>
    <div class="infos">
        <div class="contact">
            <img src="${asiToImg}" class="profile-picture img">
            <div class="contact-name">
                <span>${title}</span>
                <a href="mailto:${email}">${email}</a>
            </div>
        </div>
        <div id="category">
        ${category}
        </div>
        <div class="detail-card">${description}</div>
        <img src="./icons/info-2-32.png" class="info-icon">
    </div>
    </div>`;
}

function renderTeam_template(i) {
    return /*html*/ `
    <div class="team-img" onclick="addTeamImg(${i})">
    <img id="member_${i}" src="${team[i]['img.src']}" class="profile-picture m-10">
    </div>`;
}


function addTeamImg_template(i) {
    return `<div class="receiver" id="">
    <img id="members_${i}" src="${assignTo[i]['img.src']}" class="profile-picture">
    </div>`;
}