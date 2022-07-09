function createTask_TEMPLATE_TO_DO(id, title, date) {
    return /*html*/ `
    <div id="dragable-card${id}" draggable="true" ondragstart="startDragging(${id})" class="dragable-card" onclick="openDetailView(${id})">
       <span class="dragable-card-title">${title}</span>
         <div id="dragable-card-names${id}" class="dragable-card-names">
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

function detailViewTemplate(id, title, category, description) {
    return /*html*/ `
    <div id="detail-view${id}" class="detail-view-bg" onclick="closeDetailView(${id})">
        <div id="detail-view-container${id}" class="detail-view-container" onclick="stopAutoClose(event)">
            <img onclick="closeDetailView(${id})" src="./icons/x-mark.png" class="detail-view-x-mark">
            <span class="detail-card-title">${title}</span>
            <div class="detail-card-category">${category}</div>
            <span class="detail-card-description">${description}</span>
            <div id="detail-view-names${id}" class="detail-card-names">
                <!--names are rendered here-->
            </div>
            <img onclick="deleteBoardTask(${id})" src="./icons/trash.ico" class="detail-view-trash-icon">
        </div>
    </div>
    `;
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