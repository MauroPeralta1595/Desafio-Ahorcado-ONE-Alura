const RECUADRO_GANO = document.querySelector('.ganaste');

function mostrarRecuadroGano(){
    desactivarBotones()
    setTimeout(function () {
        for (let i = 0; i<SECCIONES_BLUR.length ; i++){
            SECCIONES_BLUR[i].classList.add('blur');
        }
        RECUADRO_GANO.classList.remove('ocultar');
    }, 200);
}