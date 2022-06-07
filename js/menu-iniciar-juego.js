const $botonIniciarJuego = document.querySelector(".iniciar-juego");
const $menuPrincipal = document.querySelector(".menu-principal");
const $juego = document.querySelector(".menu-juego");

$botonIniciarJuego.addEventListener("click", function(){
    $menuPrincipal.classList.add("ocultar");
    $juego.classList.remove("ocultar");
    canvas.width=canvas.width;
    contadorErrores = 0;
    palabraSecreta = elegirPalabra();
    activadorJuego = 1;
    dibujarLetras();
})
