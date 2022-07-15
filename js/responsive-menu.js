function openResponsiveMenu(){
    document.getElementById('responsive-menu').classList.add('show-responsive-menu');
    document.getElementById('responsive-menu-bg').classList.remove('d-none');
}

function closeResponsiveMenu(){
    document.getElementById('responsive-menu').classList.remove('show-responsive-menu');
    document.getElementById('responsive-menu-bg').classList.add('d-none');
}