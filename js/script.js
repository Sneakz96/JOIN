let pins = [];


function init() {

}


function addTask() {
    let = document.getElementById('');
    let = document.getElementById('');


}

function createTask() {
    let toDo = document.getElementById('toDo');
    let logs = document.getElementById('logs');

    toDo.innerHTML += /*html*/ `<div class="task bg-blue" id="">
    <span>Viel Spaß! Die Daten sind am Server!</span>
    </div>`

    logs.innerHTML += /*html*/ `<div class="contact-card">
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
        <div class="detail-card">Viel Spass! Die Daten sind am Server! :)</div>
        <img src="./icons/info-2-32.png" class="info-icon">
    </div>
</div>`
}

























/*CHANGE CATEGORYBUTTON.INNER HTML TO MANAGEMENT*/
function changeCategoryButtonTxt_MANAGEMENT() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Management';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO MARKETING*/
function changeCategoryButtonTxt_MARKETING() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Marketing';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO FINANCE*/
function changeCategoryButtonTxt_FINANCE() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Finance';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO OPERATION MANAGEMENT*/
function changeCategoryButtonTxt_OPERATION_MANAGEMENT() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Operation Management';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO IT*/
function changeCategoryButtonTxt_IT() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'IT';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO HUMAN RESOURCE*/
function changeCategoryButtonTxt_HUMAN_RESOURCE() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Human Resource';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO COSTUMER SERVICE*/
function changeCategoryButtonTxt_COSTUMER_SERVICE() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Costumer Service';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO PRODUCTION*/
function changeCategoryButtonTxt_PRODUCTION() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Production';
}

/*CHANGE CATEGORYBUTTON.INNER HTML TO TEAM*/
function changeCategoryButtonTxt_TEAM() {
    let categoryBtn = document.getElementById('categoryBtn');
    categoryBtn.innerHTML = 'Team';
}









/*CHANGE URGENCYBUTTON.INNER HTML TO LOW*/
function changeUrgencyButtonTxt_LOW() {
    let urgencyBtn = document.getElementById('urgencyBtn');
    urgencyBtn.innerHTML = 'Low';
}

/*CHANGE URGENCYBUTTON.INNER HTML TO MID*/
function changeUrgencyButtonTxt_MID() {
    let urgencyBtn = document.getElementById('urgencyBtn');
    urgencyBtn.innerHTML = 'Mid';
}

/*CHANGE URGENCYBUTTON.INNER HTML TO HIGH*/
function changeUrgencyButtonTxt_HIGH() {
    let urgencyBtn = document.getElementById('urgencyBtn');
    urgencyBtn.innerHTML = 'High';
}