function createTask_TEMPLATE_TO_DO(i, title, date) {
    return /*html*/ `
    <div id="dragable-card${i}" class="dragable-card">
       <span class="dragable-card-title">${title}</span>
         <div id="dragable-card-names${i}" class="dragable-card-names">
           <!--names are rendered here-->
         </div>
       <span class="dragable-card-date">${date}</span>
    </div>`;
}

function createTask_TEMPLATE_LOGS(i, title, category, description) {
    return /*html*/ `
 <div id="contact-card${i}" class="contact-card">
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