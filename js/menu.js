function changeOnBoard(){
    document.getElementById('board').classList.add('active');
    document.getElementById('content').classList.remove('d-none');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('backlogContent').classList.add('d-none');
    document.getElementById('addtask').classList.remove('active');
    document.getElementById('addtaskContent').classList.add('d-none');
    document.getElementById('help').classList.remove('active');
}


function changeOnBacklog(){
    document.getElementById('backlog').classList.add('active');
    document.getElementById('backlogContent').classList.remove('d-none');
    document.getElementById('content').classList.add('d-none');
    document.getElementById('board').classList.remove('active');
    document.getElementById('addtask').classList.remove('active');
    document.getElementById('addtaskContent').classList.add('d-none');
    document.getElementById('help').classList.remove('active');
}


function changeOnAddTask(){
    document.getElementById('addtask').classList.add('active');
    document.getElementById('addtaskContent').classList.remove('d-none');
    document.getElementById('content').classList.add('d-none');
    document.getElementById('board').classList.remove('active');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('backlogContent').classList.add('d-none');
    document.getElementById('help').classList.remove('active');
}


function changeOnHelp(){
    document.getElementById('help').classList.add('active');
    document.getElementById('content').classList.add('d-none');
    document.getElementById('board').classList.remove('active');
    document.getElementById('backlog').classList.remove('active');
    document.getElementById('addtask').classList.remove('active');
}