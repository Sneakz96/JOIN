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

function createTask_TEMPLATE_LOGS(i, title, category, description) {
    return /*html*/ `
 <div class="contact-card">
    <div class="color"></div>
    <div class="infos">
        <div class="contact">
            <div id="userImg${i}" class="contact-picture">
            <!-- profile pictures are rendered here-->
            </div>
            <div class="contact-name">
                <span>${title}</span>
                <div id="userEmail${i}" class="contact-email">
            <!-- user emails are rendered here-->
                </div>
            </div>
        </div>
        <div id="category">
        ${category}
        </div>
        <div class="detail-card">${description}</div>
    </div>
    <div class="icon-container">
       <img onclick="addToDo(${i})" src="./icons/arrow.png" class="contact-card-icon">
       <img onclick="deleteBacklogTask(${i})" src="./icons/trash.ico" class="contact-card-icon">
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