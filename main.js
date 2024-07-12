var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon');
var iconMenu = document.querySelector('nav .menu-icon img');


                            /*quando clicar no menu, vai executar essa function abaixo*/
menuBar.addEventListener('click', function(){

    if (iconMenu.getAttribute("src") == 'img/menu.png') {
        iconMenu.setAttribute("src","img/close.png");
    }
    else{
        iconMenu.setAttribute("src","img/menu.png");
    }

    menu.classList.toggle('active');
});