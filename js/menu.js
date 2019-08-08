var btnMenu = document.querySelector("#btnmenu");
var nav = document.querySelector("#nav");

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar');
})