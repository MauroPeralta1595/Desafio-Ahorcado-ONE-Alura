const $botonMenuAgregarPalabra = document.querySelector(".boton-agregar-palabra");
const $menuAgregarPalabra = document.querySelector(".menu-agregar-palabra");

$botonMenuAgregarPalabra.addEventListener("click",function(){

    $menuPrincipal.classList.add("ocultar");
    $menuAgregarPalabra.classList.remove("ocultar");

});