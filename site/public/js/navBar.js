var iconBox = document.querySelector(".iconBox")
var navBar = document.querySelector(".navBar")
var profileIcon = document.querySelector(".profileIcon")
var subMenu = document.querySelector(".subMenu")
var idUser = sessionStorage.ID_USUARIO

iconBox.onclick = function() {
    iconBox.classList.toggle("active")
    navBar.classList.toggle("active")
}

profileIcon.onclick = function() {
    if(idUser != undefined) {
        subMenu.classList.toggle("active")
    }else {
        alert(`Faça Login`)
    }
}

document.onclick = function(e) {
    if(!iconBox.contains(e.target) && !navBar.contains(e.target) && !subMenu.contains(e.target)) {
        iconBox.classList.remove("active")
        navBar.classList.remove("active")
        subMenu.classList.remove("active")
    }
}

function sair() {
    sessionStorage.clear()
    window.location = "../index.html"
}