const BOTON_NUEVO_JUEGO = document.querySelector('.nuevo-juego');

BOTON_NUEVO_JUEGO.addEventListener('click',function(){
    activadorJuego = 1;
    CANVAS.width=CANVAS.width;
    CUADRO_PALABRA_ESCONDIDA.innerHTML = '';
    CUADRO_LETRAS_REPETIDAS.innerText = '';
    contadorErrores = 0;
    letrasRepetidas = [];
    letrasCorrectas = [];
    palabraSecreta = elegirPalabra();
    dibujarLetras();
    mostrarRecuadroTematica();
})