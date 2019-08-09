$(document).ready(function() {

    var btnMenu = $('#btnmenu');
    var nav = $('#nav');

    nav.hide();

    btnMenu.click(function() {
        nav.slideToggle('normal');
    })

})

