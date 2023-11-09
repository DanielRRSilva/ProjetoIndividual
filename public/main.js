var iconBox = document.querySelector(".iconBox")
var navBar = document.querySelector(".navBar")

iconBox.onclick = function() {
    iconBox.classList.toggle("active")
    navBar.classList.toggle("active")
}

document.onclick = function(e) {
    if(!iconBox.contains(e.target) && !navBar.contains(e.target)) {
        iconBox.classList.remove("active")
        navBar.classList.remove("active")
    }
}