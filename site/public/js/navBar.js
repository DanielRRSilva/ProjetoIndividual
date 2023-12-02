var iconBox = document.querySelector(".iconBox")
var navBar = document.querySelector(".navBar")
var profileIcon = document.querySelector(".profileIcon")
var subMenu = document.querySelector(".subMenu")
var idUser = sessionStorage.ID_USUARIO
var alerta = document.getElementById("alerta")
var mensagem = document.getElementById("mensagem")
var loginBtn = document.getElementById("loginButton")
var dashBtn = document.getElementById("dashButton")
var perfilBtn = document.getElementById("perfilButton")

iconBox.onclick = function() {
    iconBox.classList.toggle("active")
    navBar.classList.toggle("active")
}

profileIcon.onclick = function() {
    subMenu.classList.toggle("active")
    if(idUser == undefined) {
        dashBtn.style.display = "none"
        perfilBtn.style.display = "none"
    }else {
        loginBtn.style.display = "none"
        dashBtn.style.display = "block"
        perfilBtn.style.display = "block"
    }
}

document.onclick = function(e) {
    if(!iconBox.contains(e.target) && !navBar.contains(e.target) && !subMenu.contains(e.target)) {
        iconBox.classList.remove("active")
        navBar.classList.remove("active")
        subMenu.classList.remove("active")
    }
}

function logout() {
    sessionStorage.clear()
    window.location = "../index.html"
}