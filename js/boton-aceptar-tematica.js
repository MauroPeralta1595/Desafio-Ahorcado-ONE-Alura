const BOTON_ACEPTAR_TEMATICA = document.querySelector('.aceptar-tematica');
const CATEGORIAS = [".programacion",".comida",".paises",".general"];
BOTON_ACEPTAR_TEMATICA.onclick = cerrarCuadroAceptar;

function cerrarCuadroAceptar(tematica){
    activarBotones ()
    for (let i = 0; i<SECCIONES_BLUR.length ; i++){
        SECCIONES_BLUR[i].classList.remove('blur');
    }

    let categoria = document.querySelectorAll(CATEGORIAS[indice1]);

    for(let i = 0; i <categoria.length; i++){
        categoria[i].classList.add('ocultar');
    }

    RECUADRO_TEMATICA.classList.add('ocultar');
    activadorJuego = 1;
}

