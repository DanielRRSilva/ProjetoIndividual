var R6buttom = document.getElementById("buttomr6")
var LOLbuttom = document.getElementById("buttomlol")
var CSGObuttom = document.getElementById("buttomcsgo")
var RLbuttom = document.getElementById("buttomrl")
var Overwatchbuttom = document.getElementById("buttomoverwatch")
var slideFirst = document.getElementById("slidefirst")

R6buttom.addEventListener("click", ()=> {
    slideFirst.style.marginLeft = "0%"
    R6buttom.classList.add("active")
    LOLbuttom.classList.remove("active")
    CSGObuttom.classList.remove("active")
    RLbuttom.classList.remove("active")
    Overwatchbuttom.classList.remove("active")
})

LOLbuttom.addEventListener("click", ()=> {
    slideFirst.style.marginLeft = "-20%"
    R6buttom.classList.remove("active")
    LOLbuttom.classList.add("active")
    CSGObuttom.classList.remove("active")
    RLbuttom.classList.remove("active")
    Overwatchbuttom.classList.remove("active")
})

CSGObuttom.addEventListener("click", ()=> {
    slideFirst.style.marginLeft = "-40%"
    R6buttom.classList.remove("active")
    LOLbuttom.classList.remove("active")
    CSGObuttom.classList.add("active")
    RLbuttom.classList.remove("active")
    Overwatchbuttom.classList.remove("active")
})

RLbuttom.addEventListener("click", ()=> {
    slideFirst.style.marginLeft = "-60%"
    R6buttom.classList.remove("active")
    LOLbuttom.classList.remove("active")
    CSGObuttom.classList.remove("active")
    RLbuttom.classList.add("active")
    Overwatchbuttom.classList.remove("active")
})

Overwatchbuttom.addEventListener("click", ()=> {
    slideFirst.style.marginLeft = "-80%"
    R6buttom.classList.remove("active")
    LOLbuttom.classList.remove("active")
    CSGObuttom.classList.remove("active")
    RLbuttom.classList.remove("active")
    Overwatchbuttom.classList.add("active")
})