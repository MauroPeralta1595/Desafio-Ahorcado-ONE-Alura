const BOTON_VOLVER_AL_MENU = document.querySelector(".volver-inicio");

BOTON_VOLVER_AL_MENU.addEventListener("click",function(){
    MENU_PRINCIPAL.classList.remove("ocultar");
    MENU_JUEGO.classList.add("ocultar");
    CANVAS.width=CANVAS.width
    contadorErrores = 0;
    CUADRO_PALABRA_ESCONDIDA.innerHTML = '';
    CUADRO_LETRAS_REPETIDAS.innerText = '';
    letrasRepetidas = [];
    activadorJuego = 0;
    letrasCorrectas = [];
    BOTON_DESISTIR.disabled = false;
})