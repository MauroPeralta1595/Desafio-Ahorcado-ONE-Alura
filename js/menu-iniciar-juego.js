const BOTON_INICIAR_JUEGO = document.querySelector(".iniciar-juego");
const MENU_PRINCIPAL = document.querySelector(".menu-principal");
const MENU_JUEGO = document.querySelector(".menu-juego");
const FOOTER = document.querySelector('footer');
const HEADER = document.querySelector('header');
const BOTONES_JUEGO = document.querySelector('.botones-juego');
const PALABRA_VISIBLE = document.querySelector('.palabra');


BOTON_INICIAR_JUEGO.addEventListener("click", function(){
    MENU_PRINCIPAL.classList.add("ocultar");
    MENU_JUEGO.classList.remove("ocultar");
    CANVAS.width=CANVAS.width;
    contadorErrores = 0;
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
})
