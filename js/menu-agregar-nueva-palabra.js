const BOTON_MENU_AGREGAR_PALABRA = document.querySelector(".boton-agregar-palabra");
const MENU_AGREGAR_PALABRA = document.querySelector(".menu-agregar-palabra");

BOTON_MENU_AGREGAR_PALABRA.addEventListener("click",function(){

    MENU_PRINCIPAL.classList.add("ocultar");
    MENU_AGREGAR_PALABRA.classList.remove("ocultar");

});