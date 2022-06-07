const BOTON_INICIAR_JUEGO = document.querySelector(".iniciar-juego");
const MENU_PRINCIPAL = document.querySelector(".menu-principal");
const MENU_JUEGO = document.querySelector(".menu-juego");

BOTON_INICIAR_JUEGO.addEventListener("click", function(){
    MENU_PRINCIPAL.classList.add("ocultar");
    MENU_JUEGO.classList.remove("ocultar");
    CANVAS.width=CANVAS.width;
    contadorErrores = 0;
    palabraSecreta = elegirPalabra();
    activadorJuego = 1;
    dibujarLetras();
    mostrarRecuadroTematica();
})
