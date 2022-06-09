const BOTON_NUEVO_JUEGO = document.querySelector('.nuevo-juego');

BOTON_NUEVO_JUEGO.addEventListener('click',function(){
    CANVAS.width=CANVAS.width;
    CUADRO_PALABRA_ESCONDIDA.innerHTML = '';
    CUADRO_LETRAS_REPETIDAS.innerText = '';
    contadorErrores = 0;
    letrasRepetidas = [];
    letrasCorrectas = [];
    palabraSecreta = elegirPalabra();
    let esPalabraRepetida = palabrasRepetidas.includes(palabraSecreta);
    while (esPalabraRepetida){
        palabraSecreta = elegirPalabra();
        esPalabraRepetida = palabrasRepetidas.includes(palabraSecreta);
        if(palabrasRepetidas.length === ( (palabrasComidas.length-1) + (palabrasGenerales.length-1) + (palabrasProgramacion.length-1) + (palabrasPaises.length-1))){
            palabrasRepetidas = [];
            break;
        }
    }
    palabrasRepetidas.push(palabraSecreta);
    dibujarLetras();
    mostrarRecuadroTematica();
    BOTON_DESISTIR.disabled = false;
    activadorJuego = 0;
})