let allTasks = [];


function init() {

}


function createTask() {
    let title = document.getElementById('title').value;
    let category = document.getElementById('categoryBtn').innerHTML;
    let description = document.getElementById('description').value;
    let dueDate = document.getElementById('dueDate').value;
    let urgency = document.getElementById('urgencyBtn').innerHTML;
    //let asiTo = document.getElementById('').value;

    let task = {
        'title' :title,
        'category' : category,
        'description' : description,
        'createdAt' : new Date().getTime(),
        'dueDate': dueDate,
        'urgency' : urgency,
    }
    
    
    allTasks.push(task);
    
    console.log(allTasks);


    addToDo();
    addBacklog();

}




function addToDo() {
    let toDo = document.getElementById('toDo');
    toDo.innerHTML += createTask_TEMPLATE_TO_DO();
}

function addBacklog() {
    let logs = document.getElementById('logs');
    logs.innerHTML += createTask_TEMPLATE_LOGS();
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